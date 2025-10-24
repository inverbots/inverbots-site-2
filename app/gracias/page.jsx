import backgroundImage from './inverbot-contact.webp';
import Image from 'next/image';
import style from './gracia.module.css'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata';

const slug = 'gracias'

export async function generateMetadata() {
  try {
    const titleData = await fetchPage(slug)
    return getMetadata(titleData)
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Gracias - Inverbots',
      description: 'Gracias por contactarnos'
    }
  }
}

export default async function ThankYou() {
  try {
  } catch (error) {
    console.error('Error fetching Yoast:', error)
  }

  const posts = await fetchPage(slug)
  const {src, width, height} = backgroundImage
  
  return (
    <>
      <div className={style.content}>
        <img
          className={style.background}
          src={src}
          width={width}
          height={height}
          alt="inverbots"
        />
        <div className={style.text_content}>
          <h1 className={style.title_content}>
            {posts[0].title}
          </h1>
          <p className={style.paragraph}>
            {posts[0].excerpt}
          </p>
        </div>
      </div>
    </>
  )
}
