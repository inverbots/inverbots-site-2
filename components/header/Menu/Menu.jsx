'use client'
import styles from './Menu.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Menu (props) {
  const [showMenu, setShowMenu] = useState('')
  const menuData = props.data

  return (
    <nav className={styles.navigation}>
      <Link className={styles.logo_ref} href='/'>
        <h3 className={styles.logo_title}>INVERBOTS</h3>
      </Link>
      <ul className={styles.menu + ' ' + showMenu}>
        {menuData?.map((data, key) => {
          const { title, url, subitems } = data

          return (
            <li
              className={styles.menu_link}
              key={key}
            >
              <Link href={url}>
                {title}
              </Link>
              {subitems &&
                <ul className={styles.submenu}>
                  {subitems.map((items, key) => {
                    const { title, url } = items
                    return (
                      <li className={styles.submenu_link} key={key}>
                        <Link href={url}>
                          {title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>}
            </li>
          )
        })}
      </ul>
      <div
        onClick={() => {
          (showMenu === '') ? setShowMenu(styles.showMenu) : setShowMenu('')
        }}
        className={styles.mobil_icon + ' ' + showMenu}
      >
        <span className={styles.line_menu + ' ' + styles.line__top} />
        <span className={styles.line_menu + ' ' + styles.line__middle} />
        <span className={styles.line_menu + ' ' + styles.line__botton} />
      </div>
    </nav>
  )
}
