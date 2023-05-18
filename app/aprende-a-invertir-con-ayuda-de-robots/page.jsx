/* eslint-disable camelcase */
import BannerLanding from '@/components/banner-landing/BannerLanding'

const fetchSinglePage = (slug) => {
  return fetch(`https://inverbots.com/wp-json/wp/v2/get_pages?slug=${slug}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function CursoGratis () {
  const dataPage = await fetchSinglePage('aprende-a-invertir-con-ayuda-de-robots')
  const { featured_image, hero_banner, formulario, testimonios, informacion_adicional_inverbots } = dataPage[0]

  console.log(formulario)

  return (
    <>
      <BannerLanding
        background={featured_image}
        title={hero_banner.titulo}
        description={hero_banner.texto_complementario}
        url={hero_banner.boton_llamado_a_la_accion}
        textCallToAction={hero_banner.texto_boton_llamado_a_la_accion}
        video={hero_banner.video_youtube}
      />
    </>
  )
}
