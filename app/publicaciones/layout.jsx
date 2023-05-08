import style from './page.module.css'
import Pagination from '@/components/pagination/pagination'
import HeroBaner from '@/components/hero-banner/HeroBanenr'

export default function PublicationLayout ({ children }) {
  const ruteName = 'publicaciones'

  return (
    <div className={style.layout_content}>
      <div className={style.hero_banner}>
        <HeroBaner slug={ruteName} />
      </div>
      {children}
      <Pagination />
    </div>
  )
}
