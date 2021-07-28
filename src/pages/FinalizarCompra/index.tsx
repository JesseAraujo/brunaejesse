import Head from 'next/head'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss'

export default function FinishedBuy() {

    function handleCanceled() {
        window.location.replace('/ListaPresentes')
    }

    return (
        <>
            <Head>
                <title>Bruna & Jessé | Finalizar Compra </title>
            </Head>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <div className={styles.item}>
                        <img src="/assets/gifts/batedeira.png" alt="" />

                        <p>Batedeira Portátil Preta 500W PBT510P</p>

                        <h1>R$ 212,71</h1>

                        <div className={styles.groupButtons}>
                            <button className={styles.finishedBuy}>Finalizar Compra</button>
                            <button className={styles.canceledBuy} onClick={handleCanceled}  >Cancelar Compra</button>
                        </div>
                    </div>


                </div>
            </div>

            <ToastContainer />

            <Footer />
        </>
    )
}