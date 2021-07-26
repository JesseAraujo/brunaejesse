import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'
import { Header } from '../components/Header'

import styles from '../styles/index.module.scss'

export default function Home() {
  return (

    <>

      <Head>
        <title>Bruna & Jessé</title>
        <meta name="description" content="Casamento Bruna & Jessé" />
      </Head>


      <div className='container'>
        <Header />

        <div className={styles.content}>
          <div className={styles.groupButtons}>
            <div className={styles.button}>
              <Link href='/ConfirmaPresenca' >
                <p>Confirmar presença</p>
              </Link>
            </div>

            <div className={styles.button}>
              <Link href='/ListaPresentes'>
                <p>Lista de Presentes</p>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
