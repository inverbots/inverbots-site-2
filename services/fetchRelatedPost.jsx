const fetchRelatedPost = async (id) => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/related-post?id=${id}`, 
      { cache: 'no-store' }
    )
    
    if (!response.ok) {
      console.error(`Error fetching related posts: ${response.status}`)
      return []
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for related posts')
      return []
    }
    
    const text = await response.text()
    if (!text) {
      console.error('Empty response from related posts API')
      return []
    }
    
    return JSON.parse(text)
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export default fetchRelatedPost
