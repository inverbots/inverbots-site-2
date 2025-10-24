const fetchTitle = async (slug) => {
  try {
    if (!slug || slug.endsWith('.shtml') || slug.includes('.')) {
      console.log(`Invalid slug: ${slug}`)
      return null
    }
    
    // Primero intenta el endpoint personalizado
    let response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/meta-data?slug=${slug}`, 
      { cache: 'no-store' }
    )
    
    // Si falla, usa el endpoint nativo
    if (!response.ok) {
      console.log(`Custom endpoint failed, trying native endpoint for ${slug}`)
      response = await fetch(
        `https://inverbots.xyz/wp-json/wp/v2/pages?slug=${slug}&_fields=id,title,excerpt`, 
        { cache: 'no-store' }
      )
    }
    
    if (!response.ok) {
      console.error(`Error fetching title for ${slug}: ${response.status}`)
      return null
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`Response is not JSON for ${slug}`)
      return null
    }
    
    const data = await response.json()
    
    if (!data || data.length === 0) {
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error fetching title:', error)
    return null
  }
}

export default fetchTitle
