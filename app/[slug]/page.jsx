import style from './page.module.css'
import Image from 'next/image'
import HeroPost from '@/components/hero-post/HeroPost'
import Shared from '@/components/shared/Shared'
import RelatedPost from '@/components/related-post/RelatedPost'
import PageSite from './pageSite'
import getMetadata from '@/services/metadata'
import Comments from '@/components/comments/comments'
import CommentsForm from '@/components/comments-form/comments-form'
import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'
import { redirect } from 'next/navigation'
import fetchTitle from '@/services/fetchTitle'

const fetchSinglePost = async (slug) => {
  try {
    // Validar slug
    if (!slug || slug.endsWith('.shtml') || slug.includes('.')) {
      return []
    }
    
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/posts?slug=${slug}`, 
      { cache: 'no-store' }
    )
    
    if (!response.ok) {
      console.error(`Error fetching post for ${slug}: ${response.status}`)
      return []
    }
    
    // Verificar que la respuesta sea JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`Response is not JSON for ${slug}`)
      return []
    }
    
    const data = await response.json()
    return data
    
  } catch (error) {
    console.error('Error fetching post:', error)
    return []
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params
  
  const defaultMetadata = {
    title: 'Inverbots - Trading y educación financiera',
    description: 'Aprende sobre trading, inversiones y mercados financieros'
  }
  
  try {
    // Validar slug
    if (!slug || slug.endsWith('.shtml') || slug.includes('.')) {
      return defaultMetadata
    }
    
    const titleData = await fetchTitle(slug)
    
    if (!titleData) {
      return defaultMetadata
    }
    
    return getMetadata(titleData)
    
  } catch (error) {
    console.error('Error generating metadata:', error)
    return defaultMetadata
  }
}

export default async function Post({ params }) {
  const { slug } = params
  
  // Validar slug básico
  if (!slug) {
    return <PageSite slug={slug} />
  }
  
  const post = await fetchSinglePost(slug)
  
  if (!post || post.length === 0) {
    return <PageSite slug={slug} />
  }
  
  const catId = post[0]?.categories?.[0]
  const redirection = post[0]?.acf?.redirection_to
  
  if (redirection) {
    redirect(redirection)
  }
  
  const postData = post[0]?.content?.rendered || ''
  const regex = /youtube\.com\/embed\//
  const hasYoutubeIframe = regex.test(postData)
  
  return (
    <>
      <HeroPost
        title={post[0]?.title?.rendered}
        featured_image={post[0]?.uagb_featured_image_src?.medium?.[0]}
      />
      <article className={style.content_post}>
        <Shared
          className={style.shared_content}
          title={post[0]?.title?.rendered}
        />
        <div className={style.content_image}>
          {!hasYoutubeIframe && post[0]?.uagb_featured_image_src?.large?.[0] && (
            <img
              src={post[0].uagb_featured_image_src.large[0]}
              alt={post[0]?.title?.rendered || 'Post image'}
              width={1440}
              height={450}
              className={style.post_imagen}
            />
          )}
        </div>
        <div className={style.element} dangerouslySetInnerHTML={{ __html: postData }} />
      </article>
      <div className={style.realted}>
        <RelatedPost id={catId} />
      </div>
      <Comments id={post[0]?.id}/>
      <CommentsForm slug={slug}/>
    </>
  )
}
