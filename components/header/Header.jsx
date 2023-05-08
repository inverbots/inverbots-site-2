import Link from 'next/link'
import styles from './Header.module.css'

const link = [{
  label: 'Trading',
  route: '/'
}, {
  label: 'Planes',
  route: '/promociones'
}, {
  label: 'Resultados',
  route: '/planes'
}, {
  label: 'Testimonios',
  route: '/testimonios'
}, {
  label: 'Contáctenos',
  route: '/contacta'
}

]

export default function Header () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link className={styles.logo_ref} href='/'>
          <h3 className={styles.logo_title}>INVERBOTS</h3>
        </Link>
        <ul className={styles.menu}>
          {link.map(({ label, route }) => {
            return (
              <li className={styles.menu_link} key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
