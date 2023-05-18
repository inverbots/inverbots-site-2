import Link from 'next/link'
import styles from './Header.module.css'

const fetchMenu = () => {
  return fetch('https://inverbots.com/wp-json/wp/v2/menu/3337', { cache: 'no-store' })
    .then(rest => rest.json())
}

export default async function Header () {
  const menuData = await fetchMenu()

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link className={styles.logo_ref} href='/'>
          <h3 className={styles.logo_title}>INVERBOTS</h3>
        </Link>
        <ul className={styles.menu}>
          {menuData.map((data, key) => {
            const { title, url, subitems } = data

            return (
              <li className={styles.menu_link} key={key}>
                <Link href={url}>
                  {title}
                </Link>
                <ul className={styles.submenu}>
                  {subitems
                    ? (
                        subitems.map((items, key) => {
                          const { title, url } = items
                          return (
                            <li className={styles.submenu_link} key={key + '-2'}>
                              <Link href={url}>
                                {title}
                              </Link>
                            </li>
                          )
                        })
                      )
                    : ('')}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
