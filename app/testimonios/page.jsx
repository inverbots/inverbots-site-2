/* eslint-disable camelcase */
import HeroPost from '@/components/hero-post/HeroPost'
import PageTestimonials from '@/components/page-testimonials/PageTestimonials'
import style from './page.module.css'
import fetchPage from '@/services/fetchPage'
import fetchTitle from '@/services/fetchTitle'
import getMetadata from '@/services/metadata'

const slug = 'testimonios-2'

try {
} catch (error) {
  console.error('Error fetching Yoast:', error)
}
const titleData = await fetchPage(slug)

export const metadata = getMetadata(titleData)

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
