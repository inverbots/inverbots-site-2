/* eslint-disable camelcase */
import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import details from '../public/img/dots.png'
import PostFilter from '@/components/post-filter/PostFilter'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import fetchTitle from '@/services/fetchTitle'
import Schema from '@/components/schema/schema'

const slug = 'home-v2'

export default async function HomePage() {
  // 👇 Se mueven las llamadas dentro de la función
  const dataSEO = await fetchYoast(slug)
  const titleData = await fetchTitle(slug)
  const JSONYoast = dataSEO.json

  const metadata = getMetadata(titleData)
  const dataPage = await fetchPage(slug)
  const { banner_principal, section_best_academy, seccion_invierte_con_robots } = dataPage[0]

  return (
    <>
      <Schema dataSEO={dataSEO} />
      <div className={style.hero_banner}>
        <div className={style.hero_texts}>
          <h1 className={style.hero_title}>{banner_principal.titulo}</h1>
          <Link
            className={style.hero_button}
            href={banner_principal.enlace_de_banner}
          >{banner_principal.texto_call_to_action}
          </Link>
        </div>
        <Image
          className={style.hero_imagen}
          src={banner_principal.imagen_banner}
          width={1440}
          height={450}
          alt='Inverbots'
        />
      </div>
      <section className={style.trader_process}>
        <div className={style.process_title}>
          <h2 className={style.process_main}>La mejor academia de trading con robots</h2>
          <h3 className={style.trader_secondary}>El proceso que llevan nuestros traders</h3>
        </div>
        <div className={style.trader_process_grid}>
          {section_best_academy.pasos_que_siguen_nuestro_traders.map((steps, key) => {
            const { title, descripcion, imagen } = steps
            return (
              <div className={style.card_step} key={key}>
                <Image
                  src={details}
                  width='150'
                  height='150'
                  alt='details'
                  className={style.card_detail}
                />
                <div className={style.card_info}>
                  <div className={style.card_content}>
                    <span className={style.card_number}>{key + 1}</span>
                    <h3 className={style.card_title}>{title}</h3>
                    <div className={style.card_description} dangerouslySetInnerHTML={{ __html: descripcion }} />
                  </div>
                </div>
                <div className={style.card_imagen}>
                  <Image
                    className={style.card_img}
                    src={imagen}
                    width={250}
                    height={250}
                    alt={`Inverbots - ${title}}`}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className={style.tarder_btn}>
          <Link className={style.btn} href='/aprende-a-invertir-con-ayuda-de-robots'>Saber más</Link>
        </div>
      </section>
      <section className={style.invest_robot}>
        <div className={style.info}>
          <div className={style.info_content}>
            <h2 className={style.invest_title}>
              {seccion_invierte_con_robots.titulo}
            </h2>
            <div className={style.descripcion} dangerouslySetInnerHTML={{ __html: seccion_invierte_con_robots.descripcion }} />
            <div className={style.succes_case}>
              <Link className={style.anchor_succes} href='/testimonios'>Casos de éxito</Link>
            </div>
          </div>
        </div>
        <div className={style.imagen}>
          <Image
            src={seccion_invierte_con_robots.imagen}
            alt={'Inverbots' + seccion_invierte_con_robots.titulo}
            width={980}
            height={750}
          />
        </div>
      </section>
      <section className={style.information}>
        <h2 className={style.information_title}>Conoce nuestros articulos sobre inversiones</h2>
        <PostFilter />
      </section>
    </>
  )
}

