const fetchTitle = async (slug) => {
  try {
    // Validar slug antes de hacer fetch
    if (!slug || slug.endsWith('.shtml') || slug.includes('.')) {
      console.log(`Invalid slug: ${slug}`)
      return null
    }
    
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/meta-data?slug=${slug}`, 
      { cache: 'no-store' }
    );
    
    if (!response.ok) {
      console.error(`Error fetching title for ${slug}: ${response.status}`)
      return null
    }
    
    // ✅ VERIFICAR QUE LA RESPUESTA SEA JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`Response is not JSON for ${slug}`)
      return null
    }
    
    const data = await response.json();
    
    // Validar que data tenga contenido
    if (!data || data.length === 0) {
      return null
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching title:', error);
    return null;
  }
};

export default fetchTitle;
