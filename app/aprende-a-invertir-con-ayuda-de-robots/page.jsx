/* eslint-disable camelcase */
import BannerLanding from '@/components/banner-landing/BannerLanding'
import Form from '@/components/form/Form'
import Caracteristics from '@/components/caracteristics/Caracteristic'
import Testimonials from '@/components/testimonios/Testimonios'
import style from './page.module.css'
import Addinfo from '@/components/add-info/AddInfo'
import VibrationBtn from '@/components/vibration-btn/VibrationBtn'
import MoreInformation from '@/components/more-info/MoreInfor'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import Schema from '@/components/schema/schema'
import fetchTitle from '@/services/fetchTitle'

const slug = 'aprende-a-invertir-con-ayuda-de-robots'

let dataSEO = null
try {
  dataSEO = await fetchYoast(slug)
} catch (error) {
  console.error('Error fetching Yoast:', error)
}
const titleData = await fetchTitle(slug)


export const metadata = getMetadata(titleData)

export default async function CursoGratis () {
  const dataPage = await fetchPage(slug)
  const { featured_image, hero_banner, Incluye_programa, testimonios, informacion_adicional_inverbots, conoce_mas_de_inverbots__videos__ } = dataPage[0]

  return (
    <>
      <Schema dataSEO={dataSEO} />
      <BannerLanding
        background={featured_image}
        title={hero_banner.titulo}
        description={hero_banner.texto_complementario}
        url={hero_banner.boton_llamado_a_la_accion}
        textCallToAction={hero_banner.texto_boton_llamado_a_la_accion}
        video={hero_banner.video_youtube}
      />
      <section className={style.form_section}>
        <h2 className={style.section_title}>!Accede a nuestro curso gratuito y recibir más información</h2>
        <div className={style.form_content}>
          <div id='contentForm' className={style.forms}>
            <Form />
          </div>
          <div className={style.caracteristics}>
            <Caracteristics data={Incluye_programa} />
          </div>
        </div>
      </section>
      <section className={style.Testimonials}>
        <Testimonials data={testimonios} />
      </section>
      <section className={style.information}>
        <Addinfo
          className={style.component}
          data={informacion_adicional_inverbots}
        />
      </section>
      <div className={style.btn_content}>
        <VibrationBtn
          className={style.main_btn}
          text='QUIERO ASESORÍA PERSONALIZADA'
          url='#'
        />
      </div>
      <section className={style.more_info}>
        <MoreInformation data={conoce_mas_de_inverbots__videos__} />
      </section>
    </>
  )
}
