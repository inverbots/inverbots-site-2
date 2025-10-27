import styles from './Header.module.css'
import Menu from './Menu/Menu'

const fetchMenu = async () => {
  try {
    const response = await fetch(
      `https://inverbots.xyz/wp-json/wp/v2/menu/3337`, 
      { cache: 'no-store' }
    )
    
    if (!response.ok) {
      console.error(`Error fetching menu: ${response.status}`)
      return []
    }
    
    // Verificar que sea JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error('Response is not JSON for menu')
      return []
    }
    
    const text = await response.text()
    if (!text) {
      console.error('Empty response from menu API')
      return []
    }
    
    return JSON.parse(text)
  } catch (error) {
    console.error('Error fetching menu:', error)
    return [] // Retorna array vacío si falla
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
