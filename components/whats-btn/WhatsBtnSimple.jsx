'use client'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import style from './whatsbtn.module.css'
import Link from 'next/link'
import randomSite from './randomSite'


export default function WhatsappBtnSimple (prosps) {
  return (
    <Link
      target='_blank'
      href={randomSite('¡Hola! quiero aprender mundo del trading')}
      className={style.whatsapp_btn__simple}
    >
      <WhatsAppIcon
        sx={{ fontSize: 35 }}
        className={style.icon_content}
      />
      {prosps.btnText}
    </Link>
  )
}
