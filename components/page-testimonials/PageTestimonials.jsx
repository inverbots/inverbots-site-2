/* eslint-disable camelcase */
'use client'
import { useEffect, useState, useRef } from 'react'
import style from './pageTestimonials.module.css'
import 'lite-youtube-embed/src/lite-yt-embed.css'

function getYouTubeId(url) {
  if (!url) return null
  if (url.includes('<iframe')) {
    const match = url.match(/src=["'](.*?)["']/)
    if (match && match[1]) {
      url = match[1]
    }
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export default function PageTestimonials({ mainTestimonial, testimonials = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const playerRefs = useRef({})
  const activeIndexRef = useRef(null)

  useEffect(() => {
    import('lite-youtube-embed')

    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }
  }, [])

  const handleVideoClick = (index, videoId) => {
    // Only set expanded if not already (to avoid re-triggering logic unnecessarily)
    if (expandedIndex !== index) {
      activeIndexRef.current = index
      setExpandedIndex(index)
    }

    const checkIframe = setInterval(() => {
      const container = document.getElementById(`testimonial-card-${index}`)
      const iframe = container?.querySelector('iframe')

      if (iframe && window.YT && window.YT.Player) {
        clearInterval(checkIframe)

        playerRefs.current[index] = new window.YT.Player(iframe, {
          events: {
            'onStateChange': (event) => {
              const playerState = event.data
              const PLAYING = 1

              if (playerState === PLAYING) {
                // Pause others logic
                Object.keys(playerRefs.current).forEach((key) => {
                  const otherIndex = parseInt(key)
                  if (otherIndex !== index) {
                    const otherPlayer = playerRefs.current[key]
                    if (otherPlayer && typeof otherPlayer.pauseVideo === 'function') {
                      otherPlayer.pauseVideo()
                    }
                  }
                })
                activeIndexRef.current = index
              }
              // REMOVED: Logic to collapse on PAUSE or ENDED
            }
          }
        })
      }
    }, 500)

    setTimeout(() => clearInterval(checkIframe), 10000)
  }

  const handleClose = (e, index) => {
    e.stopPropagation() // Prevent triggering the card click
    setExpandedIndex(null)
    activeIndexRef.current = null

    // Optionally pause the video when closing
    const player = playerRefs.current[index]
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo()
    }
  }

  const mainVideoId = getYouTubeId(mainTestimonial?.url_del_video)

  return (
    <div className={style.container}>
      {mainVideoId && (
        <section className={style.featuredSection}>
          <h2 className={style.sectionTitle}>Historia Destacada</h2>
          <div className={style.featuredCard}>
            <div className={style.featuredVideoWrapper}>
              <lite-youtube videoid={mainVideoId} playlabel='Reproducir video' />
            </div>
            <div className={style.featuredContent}>
              <p className={style.featuredText}>{mainTestimonial?.texto_complementario_video}</p>
            </div>
          </div>
        </section>
      )}

      <section className={style.gridSection}>
        <h2 className={style.sectionTitle}>Más Historias de Éxito</h2>
        <div className={style.grid}>
          {testimonials.map((item, index) => {
            const videoId = getYouTubeId(item.url_video_testimonio)
            if (!videoId) return null

            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                id={`testimonial-card-${index}`}
                className={`${style.card} ${isExpanded ? style.expanded : ''}`}
                onClick={() => handleVideoClick(index, videoId)}
              >
                {isExpanded && (
                  <button
                    className={style.closeButton}
                    onClick={(e) => handleClose(e, index)}
                    aria-label="Cerrar video"
                  >
                    ×
                  </button>
                )}

                <div className={style.videoWrapper}>
                  <lite-youtube
                    videoid={videoId}
                    playlabel='Reproducir testimonio'
                    params="enablejsapi=1"
                  />
                </div>
                {item.texto_complementarios_testimonio && (
                  <p className={style.cardText}>{item.texto_complementarios_testimonio}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
