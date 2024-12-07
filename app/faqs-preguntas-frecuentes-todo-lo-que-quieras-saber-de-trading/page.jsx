// import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'
import PostAccordion from '@/components/post-accordion/PostAccordion'

const Postfetch = () => {
  // eslint-disable-next-line quotes
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/publicaciones?post_type=bunch_faqs`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export const metadata = {
  title: 'Preguntas frecuentes',
  description:'Preguntas frecuentes Inverbots | Inverbots'
}

export default async function Faq () {
  const listPost = await Postfetch()
  return (
    <article className={style.content}>
      <div className={style.contain}>
        <PostAccordion data={listPost} />
      </div>
    </article>
  )
}
