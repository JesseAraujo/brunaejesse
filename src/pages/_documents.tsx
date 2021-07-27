import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap" rel="stylesheet" />

                    <meta name="description" content="Casamento Bruna & Jessé" />
                    <meta name="description" content="Casamento Bruna e Jessé. Convite e confirmação de presença do casamento. Jessé e Bruna. Lista de presentes online" />

                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}