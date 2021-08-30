import Head from "next/head";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../../components/Footer";

import { Header } from "../../components/Header";

import styles from './styles.module.scss';

import gifts from '../../services/gifts.json'


export default function GiftList() {

    function handleBuy(id, image, title, price, url) {
        const idItem = id
        const imageItem = image
        const titleItem = title
        const priceItem = price
        const urlItem = url

        localStorage.setItem('idItem', idItem)

        localStorage.setItem('imageItem', imageItem)
        localStorage.setItem('titleItem', titleItem)
        localStorage.setItem('priceItem', priceItem)
        localStorage.setItem('urlItem', urlItem)
        window.location.reload()


        window.location.replace('/FinalizarCompra')
    }

    const priceProduct = (price) =>
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(Number(price));

    return (
        <>

            <Head>
                <title>Bruna & Jessé | Lista de Presentes</title>
            </Head>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <div className={styles.groupItensList}>
                        {gifts.map(gift => (
                            <div className={styles.itensList} key={gift.id}>
                                <img src={gift.image} alt={gift.title} />
                                <div className={styles.giftTitle}>
                                    <p>
                                        {gift.title}
                                    </p>
                                </div>

                                <div className={styles.price}>
                                    <h1>{priceProduct(gift.price)}</h1>
                                </div>
                                <button type="button" onClick={() => handleBuy(gift.id, gift.image, gift.title, gift.price, gift.url)} >
                                    <FiShoppingCart size={16} color="#fff" />
                                    <p>Comprar</p>
                                </button>
                            </div>
                        ))}

                    </div>
                </div>



            </div>

            <Footer />
        </>
    )
}