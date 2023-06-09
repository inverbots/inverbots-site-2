import styles from './Header.module.css'
import Menu from './Menu/Menu'

const fetchMenu = () => {
  // eslint-disable-next-line quotes
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/menu/3337`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function Header () {
  const menuData = await fetchMenu()

  return (
    <header className={styles.header}>
      <Menu data={menuData} />
    </header>
  )
}
