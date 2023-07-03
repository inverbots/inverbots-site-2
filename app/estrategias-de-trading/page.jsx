import style from './page.module.css'
import CardLoop from '@/components/card-post/CardLoop'
import fetchPost from '../../services/fetchPost'


export const metadata = {
  title: 'Estrategias de Trading',
  description:'Estrategías de trading | Inverbots'
}

export default async function Publicaciones () {
  const posts = await fetchPost('estrategias')
  
  return <CardLoop data={posts}  />
}
