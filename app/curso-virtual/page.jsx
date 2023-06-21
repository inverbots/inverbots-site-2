import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fetchYoast from '@/libs/fetchYoast'
import fetchPage from '@/libs/fetchPage'
import getMetadata from '@/libs/metadata'
import WhatsappBtnSimple from '@/components/whats-btn/WhatsBtnSimple'


const slug = 'curso-virtual'

const dataSEO = await fetchYoast(slug)
const JSONYoast = dataSEO.json

export const metadata = getMetadata(JSONYoast)

export default async function CursoVirtual() {
  const dataPage = await fetchPage(slug)
  const {featured_image, title_page, description, texto_en_bold, text_url_curso_vitual, url, texto_boton_whatsapp} = dataPage[0]
  console.log(dataPage[0])

  return (
    <main className={style.content}>
      <div className={style.content_grid}>
        <div className={style.content_grid__left}>
          <div className={style.contains_info}>
            <h1 className={style.contains_title}>{title_page}</h1>
            <p className={style.contains_description}>{description}</p>
            <h2 className={style.contains_bold_text}>{texto_en_bold}</h2>
            <div className={style.contains_btn}>
              <Link className={style.contains_btn__cv} href={url}>
                {text_url_curso_vitual}
              </Link>
              <WhatsappBtnSimple
                btnText = {texto_boton_whatsapp}
              />
            </div>
          </div>
        </div>
        <div className={style.content_grid__rigth}>
          <Image
            className={style.content__img}
            src={featured_image}
            width='350'
            height='250'
            alt='Invebots - curso virtual'
          />
        </div>
      </div>
    </main>
  )
}