import Head from "next/head";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from './styles.module.scss'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Bruna & Jessé | Pouco de Nós</title>
            </Head>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <img src="/assets/bj.jpg" alt="Foto Bruna e Jessé" className={styles.imgBJ} />

                    <h4>
                        “Portanto deixará o homem a seu pai e a sua mãe, e unir-se-á à sua mulher, e serão uma só carne” – Gn 2:24
                    </h4>

                    <div className={styles.history}>
                        <p>
                            É uma história engraçada de como tudo começou. Ela, irmã do meu cunhado e eu irmão da cunhada dela, pois é, ficou tudo em família! Estávamos muito perto um do outro, porém não percebemos o quão perto um do outro Deus tinha nos colocado.
                        </p>
                        <p>
                            Foram várias idas pra Curitiba na casa onde nossos irmãos moravam, e foi assim que começou. Ela, sempre com um sorriso lindo estampado em seu rosto e eu cada vez mais admirando e sem saber fui me apaixonando.
                        </p>
                        <p>
                            Aos poucos começamos a trocar mensagens, curtir fotos um do outro, mas nisso tudo ambos pedindo discernimento a Deus sobre o que estava acontecendo até o dia que tomei coragem pra dizer o que sentia e foi recíproco.
                        </p>
                        <p>
                            Hoje estamos aqui na caminhada para o nosso casamento porque nossos desejos, planos e sonhos acabaram se tornando um só e durante toda a caminhada que tivemos até agora, pudemos ver e vemos Deus na frente de todas nossas escolhas.
                        </p>
                    </div>




                </div>
            </div>

            <Footer />
        </>
    )
}