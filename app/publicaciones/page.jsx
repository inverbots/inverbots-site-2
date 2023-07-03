import CardLoop from '@/components/card-post/CardLoop'
import fetchPost from '../../services/fetchPost'


export const metadata = {
  title: 'Publicaciones',
  description:'Estrategías de trading | Inverbots'
}

export default async function Publicaciones () {
  const posts = await fetchPost('operar-en-trading')
  
  return <CardLoop data={posts}  />
}

