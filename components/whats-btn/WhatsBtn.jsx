'use client'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import style from './whatsbtn.module.css'

export default function WhatsappBtn () {
  return (
    <div className={style.whatsapp_btn}>
      <WhatsAppIcon
        sx={{ fontSize: 50 }}
        className={style.icon_content}
      />
    </div>
  )
}
