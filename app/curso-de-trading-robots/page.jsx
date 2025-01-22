/* eslint-disable camelcase */
import Form from '@/components/form/Form'
import TextCallAction from '@/components/text-call-to-action/TextCallAction'
import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import Schema from '@/components/schema/schema'
import './page.css'

import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'

const slug = 'curso-de-trading-gratis-aprende-desde-cero-con-nosotros'

const dataSEO = await fetchYoast(slug)
const titleData = await fetchTitle(slug)
const JSONYoast = dataSEO.json

export const metadata = getMetadata(titleData)

export default async function CursoGratis () {
  const dataPage = await fetchPage(slug)
  const { title, featured_image, content } = dataPage[0]

  return (
    <>
      <Schema dataSEO={dataSEO} />
      <HeroPost
        title={title}
        featured_image={featured_image}
        logo={true}
      />
      <div className={style.free_curse}>
        <div className="content" dangerouslySetInnerHTML={{ __html: content}} />
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
