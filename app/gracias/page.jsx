import backgroundImage from './inverbot-contact.webp';
import Image from 'next/image';
import style from './gracia.module.css'

const fetchPost = (slug) => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/get_pages?slug=${slug}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function ThanYou(slug) {

  const posts = await fetchPost('gracias')

  const {src, width, height} = backgroundImage
  return (
    <div className={style.content}>
      <Image
        className={style.background}
        src={src}
        width={width}
        height={height}
        alt="inverbots"
      />
      <div className={style.text_content}>
        <h1 className={style.title_content}>
          {posts[0].title}
        </h1>
        <p className={style.paragraph}>
          {posts[0].excerpt}
        </p>
      </div>
    </div>
  )
}
