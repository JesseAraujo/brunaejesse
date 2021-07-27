import Head from "next/head";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../../components/Footer";

import { Header } from "../../components/Header";

import styles from './styles.module.scss';

import gifts from '../../services/gifts.json'

export default function GiftList() {
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
                            <div className={styles.itensList}>
                                <img src={gift.image} alt={gift.title} />
                                <div className={styles.giftTitle}>
                                    <p>
                                        {gift.title}
                                    </p>
                                </div>

                                <div className={styles.amount}>
                                    <h1>{gift.price}</h1>
                                </div>
                                <button type="button" >
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