import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink 
              className={({isActive}) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link }
                to='/'>
                  home

            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink 
              className={({isActive}) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link }
                to='/about'>
                  About

            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink 
              className={({isActive}) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link }
                to='/contacts'>
                  Contact Us

            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink 
              className={({isActive}) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link }
                to='/blog'>
                  Blog

            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
