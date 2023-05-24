import style from './HeroPost.module.css'
import Image from 'next/image'

export default async function HeroPost (props) {
  return (
    <div>
      <div className={style.banner}>
        <h1 className={style.title} dangerouslySetInnerHTML={{ __html: props.title }} />
        {props.featured_image && (
          <div className={style.content_image}>
            <Image
              src={props.featured_image}
              alt={props.title}
              width={1440}
              height={450}
              className={style.featured_image}
            />
          </div>
        )}
      </div>
    </div>
  )
}
