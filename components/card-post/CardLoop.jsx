'use client'

import CardPost from "./CardPost"
import CardPost2 from "../card-post2/CardPost2";
import style from './CardPost.module.css'
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

export default function CardLoop(props) {
  const posts = props.data
  const cardStyle = props.cardStyle == undefined ? 1 : props.cardStyle 

  const postsPerPage  = 12
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <section className={`${style.contents} ${cardStyle === 2 && style.contents__results}`}>
      {currentPosts.map((post, key) => (
        <article key={key} className={style.post_card}>
          {cardStyle == '1' &&
            (<CardPost
              title={post.title}
              date={post.date}
              image={post.featured_image}
              excerpt={post.excerpt}
              categories={post.categories[0].name}
              slug={post.slug}
            />)
          }

          {cardStyle == '2' &&
            (<CardPost2
              title={post.title}
              date={post.date}
              image={post.featured_image}
              excerpt={post.excerpt}
              categories={post.categories[0].name}
              slug={post.slug}
            />)
          }
        </article>
      ))}
      </section>
      <div class={style.pagination}>
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}