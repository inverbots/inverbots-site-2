const fetchSinglePost = (slug) => {
  return fetch(`https://administrador.inverbots.com/wp-json/yoast/v1/get_head?url=https://administrador.inverbots.com/${slug}/`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function Yoast(props) {
  const slug = props.slug
  const post = await fetchSinglePost(slug)
  const JSONYoast = post.json
  console.log(JSONYoast)

  return (
    <>
      <title>{JSONYoast.title + " | Inverbots - la mejor academia de trading con ayuda de robots"}</title>
      <meta name="robots" content={`${JSONYoast.robots.index}, ${JSONYoast.robots.follow}`} />
      <link rel="canonical" href={JSONYoast.canonical} />

      <meta name="description" content={JSONYoast.description} />
      <meta property="og:title" content={JSONYoast.title} />
      <meta property="og:description" content={JSONYoast.description} />
      <meta property="og:locale" content={JSONYoast.og_locale} />
      <meta property="og:type" content="https://inverbots.com" />
      <meta property="og:url" content={`https://inverbots.com/${slug}/`} />
      <meta property="og:image" content={JSONYoast.og_image.url} />

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={JSONYoast.og_image.width} />
      <meta property="og:image:height" content={JSONYoast.og_image.height}/>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={JSONYoast.twitter_creator} />
      <meta name="twitter:title" content={JSONYoast.title} />
      <meta name="twitter:description" content={JSONYoast.description} />
      <meta name="twitter:image" content={JSONYoast.og_image.url} />

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
