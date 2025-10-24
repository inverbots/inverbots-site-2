/* eslint-disable camelcase */
import HeroPost from '@/components/hero-post/HeroPost'
import PageTestimonials from '@/components/page-testimonials/PageTestimonials'
import style from './page.module.css'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'

const slug = 'testimonios-2'

export async function generateMetadata() {
  try {
    const titleData = await fetchPage(slug)
    if (!titleData || titleData.length === 0) {
      return {
        title: 'Testimonios - Inverbots',
        description: 'Testimonios de nuestros estudiantes'
      }
    }
    return getMetadata(titleData)
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Testimonios - Inverbots',
      description: 'Testimonios de nuestros estudiantes'
    }
  }
}

export default async function CursoGratis() {
  const dataPage = await fetchPage(slug)
  
  // ✅ VALIDAR ANTES DE USAR
  if (!dataPage || dataPage.length === 0) {
    return (
      <div>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, no pudimos cargar esta página.</p>
      </div>
    )
  }

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
