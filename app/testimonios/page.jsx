/* eslint-disable camelcase */
import HeroPost from '@/components/hero-post/HeroPost'
import PageTestimonials from '@/components/page-testimonials/PageTestimonials'
import style from './page.module.css'

const fetchSinglePage = (slug) => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/get_pages?slug=${slug}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function CursoGratis () {
  const dataPage = await fetchSinglePage('testimonios-2')
  const { title, featured_image, video_principal, add_testimonials } = dataPage[0]

  return (
    <>
      <HeroPost
        title={title}
        featured_image={featured_image}
      />
      <section className={style.testimonials}>
        <PageTestimonials
          mainTestimonial={video_principal}
          testimonials={add_testimonials}
        />
      </section>
    </>
  )
}
