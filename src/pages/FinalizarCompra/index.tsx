import Head from 'next/head'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import axios from 'axios';

import styles from './styles.module.scss'
import { useEffect, useState } from 'react';


export default function FinishedBuy() {
    const [imageItemProduct, setImageItemProduct] = useState('')
    const [titleItemProduct, setTitleItemProduct] = useState('')
    const [priceItemProduct, setPriceItemProduct] = useState('')
    const [urlItemProduct, setUrlItemProduct] = useState('')


    useEffect(() => {
        const imageItemLocalStorage = localStorage.getItem('imageItem')
        const titleItemLocalStorage = localStorage.getItem('titleItem')
        const priceItemLocalStorage = (value) =>
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(Number(localStorage.getItem('priceItem')));
        const urlItemLocalStorage = localStorage.getItem('urlItem')


        setImageItemProduct(imageItemLocalStorage)
        setTitleItemProduct(titleItemLocalStorage)
        setPriceItemProduct(priceItemLocalStorage)
        setUrlItemProduct(urlItemLocalStorage)
    }, [])

    function handleCanceled() {
        localStorage.removeItem('idItem')
        localStorage.removeItem('imageItem')
        localStorage.removeItem('titleItem')
        localStorage.removeItem('priceItem')
        localStorage.removeItem('urlItem')

        window.location.replace('/ListaPresentes')
    }

    function handleBuy() {
        window.location.href = urlItemProduct
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
                        <img src={imageItemProduct} alt={titleItemProduct} />

                        <p>{titleItemProduct}</p>

                        <h1>{priceItemProduct}</h1>

                        <div className={styles.groupButtons}>
                            <button className={styles.finishedBuy} onClick={handleBuy}>Finalizar Compra</button>
                            <button className={styles.canceledBuy} onClick={handleCanceled}  >Cancelar Compra</button>
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
}