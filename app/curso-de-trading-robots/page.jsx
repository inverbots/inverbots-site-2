/* eslint-disable camelcase */
import Form from '@/components/form/Form'
import TextCallAction from '@/components/text-call-to-action/TextCallAction'
import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import './page.css'
import fetchTitle from '@/services/fetchTitle'
import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'

const slug = 'curso-de-trading-gratis-aprende-desde-cero-con-nosotros'

export async function generateMetadata() {
  try {
    const titleData = await fetchTitle(slug)
    if (!titleData) {
      return {
        title: 'Curso de Trading Gratis - Inverbots',
        description: 'Aprende desde cero con nuestro curso gratuito'
      }
    }
    return getMetadata(titleData)
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Curso de Trading Gratis - Inverbots',
      description: 'Aprende desde cero con nuestro curso gratuito'
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

  const { title, featured_image, content } = dataPage[0]
  
  return (
    <>
      <HeroPost
        title={title}
        featured_image={featured_image}
        logo={true}
      />
      <div className={style.free_curse}>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        <div className={style.content_form}>
          <TextCallAction
            className={style.form_freecurse}
            firstTitle='Accede a nuestro'
            secondTitle='curso gratis'
            description='Este curso fue construido con la finalidad de ayudar, de manera gratuita, a todas las personas interesadas por aprender sobre la negociación en los mercados financieros.'
          />
          <Form />
        </div>
      </div>
      <div className={style.page_content}>
      </div>
    </>
  )
}
