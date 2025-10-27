import styles from './Header.module.css'
import Menu from './Menu/Menu'

// ✅ Menú por defecto en caso de que falle la API
const DEFAULT_MENU = [
  { title: 'Inicio', url: '/' },
  { title: 'Publicaciones', url: '/publicaciones' },
  { title: 'Testimonios', url: '/testimonios' },
  // Agrega más items según tu menú real
]

const fetchMenu = async () => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/menu/3337`, 
      { 
        cache: 'no-store',
        next: { revalidate: 3600 } // Cachea por 1 hora
      }
    )
    
    if (!response.ok) {
      console.error(`Error fetching menu: ${response.status}`)
      return DEFAULT_MENU
    }
    
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for menu')
      return DEFAULT_MENU
    }
    
    const text = await response.text()
    if (!text || text.trim() === '') {
      console.error('Empty response from menu API')
      return DEFAULT_MENU
    }
    
    const data = JSON.parse(text)
    return data && data.length > 0 ? data : DEFAULT_MENU
    
  } catch (error) {
    console.error('Error fetching menu:', error)
    return DEFAULT_MENU
  }
}

export default async function Header () {
  const menuData = await fetchMenu()
  
  return (
    <header className={styles.header + ' ' + 'header_page header-class'}>
      <Menu data={menuData} />
    </header>
  )
}
