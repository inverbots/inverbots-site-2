import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'

export default function TandC () {
  return (
    <HeroPost
      className={style.content}
      title='TÉRMINOS Y CONDICIONES'
      featured_image='https://images.unsplash.com/photo-1585995604064-e1c454b311d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    />
  )
}
