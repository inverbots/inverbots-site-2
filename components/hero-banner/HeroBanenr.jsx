import style from './HeroBanner.module.css'
import Image from 'next/image'

export default async function HeroBaner (props) {
  const fetchPost = () => {
    return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/get_pages?slug=${props.slug}`, {
      next: {
        revalidate: 60
      }
    })
      .then(rest => rest.json())
  }

  const pageData = await fetchPost()
  const DataSimple = pageData[0]

  return (
    <div className={style.content}>
      <div className={style.banner}>
        <h1 className={style.title}>{DataSimple.title}</h1>
        {DataSimple.featured_image && (
          <Image
            src={DataSimple.featured_image}
            alt={DataSimple.title}
            width={1440}
            height={450}
            className={style.featured_image}
            priority
          />)}
      </div>
    </div>
  )
}
