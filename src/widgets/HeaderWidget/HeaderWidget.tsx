import React from 'react'
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom'
import '../../app/index.css'


export default function HeaderWidget() {
  return (
    <header>
      <div className="container">
        <div className={styles.head}>
          <NavLink to='/' className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </NavLink>
          <label className={styles.searchLabel} htmlFor='search'>
          </label>
          <Nav />
          <div className={styles.btns}>
            <button className={styles.likeBtn}>
            </button>
            <NavLink to={'/cart'} className={styles.cartBtn}>
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  )
}
