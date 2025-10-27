import style from './page.module.css'
import PostAccordion from '@/components/post-accordion/PostAccordion'

const Postfetch = async () => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/publicaciones?post_type=bunch_faqs`, 
      { cache: 'no-store' }
    )
    
    if (!response.ok) {
      console.error(`Error fetching FAQs: ${response.status}`)
      return []
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for FAQs')
      return []
    }
    
    const text = await response.text()
    if (!text || text.trim() === '') {
      console.error('Empty response from FAQs API')
      return []
    }
    
    return JSON.parse(text)
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
}

export const metadata = {
  title: 'Preguntas frecuentes',
  description: 'Preguntas frecuentes Inverbots | Inverbots'
}

export default async function Faq () {
  const listPost = await Postfetch()
  
  return (
    <article className={style.content}>
      <div className={style.contain}>
        <PostAccordion data={listPost} />
      </div>
    </article>
  )
}
