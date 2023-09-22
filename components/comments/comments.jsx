/* eslint-disable camelcase */
import style from './comments.module.css'
import Image from 'next/image'

const fetchPostComments = (id) => {
    return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/comments?post=${id}`, { cache: 'no-store' })
      .then(rest => rest.json())
  }

export default async function Comments (props) {
    const commentsList = await fetchPostComments(props.id)    

    return (
    commentsList[0]?.id &&
    (<div className={style.comment_list}>
      <h2 className={style.comment_list__title}>Comentarios</h2>
      {commentsList.map((comment, key) =>{
        const {id, author_name, date, content, author_avatar_urls, parent} = comment
        return(

            <div className={style.comment_list__coment} key={id}>
                <div className={style.comment_list__content}>
                    <div className={style.comment__profile}>
                        <Image className={style.comment__avatar} src={author_avatar_urls[24]} alt="comment inverbots avatar" width={50} height={96} />
                    </div>
                    <div className={style.comment_list__comments}>
                        <h3  className={style.comment_list__author}>{author_name}</h3>
                        <div className={style.comment_list_comment} dangerouslySetInnerHTML={{__html:content.rendered}} />
                        <span className={style.comment_list__date}>{date}</span>
                    </div>   
                </div>
            </div>
        )

      })}
    </div>
  ))
}
