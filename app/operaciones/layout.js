import style from './page.module.css'
import Pagination from '@/components/pagination/pagination'
import HeroPost from '@/components/hero-post/HeroPost'

export default function PublicationLayout ({ children }) {
  // const ruteName = 'estrategias-de-trading'

  return (
    <div className={style.layout_content}>
      <div className={style.hero_banner}>
        <HeroPost
          title='Operaciones más recientes'
          featured_image='https://inverbots.xyz/wp-content/uploads/2019/10/trading.jpg'
        />

      </div>
      {children}
    </div>
  )
}
