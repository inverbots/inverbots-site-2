import CardLoop from '@/components/card-post/CardLoop'
import fetchPost from '../../services/fetchPost'


export const metadata = {
  title: 'Publicaciones',
  description:'Estrategías de trading | Inverbots'
}

export default async function Publicaciones () {
  const posts = await fetchPost('operaciones')
  
  return <CardLoop
    data={posts}
    cardStyle = {2}
  />
}
