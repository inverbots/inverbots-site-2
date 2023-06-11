'use client'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import style from './whatsbtn.module.css'
import Link from 'next/link'

export default function WhatsappBtn () {
  const randomSite = () => {
    const sites = [
      'https://api.whatsapp.com/send?phone=573127887846&text=¡Hola!20%Estoy20%interesado20%en20%saber20%más20%sobre20%Inverbots',
      'https://api.whatsapp.com/send?phone=573222109312&text=¡Hola!20%Estoy20%interesado20%en20%saber20%más20%sobre20%Inverbots'
    ]

    const i = parseInt(Math.random() * sites.length)
    return sites[i]
  }

  return (
    <Link
      target='_blank'
      href={randomSite()}
      className={style.whatsapp_btn}
    >
      <WhatsAppIcon
        sx={{ fontSize: 50 }}
        className={style.icon_content}
      />
    </Link>
  )
}
