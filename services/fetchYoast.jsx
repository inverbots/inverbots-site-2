const fetchYoast = async (slug) => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/yoast/v1/get_head?url=https://inverbots.xyz/${slug}/`, 
      { cache: 'no-store' }
    )
    
    if (!response.ok) {
      console.error(`Error fetching Yoast data for ${slug}: ${response.status}`)
      return null
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching Yoast:', error)
    return null
  }
}

export default fetchYoast
