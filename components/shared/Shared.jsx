'use client'
import { useState, useEffect } from 'react'
import style from './shared.module.css'
import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function Shared(props) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    // Solo se ejecuta en el cliente
    setCurrentUrl(window.location.href)
  }, [])

  // Renderiza vacío hasta tener la URL
  if (!currentUrl) {
    return null
  }

  return (
    <div className={style.content}>
      <ul className={style.content_shared}>
        <li className={style.icon_social}>Compartir</li>
        <li className={style.icon_social}>
          <Link href={`whatsapp://send?text=${props.title} ${currentUrl}`}>
            <WhatsAppIcon />
          </Link>
        </li>
        <li className={style.icon_social}>
          <Link href={`https://www.facebook.com/sharer.php?u=${currentUrl}&quote=${props.title}`}>
            <FacebookOutlinedIcon />
          </Link>
        </li>
        <li className={style.icon_social}>
          <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}>
            <LinkedInIcon />
          </Link>
        </li>
        <li className={style.icon_social}>
          <Link href={`https://twitter.com/intent/tweet?url=${currentUrl}`}>
            <TwitterIcon />
          </Link>
        </li>
      </ul>
    </div>
  )
}
