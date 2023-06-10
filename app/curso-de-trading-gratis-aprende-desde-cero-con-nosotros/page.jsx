/* eslint-disable camelcase */
import Form from '@/components/form/Form'
import TextCallAction from '@/components/text-call-to-action/TextCallAction'
import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'

const fetchSinglePage = (slug) => {
  // eslint-disable-next-line quotes
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/get_pages?slug=curso-de-trading-gratis-aprende-desde-cero-con-nosotros/`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function CursoGratis () {
  const dataPage = await fetchSinglePage()
  const { title, featured_image } = dataPage[0]

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
    </>
  )
}
