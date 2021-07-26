import Head from "next/head";
import Footer from "../../components/Footer";

import { Header } from "../../components/Header";

import styles from './styles.module.scss';

export default function GiftList() {
    return (
        <>

            <Head>
                <title>Bruna & Jessé | Lista de Presentes</title>
            </Head>

            <div className='container'>

                <div className={styles.main}>

                    <Header />

                    <div className={styles.groupItensList}>

                        <div className={styles.itensList}>
                            <img src="./assets/faca.png" alt="" />
                            <p>
                                Conjunto de Facas Tramontina Plenus em Aço Inox e Polipropileno – 9 Peças
                            </p>
                            <div className={styles.amount}>
                                <h1>R$ 59,90</h1>
                            </div>
                            <button type="button" >
                                Comprar
                            </button>
                        </div>

                        <div className={styles.itensList}>
                            <img src="./assets/faca.png" alt="" />
                            <p>
                                Conjunto de Facas Tramontina Plenus em Aço Inox e Polipropileno – 9 Peças
                            </p>
                            <div className={styles.amount}>
                                <h1>R$ 59,90</h1>
                            </div>
                            <button type="button" >
                                Comprar
                            </button>
                        </div>

                        <div className={styles.itensList}>
                            <img src="./assets/faca.png" alt="" />
                            <p>
                                Conjunto de Facas Tramontina Plenus em Aço Inox e Polipropileno – 9 Peças
                            </p>
                            <div className={styles.amount}>
                                <h1>R$ 59,90</h1>
                            </div>
                            <button type="button" >
                                Comprar
                            </button>
                        </div>

                        <div className={styles.itensList}>
                            <img src="./assets/faca.png" alt="" />
                            <p>
                                Conjunto de Facas Tramontina Plenus em Aço Inox e Polipropileno – 9 Peças
                            </p>
                            <div className={styles.amount}>
                                <h1>R$ 59,90</h1>
                            </div>
                            <button type="button" >
                                Comprar
                            </button>
                        </div>

                        <div className={styles.itensList}>
                            <img src="./assets/faca.png" alt="" />
                            <p>
                                Conjunto de Facas Tramontina Plenus em Aço Inox e Polipropileno – 9 Peças
                            </p>
                            <div className={styles.amount}>
                                <h1>R$ 59,90</h1>
                            </div>
                            <button type="button" >
                                Comprar
                            </button>
                        </div>

                    </div>
                </div>



            </div>

            <Footer />
        </>
    )
}