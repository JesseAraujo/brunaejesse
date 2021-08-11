import Head from 'next/head'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios';

import Script from 'next/script';

import styles from './styles.module.scss'
import { useEffect, useState } from 'react';

export default function FinishedBuy() {
    const [imageItemProduct, setImageItemProduct] = useState('')
    const [titleItemProduct, setTitleItemProduct] = useState('')
    const [priceItemProduct, setPriceItemProduct] = useState('')

    const [paymentMethods, setPaymentMethods] = useState([]);
    const [payerFirstName, setPayerFirstName] = useState('');
    const [payerLastName, setPayerLastName] = useState('');
    const [payerEmail, setPayerEmail] = useState('');
    const [docNumber, setDocNumber] = useState('');

    useEffect(() => { 
        
        (async () => {
            const response = await (await fetch('/api/payment')).json();
            setPaymentMethods(response);
            console.log(response);
        })();
    }, [])

    function handleCanceled() {
        localStorage.removeItem('imageItem')
        localStorage.removeItem('titleItem')
        localStorage.removeItem('priceItem')

        window.location.replace('/ListaPresentes')
    }

    useEffect(() => {
        const imageItemLocalStorage = localStorage.getItem('imageItem')
        const titleItemLocalStorage = localStorage.getItem('titleItem')
        const priceItemLocalStorage = (value) =>
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(Number(localStorage.getItem('priceItem')));

        setImageItemProduct(imageItemLocalStorage)
        setTitleItemProduct(titleItemLocalStorage)
        setPriceItemProduct(priceItemLocalStorage)
    }, []);

    async function handlePayment() {
        const { data } = await axios.post('/api/createPayment', {
            firstName: payerFirstName,
            lastName: payerLastName,
            email: payerEmail,
            docNumber: docNumber,
        });

        console.log(data);
    }


    return (
        <>
            <Head>
                <title>Bruna & Jessé | Finalizar Compra </title>
                <script src="https://sdk.mercadopago.com/js/v2"></script>
            </Head>

            <form action="/process_payment" method="post" id="paymentForm">
                <h3>Forma de Pagamento</h3>
                <div>
                    <select className="form-control" id="paymentMethod" name="paymentMethod">
                        <option>Selecione uma forma de pagamento</option>

                        {paymentMethods.map((payment, index) => (
                            <option value={payment.id} key={`option-${index}`}>{payment.name}</option>
                        ))}

                        <option value="card">Cartão</option>
                        <option value="slip">Boleto</option>
                    </select>
                </div>

                <h3>Detalhe do comprador</h3>
                
                <div>
                    <div>
                        <label htmlFor="payerFirstName">Nome</label>
                        <input id="payerFirstName" name="payerFirstName" value={payerFirstName} onChange={(e) => setPayerFirstName(e.target.value)} type="text" />
                    </div>
                    <div>
                        <label htmlFor="payerLastName">Sobrenome</label>
                        <input id="payerLastName" name="payerLastName" value={payerLastName} onChange={(e) => setPayerLastName(e.target.value)} type="text" />
                    </div>
                    <div>
                        <label htmlFor="payerEmail">E-mail</label>
                        <input id="payerEmail" name="payerEmail" value={payerEmail} onChange={(e) => setPayerEmail(e.target.value)} type="text" />
                    </div>
                    <div>
                        <label htmlFor="docType">Tipo de documento</label>
                        <input id="docType" name="docType" data-checkout="docType" type="text" />
                    </div>
                    <div>
                        <label htmlFor="docNumber">Número do documento</label>
                        <input id="docNumber" name="docNumber" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} data-checkout="docNumber" type="text" />
                    </div>
                </div>

                <div>
                    <div>
                        <input type ="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                        <input type ="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
                        
                        <br />

                        <button type="button" onClick={handlePayment}>Pagar</button>

                        <br />
                    </div>
                </div>
            </form>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <div className={styles.item}>
                        <img src={imageItemProduct} alt={titleItemProduct} />

                        <p>{titleItemProduct}</p>

                        <h1>{priceItemProduct}</h1>

                        <div className={styles.groupButtons}>
                            <button className={styles.finishedBuy}>Finalizar Compra</button>
                            <button className={styles.canceledBuy} onClick={handleCanceled}  >Cancelar Compra</button>
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
}