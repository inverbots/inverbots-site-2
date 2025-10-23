const fetchTitle = async (slug) => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/meta-data?slug=${slug}`, 
      { cache: 'no-store' }
    );
    
    if (!response.ok) {
      console.error(`Error fetching title for ${slug}: ${response.status}`)
      return null
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching title:', error);
    return null;
  }
};

export default fetchTitle;
