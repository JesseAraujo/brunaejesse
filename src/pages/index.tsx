import Head from 'next/head'
import Link from 'next/link'

import { FaWindowClose } from 'react-icons/fa'

import Modal from 'react-modal'
import { useState } from 'react';

import Footer from '../components/Footer'
import { Header } from '../components/Header'

import styles from '../styles/index.module.scss'




export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (

    <>

      <Head>
        <title>Bruna & Jessé</title>
      </Head>


      <div className='container'>
        <Header />

        <div className={styles.content}>
          <div className={styles.groupButtons}>

            <div className={styles.button}>
              <Link href='/Exclusivo/ConfirmaPresenca' >
                <p>Confirmar presença</p>
              </Link>
            </div>

            <button
              className={styles.button}
              onClick={openModal}
            >
              <p>Convite</p>
            </button>

            <div className={styles.button}>
              <Link href='/ListaPresentes'>
                <p>Lista de Presentes</p>
              </Link>
            </div>

          </div>

        </div>
      </div>



      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={closeModal}
          className="react-modal-close"
        >
          <FaWindowClose size={32} color="#a10404" />
        </button>

        <img src="/assets/WeddingInvitation.png" alt="" />
      </Modal>

      <Footer />
    </>
  )
}
