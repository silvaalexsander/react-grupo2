import React from 'react'
import styles from 'styles/Home.module.css'
import Footer from '../Footer'
import HeadPage from '../Head/Head'
import Main from '../Main'


export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeadPage/>
      <Main/>
      <Footer/>
    </div>
  )
}
