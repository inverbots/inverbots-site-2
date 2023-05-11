import style from './page.module.css'
import Pagination from '@/components/pagination/pagination'
import HeroPost from '@/components/hero-post/HeroPost'

export default function PublicationLayout ({ children }) {
  // const ruteName = 'estrategias-de-trading'

  return (
    <div className={style.layout_content}>
      <div className={style.hero_banner}>
        <HeroPost
          title='Estrategías de trading'
          featured_image='https://inverbots.com/wp-content/uploads/2023/05/maxim-hopman-fiXLQXAhCfk-unsplash-scaled.jpg'
        />

      </div>
      {children}
      <Pagination />
    </div>
  )
}
