import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/img/logo.png'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.nav}>
        <Link href='/'>
            <div className={styles.logo}>
                <Image src={logo} />
            </div>
        </Link>
        <ul className={styles.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>


    </div>
  )
}
