import Head from "next/head";
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'
import Footer from "../../components/Footer";


import { Header } from "../../components/Header";

import styles from './styles.module.scss'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Bruna & Jessé | Contato</title>
            </Head>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <div className={styles.groupButtons}>
                        <a href="https://wa.me/5514996247077?text=Olá!!" className={styles.whatsapp}>
                            <FaWhatsapp size={24} color="#fff" />
                            <p>WhatsApp - (14) 9 9624-7077</p>
                        </a>
                        <a className={styles.telegram}>
                            <FaTelegram size={24} color="#fff" />
                            <p>Telegram - (14) 9 9624-7077</p>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}