import fetchRelatedPost from "@/services/fetchRelatedPost"
import CardLoop from "../card-post/CardLoop"
import style from './Related.module.css'

export default async function RelatedPost(props) {  
  const posts = await fetchRelatedPost(props.id)
  
  return (
    <div className={style.related_content}>
      <h2 className={style.title_section}>También te puede interesar:</h2>
      <CardLoop data={posts} />
    </div>
  )
}
