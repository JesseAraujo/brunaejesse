import Head from "next/head";
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'
import Footer from "../../components/Footer";


import { Header } from "../../components/Header";

import styles from './styles.module.scss'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Bruna & Jessé | Comfirmar Presença</title>
            </Head>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <div className={styles.groupButtons}>
                        <a href="https://wa.me/5514996247077?text=Olá!!" className={styles.whatsapp}>
                            <FaWhatsapp size={24} color="#fff" />
                            <p>WhatsApp</p>
                        </a>
                        <a href="" className={styles.telegram}>
                            <FaTelegram size={24} color="#fff" />
                            <p>Telegram</p>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}