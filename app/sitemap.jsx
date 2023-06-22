const fetchSinglePost = () => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/posts?per_page=1999&_fields=slug,modified`, { cache: 'no-store' })
    .then(rest => rest.json())
}

const fetchSinglePages = () => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/pages?per_page=99&_fields=slug,modified`, { cache: 'no-store' })
    .then(rest => rest.json())
}

const getMapElements = (list, baseUrl) => {
  const listObjects = list.map((singlePost, key) => {
    return { 
      url: `${baseUrl + singlePost.slug}`,
      lastModified: singlePost.modified
    }
  })

  return listObjects
}

export default async function sitemap() {
  const allPost = await fetchSinglePost()
  const allPages = await fetchSinglePages()

  const baseUrl = "http://inverbots.com/";
  const allPostUrl = getMapElements(allPost, baseUrl)
  const allPagesUrl = getMapElements(allPages, baseUrl)

  return [
    ...allPagesUrl,
    ...allPostUrl
  ]
}