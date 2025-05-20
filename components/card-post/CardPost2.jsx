import Image from 'next/image'
import Link from 'next/link'
import style from './CardPost2.module.css'

export default function CardPost2 (props) {
  return (
    <div className={style.content_card}>
      <Link href={'/' + props.slug}>
        <div className={style.content_image}>
          <img
            src={props.image}
            alt={`Inverbots ${props.title}`}
            width={300}
            height={200}
            loading='lazy'
          />
        </div>
      </Link>
      <div className={style.body_card}>
        <Link className={style.card_to_instagram} href='https://www.instagram.com/inverbots/'>Seguir en Instagram</Link>
        <Link href={'/' + props.slug} className={style.body_anchor}>
          <h3 className={style.card_title} dangerouslySetInnerHTML={{ __html: props.title }} />
          <div className={style.card_body}>
            {props.excerpt && (
              <div className={style.card_excerpt}>
                <p className={style.excerpt_text} dangerouslySetInnerHTML={{ __html: props.excerpt }} />
              </div>
            )}
          </div>
        </Link>
        <div className={style.card_footer}>
          <Link className={style.card_link} href={'/' + props.slug}>Leer más</Link>
        </div>
      </div>
    </div>
  )
}
