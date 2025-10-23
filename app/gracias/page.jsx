import backgroundImage from './inverbot-contact.webp';
import Image from 'next/image';
import style from './gracia.module.css'
import fetchYoast from '@/services/fetchYoast'
import fetchPage from '@/services/fetchPage'
import getMetadata from '@/services/metadata';
import Schema from '@/components/schema/schema';

const slug = 'gracias'

let dataSEO = null
try {
  dataSEO = await fetchYoast(slug)
} catch (error) {
  console.error('Error fetching Yoast:', error)
}
const titleData = await fetchPage(slug)


export const metadata = getMetadata(titleData)

export default async function ThanYou() {

  const posts = await fetchPage(slug)

  const {src, width, height} = backgroundImage
  return (
    <>
    <Schema dataSEO={dataSEO} />
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
