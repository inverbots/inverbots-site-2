'use client'
import style from './Testimonios.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Testimonials (props) {
  const data = props.data
  const slidesPerView = props.slidesPerView || 1;

  return (
    <div className={style.content}>
      <h2 className={style.title}>{data.titulo_de_seccion}</h2>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        loop
        navigation
        modules={[Navigation, Pagination]}
        className={style.content_slider}
        slidesPerView={slidesPerView}
      >
        {data.agregar_testimonios.map((e, key) => {
          return (
            <SwiperSlide key={key} className={style.testimonial}>
              <div className={style.testimonial_text_content}>
                <p className={style.testimonial_text}>{e.testimonio}</p>
                <p className={style.testimonial_name}>{e.nombre_de_quien_da_el_testimonio}</p>
              </div>
              <div className={style.testimonial_video}>
                <div className={style.testimonial_video__html} dangerouslySetInnerHTML={{ __html: e.video_de_testimonio }} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
