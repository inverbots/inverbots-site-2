import style from './add.module.css'
import Image from 'next/image'
import Form from '@/components/form/Form'
import Testimonials from '@/components/testimonios/Testimonios'
import Link from 'next/link'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import Schema from '@/components/schema/schema'

const slug = 'inversion-con-robots-de-trading'

let dataSEO = null
try {
  dataSEO = await fetchYoast(slug)
} catch (error) {
  console.error('Error fetching Yoast:', error)
}
const titleData = await fetchPage(slug)

export const metadata = getMetadata(titleData)

export default async function CursoGratis () {
  const dataPage = await fetchPage(slug)
  const getInfo = dataPage[0]

  return (
    <>
       <Schema dataSEO={dataSEO} />
      <section className={style.main_head}>
        <div className={style.content_head}>
          <h1 className={style.site_title}>Inverbots</h1>
          <div className={style.site__titleimg}>
            <h2 className={style.site_title_sub}>{getInfo.title}</h2>
            <img
              className={style.site__gif}
              src="https://inverbots.xyz/wp-content/uploads/2023/06/gif-robot-naranja.gif"
              alt="Inverbots GIF"
              width="150"
              height="150" />
          </div>
        </div>
      </section>
      <section className={style.hero_banner}>
        <div className={style.hero_banner_content}>
          <div className={style.hero_banner_left}>
            <div className={style.left_content}>
              <h2 className={style.left_content_title}>{getInfo.contenido_del_baner.titulo_descriptivo}</h2>
              <h3 className={style.left_content_sub}>{getInfo.contenido_del_baner.sub_titulo}</h3>
              <div className={style.main_video}>
                <div className={style.main_video}
                  dangerouslySetInnerHTML={{ __html: getInfo.contenido_del_baner.video_informativo }}
                />
              </div>
            </div>
          </div>
          <div className={style.hero_banner_right}>
            <div className={style.form_section}>
              <div className={style.form_component}>
                <h3 className={style.form_title}>¡Recibe información acerca de los montos de inversión!</h3>
                <p className={style.form_text}>Al enviar tu información, uno de nuestros asesores académicos te contactará.</p>
                <div className={style.form_field} id="registerForm">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
	    </section>
      <section className={style.banner_braker}>
        <div
          style={{backgroundColor:getInfo.rompe_banner.color_fondo_del_banner}}
          className={style.content_braker}
        >
          <img
            className={style.braker_img}
            src="https://inverbots.xyz/wp-content/uploads/2023/05/Z6d5.gif"
            alt="GIF"
            width={320}
            height={200}
          />
          <div className={style.title_banner} dangerouslySetInnerHTML={{__html:getInfo.rompe_banner.texto_rompe_banner}} />
        </div>
      </section>
      <section className={style.informative}>
        <div className={style.informative_content}>
          {getInfo.agregar_informacion.map((info, key) => {
            return (
              <div className={style.info_group} key={key}>
                <h2 className={style.info_group_title}>{info.titulo_de_la_seccion}</h2>
                <div className={style.info_group_description}>
                  {info.texto_descriptivo}
                </div>
                <div className={style.info_group_data}>
                  <div className={style.group_list}>
                    <h3 className={style.group_list_title}>{info.titulo_de_la_lista}</h3>
                    <ul className={style.group_list_content}>
                      {info.lista_de_elementos.map((eList, key) => {
                        return (
                          <li className={style.group_list_elements} key={key}>{eList.item_de_la_lista}</li>
                        )
                      })
                      }
                    </ul>
                  </div>
                  <div className={style.info_group_img}>
                    <img
                      src={info.imagen_complementaria}
                      alt="Inverbots"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
               )}
            )}
        </div>
      </section>
      <section className={style.step_promotion}>
        <div className={style.step_promotion__content}>
          
            <h2 className={style.title__steps}>{getInfo.contenido_del_programa_.titulo_de_la_seccion}</h2>
            <div className={style.steps}>
              {getInfo.contenido_del_programa_.agregar_pasos.map((info, key) => {              
                return (
                  <div className={style.step__element} key={key}>
                      <img 
                        className={style.step__img}
                        src={info.imagen_descriptiva}
                        alt="inverbots"
                        width={150}
                        height={150}
                      />
                      <h3 className={style.step__title}>{info.titulo_del_paso}</h3>
                      <p className={style.step__text}>{info.descripcion_del_paso}</p>
                  </div>
                  )
                })}
            </div>
          
        </div>
      </section>
      <section className={style.testimonials}>
          <Testimonials
            className={style.testimonial}
            data={getInfo.testimonios}
            slidesPerView = {3}
          />
      </section>
      <section className={style.call_action}>
        <div className={style.call_action_content}>
          <h2 className={style.title_banner} dangerouslySetInnerHTML={{__html:getInfo.call_to_action.texto_rompe_banner}} />
            <div className={style.btn_call}>
              <Link style={{backgroundColor:getInfo.call_to_action.color_btn_call_to_action}}
                href={getInfo.call_to_action.enlace_del_rompe_banner} className={style.btn_call__anchor}>
                {getInfo.call_to_action.texto_boton}
              </Link>
            </div>
        </div>
      </section>
    </>
  )
}
