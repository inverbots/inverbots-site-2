import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'

export default function Faq ({ children }) {
  // const ruteName = 'estrategias-de-trading'

  return (
    <div className={style.layout_content}>
      <div className={style.hero_banner}>
        <HeroPost
          title='PREGUNTAS FRECUENTES'
          featured_image='https://inverbots.com/wp-content/uploads/2019/10/trading.jpg'
        />

      </div>
      {children}
    </div>
  )
}
