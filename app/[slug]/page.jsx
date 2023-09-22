import style from './page.module.css'
import Image from 'next/image'
import HeroPost from '@/components/hero-post/HeroPost'
import Shared from '@/components/shared/Shared'
import RelatedPost from '@/components/related-post/RelatedPost'
import fetchYoast from '@/services/fetchYoast'
import PageSite from './pageSite'
import getMetadata from '@/services/metadata'
// import Comments from '@/components/comments/comments'

import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'
import { redirect } from 'next/navigation';
import Schema from '@/components/schema/schema'

const fetchSinglePost = (slug) => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/posts?slug=${slug}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const dataSEO = await fetchYoast(slug)
  const JSONYoast = dataSEO.json  
  return getMetadata(JSONYoast)
}

export default async function Post({ params }) {
  const { slug } = params
  const post = await fetchSinglePost(slug)

  const catId = post[0]?.categories[0]
  const redirection = post[0]?.acf?.redirection_to

  redirection ? redirect(redirection) : ''

  const postData = post[0]?.content.rendered
  const regex = /youtube\.com\/embed\//
  const hasYoutubeIframe = regex.test(postData)

  /** JsonLD */
  const dataSEO = await fetchYoast(slug)

  return (
    post.length > 0
      ? (
        <>
          <Schema dataSEO={ dataSEO} />
          <HeroPost
            title={post[0].title.rendered}
            featured_image={post[0].uagb_featured_image_src?.medium[0]}
          />
          <article className={style.content_post}>
            <Shared
              className={style.shared_content}
              title={post[0].title.rendered}
            />
            <div className={style.content_image}>
              {!hasYoutubeIframe && (
                <Image
                  src={post[0].uagb_featured_image_src?.large[0]}
                  alt={post[0].title.rendered}
                  width={1440}
                  height={450}
                  className={style.post_imagen}
                />
              )}
            </div>
            <div className={style.element} dangerouslySetInnerHTML={{ __html: post[0].content.rendered }} />
          </article>
          <div className={style.realted}>
            <RelatedPost id={catId} />
          </div>
          {/* <Comments id={post[0].id} /> */}
        </>
        )
      : (
        <PageSite
          slug={slug}
        />
        )
  )
}
