import backgroundImage from './inverbot-contact.webp';
import Image from 'next/image';
import style from './gracia.module.css'
import fetchYoast from '@/libs/fetchYoast'
import fetchPage from '@/libs/fetchPage'
import getMetadata from '@/libs/metadata';

const slug = 'gracias'

const dataSEO = await fetchYoast(slug)
const JSONYoast = dataSEO.json

export const metadata = getMetadata(JSONYoast)

export default async function ThanYou() {

  const posts = await fetchPage(slug)

  const {src, width, height} = backgroundImage
  return (
    <div className={style.content}>
      <Image
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
  )
}
