import CardPost2 from '@/components/card-post2/CardPost2'
import style from './page.module.css'

const fetchPost = () => {
  // eslint-disable-next-line quotes
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/publicaciones?category=operaciones`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function Publicaciones () {
  const posts = await fetchPost()

  return (
    <>
      <section className={style.contents}>
        {posts.slice(0, 12).map((post, key) => (
          <article key={key} className={style.post_card}>
            <CardPost2
              title={post.title}
              date={post.date}
              image={post.featured_image}
              excerpt={post.excerpt}
              categories={post.categories[0].name}
              slug={post.slug}
            />
          </article>
        ))}
      </section>
    </>
  )
}
