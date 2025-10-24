const fetchPage = async (slug) => {
  try {
    // Validar slug
    if (!slug || slug.endsWith('.shtml') || slug.includes('.')) {
      console.log(`Invalid slug: ${slug}`)
      return []
    }
    
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/get_pages?slug=${slug}`, 
      { 
        // ✅ SOLO CAMBIO: Quitar cache: 'no-store' y dejar solo revalidate
        next: { revalidate: 60 }
      }
    )
    
    if (!response.ok) {
      console.error(`Error fetching page for ${slug}: ${response.status}`)
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
    console.error('Error fetching page:', error)
    return []
  }
}

export default fetchPage
