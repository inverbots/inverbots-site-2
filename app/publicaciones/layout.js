import style from './page.module.css'
import HeroPost from '@/components/hero-post/HeroPost'

export default function PublicationLayout ({ children }) {
  return (
    <div className={style.layout_content}>
      <div className={style.hero_banner}>
        <HeroPost
          title='Publicaciones recientes'
          featured_image='https://administrador.inverbots.com/wp-content/uploads/2023/02/Logo-negro-copia.jpeg'
        />
      </div>
      {children}
    </div>
  )
}
