import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>Popular</li>
        <li>News</li>
        <li>Reviews</li>
        <li>Multimedia</li>
        <li>Twitter</li>
      </ul>
    </div>
  )
}

export default Header