// import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'
import PostAccordion from '@/components/post-accordion/PostAccordion'

const Postfetch = () => {
  // eslint-disable-next-line quotes
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/publicaciones?post_type=bunch_faqs`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function Faq () {
  const listPost = await Postfetch()
  console.log(listPost)
  return (
    <article class={style.content}>
      <div className={style.contain}>
        <PostAccordion data={listPost} />
      </div>
    </article>
  )
}
