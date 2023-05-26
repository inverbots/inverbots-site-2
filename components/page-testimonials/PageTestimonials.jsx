/* eslint-disable camelcase */
import style from './pageTestimonials.module.css'

export default function PageTestimonials (props) {
  return (
    <div className={style.testimonials}>
      <div className={style.main_comment}>
        <div dangerouslySetInnerHTML={{ __html: props.mainTestimonial.url_del_video }} />
        <p className={style.testimonail_text}>{props.mainTestimonial?.texto_complementario_video}</p>
      </div>
      <div className={style.testimonials_list}>
        {props.testimonials.map((list, key) => {
          const { texto_complementarios_testimonio, url_video_testimonio } = list
          return (
            <div className={style.list_testimonials} key={key}>
              <div dangerouslySetInnerHTML={{ __html: url_video_testimonio }} />
              <p>{texto_complementarios_testimonio}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
