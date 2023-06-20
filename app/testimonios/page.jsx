/* eslint-disable camelcase */
import HeroPost from '@/components/hero-post/HeroPost'
import PageTestimonials from '@/components/page-testimonials/PageTestimonials'
import style from './page.module.css'
import fetchYoast from '@/libs/fetchYoast'
import fetchPage from '@/libs/fetchPage'
import getMetadata from '@/libs/metadata'

const slug = 'testimonios-2'

const dataSEO = await fetchYoast(slug)
const JSONYoast = dataSEO.json

export const metadata = getMetadata(JSONYoast)

export default async function CursoGratis () {
  const dataPage = await fetchPage(slug)
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
