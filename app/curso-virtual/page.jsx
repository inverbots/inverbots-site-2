import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import WhatsappBtnSimple from '@/components/whats-btn/WhatsBtnSimple'
import Schema from '@/components/schema/schema'
import fetchTitle from '@/services/fetchTitle'


const slug = 'curso-virtual'

let dataSEO = null
try {
  dataSEO = await fetchYoast(slug)
} catch (error) {
  console.error('Error fetching Yoast:', error)
}
const titleData = await fetchTitle(slug)
const JSONYoast = dataSEO.jsons

export const metadata = getMetadata(titleData)

export default async function CursoVirtual() {
  const dataPage = await fetchPage(slug)
  const {featured_image, title_page, description, texto_en_bold, text_url_curso_vitual, url, texto_boton_whatsapp} = dataPage[0]
 
  return (
    <>
    <Schema dataSEO={dataSEO} />
    <main className={style.content}>
      <div className={style.content_grid}>
        <div className={style.content_grid__left}>
          <div className={style.contains_info}>
            <h1 className={style.contains_title}>{title_page}</h1>
            <div className={style.contains_description} dangerouslySetInnerHTML={{__html: description}}/>
            <h2 className={style.contains_bold_text}>{texto_en_bold}</h2>
            <div className={style.contains_btn}>
              <Link className={style.contains_btn__cv} href={url}>
                {text_url_curso_vitual}
              </Link>
              <div className={style.whatsapp_btn__simple}>
                <WhatsappBtnSimple
                  btnText = {texto_boton_whatsapp}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.content_grid__rigth}>
          <img
            className={style.content__img}
            src={featured_image}
            width='350'
            height='250'
            alt='Invebots - curso virtual'
          />
        </div>
      </div>
    </main>
    </>
  )
}
