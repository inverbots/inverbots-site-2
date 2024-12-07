import Header from '@/components/header/Header'

const fetchSinglePost = (slug) => {
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/posts?slug=${slug}&_fields=yoast_head,title.rendered`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function RootLayout ({ children, params }) {
  const { slug } = params
  const post = await fetchSinglePost(slug)

  return (
    <>
      {children}
    </>
  )
}
