import React from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.container}>
        <video autoPlay loop muted className={styles.video} >
            <source src='/img/video.mp4' type="video/mp4"/>
        </video>

        <div className={styles.innerContainer}>
            <h2>Come build with us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. </p>
            <button className={styles.button}>Gallery</button>
        </div>
    </div>
  )
}
