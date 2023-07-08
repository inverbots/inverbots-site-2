/* eslint-disable camelcase */
import Form from '@/components/form/Form'
import TextCallAction from '@/components/text-call-to-action/TextCallAction'
import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'

import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'

const slug = 'curso-de-trading-gratis-aprende-desde-cero-con-nosotros'

const dataSEO = await fetchYoast(slug)
const JSONYoast = dataSEO.json

export const metadata = getMetadata(JSONYoast)

export default async function CursoGratis () {
  const dataPage = await fetchPage(slug)
  const { title, featured_image, content } = dataPage[0]

  return (
    <>
      <HeroPost
        title={title}
        featured_image={featured_image}
      />
      <div className={style.free_curse}>
        <div className={style.left_column}>
          <iframe width='100%' height='80%' src='https://www.youtube.com/embed/aEtWRCayAzw' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' />
        </div>
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
        <div dangerouslySetInnerHTML={{ __html: content}} />
      </div>

    </>
  )
}
