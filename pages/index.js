import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      {/* <Contact /> */}


      
    </div>

  )
}
