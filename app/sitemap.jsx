const fetchSinglePost = async () => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/posts?per_page=1999&_fields=slug,modified`, 
      { next: { revalidate: 3600 } }
    )
    
    if (!response.ok) {
      console.error(`Error fetching posts for sitemap: ${response.status}`)
      return []
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for posts sitemap')
      return []
    }
    
    const text = await response.text()
    if (!text || text.trim() === '') {
      console.error('Empty response from posts sitemap API')
      return []
    }
    
    return JSON.parse(text)
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
    return []
  }
}

const fetchSinglePages = async () => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/pages?per_page=99&_fields=slug,modified`, 
      { next: { revalidate: 3600 } }
    )
    
    if (!response.ok) {
      console.error(`Error fetching pages for sitemap: ${response.status}`)
      return []
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for pages sitemap')
      return []
    }
    
    const text = await response.text()
    if (!text || text.trim() === '') {
      console.error('Empty response from pages sitemap API')
      return []
    }
    
    return JSON.parse(text)
  } catch (error) {
    console.error('Error fetching pages for sitemap:', error)
    return []
  }
}

const formatingDate = (infoDate) => {
  const dateParseInt = new Date(infoDate)
  const year = dateParseInt.getFullYear()
  const month = dateParseInt.getMonth() + 1
  const day = dateParseInt.getDate()
  const dateFormated = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`

  return dateFormated
}

const getMapElements = (list, baseUrl) => {
  if (!Array.isArray(list) || list.length === 0) {
    return []
  }
  
  const listObjects = list.map(singlePost => {
    const { modified } = singlePost
    const addDate = formatingDate(modified)
    return { 
      url: `${baseUrl}${singlePost.slug}`,
      lastModified: addDate
    }
  })

  return listObjects
}

export default async function sitemap() {
  const allPost = await fetchSinglePost()
  const allPages = await fetchSinglePages()

  const baseUrl = "https://inverbots.com/"
  const allPostUrl = getMapElements(allPost, baseUrl)
  const allPagesUrl = getMapElements(allPages, baseUrl)

  const addDate = formatingDate(new Date())

  return [
    { 
      url: baseUrl,
      lastModified: addDate
    },
    ...allPagesUrl,
    ...allPostUrl
  ]
}
