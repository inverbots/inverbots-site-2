const fetchTitle = async (slug) => {
  try {
    const response = await fetch(`https://inverbots.xyz/wp-json/wp/v2/meta-data?slug=${slug}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Devuelve los datos obtenidos
  } catch (error) {
    console.error('Error fetching title:', error);
    return null; // Maneja el error apropiadamente, devolviendo null o un valor por defecto
  }
};

export default fetchTitle;
