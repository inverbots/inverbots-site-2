const fetchPage = async (slug) => {
  try {
    if (!slug || slug.endsWith('.shtml') || slug.includes('.')) {
      console.log(`Invalid slug: ${slug}`)
      return []
    }
    
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`, 
      { 
        cache: 'no-store',
        next: { revalidate: 60 }
      }
    )
    
    if (!response.ok) {
      console.error(`Error fetching page for ${slug}: ${response.status}`)
      return []
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`Response is not JSON for ${slug}`)
      return []
    }
    
    const data = await response.json()
    
    if (!data || data.length === 0) {
      console.log(`No data found for ${slug}`)
      return []
    }
    
    return data
    
  } catch (error) {
    console.error(`Error fetching page for ${slug}:`, error)
    return []
  }
}

export default fetchPage
