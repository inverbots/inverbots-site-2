import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata'
import WhatsappBtnSimple from '@/components/whats-btn/WhatsBtnSimple'
import fetchTitle from '@/services/fetchTitle'

const slug = 'curso-virtual'

export async function generateMetadata() {
  try {
    const titleData = await fetchTitle(slug)
    if (!titleData) {
      return {
        title: 'Curso Virtual - Inverbots',
        description: 'Curso virtual de trading'
      }
    }
    return getMetadata(titleData)
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Curso Virtual - Inverbots',
      description: 'Curso virtual de trading'
    }
  }
}

export default async function CursoVirtual() {
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

  const { featured_image, title_page, description, texto_en_bold, text_url_curso_vitual, url, texto_boton_whatsapp } = dataPage[0]
 
  return (
    <>
      <main className={style.content}>
        <div className={style.content_grid}>
          <div className={style.content_grid__left}>
            <div className={style.contains_info}>
              <h1 className={style.contains_title}>{title_page}</h1>
              <div className={style.contains_description} dangerouslySetInnerHTML={{ __html: description }} />
              <h2 className={style.contains_bold_text}>{texto_en_bold}</h2>
              <div className={style.contains_btn}>
                <Link className={style.contains_btn__cv} href={url || '#'}>
                  {text_url_curso_vitual}
                </Link>
                <div className={style.whatsapp_btn__simple}>
                  <WhatsappBtnSimple
                    btnText={texto_boton_whatsapp}
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
