import HeroPost from '@/components/hero-post/HeroPost'
import style from './page.module.css'

export default function TandC () {
  return (
    <HeroPost
      className={style.content}
      title='POLÍTICAS DE PRIVACIDAD'
      featured_image='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80'
    />
  )
}
