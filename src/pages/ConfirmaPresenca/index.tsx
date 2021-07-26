import Head from "next/head";
import { useState } from "react";


import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from './styles.module.scss'

import { FiTrash, FiCheck } from 'react-icons/fi'
import ReactWhatsapp from "react-whatsapp";



interface Names {
    id: number;
    name: string;
}

export default function Confirmed() {

    const [names, setNames] = useState<Names[]>([]);
    const [newName, setNewName] = useState('');
    const [listName, setListName] = useState('')

    function handleNewName() {
        if (!newName) return;

        const name = {
            id: Math.random(),
            name: newName,
        }

        setNames(oldState => [...names, name])

        setListName(oldState => `${listName}, ${name.name}`)


        setNewName('')
    }

    function handleConfirmed() {
        if (names.length > 0) {
            setNames([])
            setListName('')
        }
    }

    function handleRemoveName(id: number) {
        const filterNames = names.filter(names => names.id !== id)

        setNames(filterNames)
    }

    return (

        <>

            <Head>
                <title>Bruna & Jessé | Comfirmar Presença</title>
            </Head>

            <div className='container'>
                <div className={styles.main}>

                    <Header />

                    <p>Coloque seu nome no campo abaixo e confirma no <span>verde</span>! Depois é só enviar a confirmação e pronto 🥰</p>

                    <div className={styles.nameList}>
                        <div className={styles.formNames}>


                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder="Insira um nome por vez 😁"
                                    onChange={(e) => setNewName(e.target.value)}
                                    value={newName}
                                />
                                <button type="submit" data-testid="add-task-button" onClick={handleNewName}>
                                    <FiCheck size={16} color="#fff" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.showListNames}>
                            <ul>
                                {names.map(name => (
                                    <li key={name.id}>
                                        <p>{name.name}</p>

                                        <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveName(name.id)}>
                                            <FiTrash size={16} />
                                        </button>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <ReactWhatsapp number="+5514996247077" message={`Olá!! Estamos confirmando nossa presença no seu casamento para celebrarmos juntos. A listinha dos nomes pra vocês: *${listName}*... Muito Obrigado e até lá!`}

                        >
                            <p>Enviar Confirmação</p>
                        </ReactWhatsapp>
                    </div>




                </div>

            </div>

            <Footer />
        </>
    )
}