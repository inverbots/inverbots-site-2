'use client'
import { useState, useEffect } from 'react'
import style from './PostFilter.module.css'
import CardPost from '../card-post/CardPost'
import Link from 'next/link'

export default function PostFilter () {
  const [postData, setPostData] = useState([])
  const [filter, setFilter] = useState('todos')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchDataPost = async () => {
      setIsLoading(true)
      const url = filter === 'todos'
        // eslint-disable-next-line quotes
        ? `https://administrador.inverbots.com/wp-json/wp/v2/publicaciones?per_page=4`
        : `https://administrador.inverbots.com/wp-json/wp/v2/publicaciones?per_page=4&category=${filter}`
      const response = await fetch(url)
      console.log(response.ok)
      const data = await response.json()
      setPostData(data)
    }

    fetchDataPost()
  }, [filter])

  const handleOptionClick = (event) => {
    setFilter(event.target.dataset.value)
  }

  return (
    <>
      <ul className={style.filter_options}>
        <li
          data-value='todos'
          className={style.filter_options}
          onClick={handleOptionClick}
        >Todos
        </li>
        <li
          data-value='estrategias'
          className={style.filter_options}
          onClick={handleOptionClick}
        >
          Estrategías de trading
        </li>
        <li
          data-value='operar-en-trading'
          className={style.filter_options}
          onClick={handleOptionClick}
        >Publicaciones
        </li>
        <li
          data-value='operaciones'
          className={style.filter_options}
          onClick={handleOptionClick}
        >Operaciones
        </li>
      </ul>
      <div className={style.contentFilter}>
        {isLoading
          ? (
              postData.slice(0, 12).map((post, key) => (
                <article key={key} className={style.post_card}>
                  <CardPost
                    title={post.title}
                    date={post.date}
                    image={post.featured_image}
                    excerpt={post.excerpt}
                    categories={post.categories[0].name}
                    slug={post.slug}
                  />
                </article>
              )))
          : (
            <h1>Cargando..</h1>
            )}
      </div>
      <div className={style.content_btn}>
        <Link className={style.btn} href='/publicaciones'>APRENDER MÁS</Link>
      </div>
    </>
  )
}
