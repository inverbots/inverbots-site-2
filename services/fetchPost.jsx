const fetchPost = async (category) => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/publicaciones?category=${category}`, 
      { cache: 'no-store' }
    )
    
    if (!response.ok) {
      console.error(`Error fetching posts: ${response.status}`)
      return []
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for posts')
      return []
    }
    
    const text = await response.text()
    if (!text) {
      console.error('Empty response from posts API')
      return []
    }
    
    return JSON.parse(text)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default fetchPost
