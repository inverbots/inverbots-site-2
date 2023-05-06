import Image from 'next/image'
import Link from 'next/link'
import style from './CardPost.module.css'

export default function CardPost (props) {
  return (
    <div className={style.content_card}>
      <div className={style.content_image}>
        <span className={style.date_post}>{props.date}</span>
        <Image
          src={props.image}
          alt={`Inverbots ${props.title}`}
          width={300}
          height={200}
        />
      </div>
      <div className={style.body_card}>
        <span className={style.card_cat}>{props.categories}</span>
        <h3 className={style.card_title} dangerouslySetInnerHTML={{ __html: props.title }} />
        <div className={style.card_body}>
          {props.excerpt && (
            <div className={style.card_excerpt}>
              <p className={style.excerpt_text} dangerouslySetInnerHTML={{ __html: props.excerpt }} />
            </div>
          )}
        </div>
        <div className={style.card_footer}>
          <Link className={style.card_link} href={'/' + props.slug}>Leer más</Link>
        </div>
      </div>
    </div>
  )
}
