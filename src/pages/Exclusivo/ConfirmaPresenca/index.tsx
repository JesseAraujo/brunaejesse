import Head from "next/head";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";

import styles from './styles.module.scss'

import { FiTrash, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";



interface Names {
    id: number;
    name: string;
}

export default function Confirmed() {

    const [names, setNames] = useState<Names[]>([]);
    const [newName, setNewName] = useState('');

    const [listName, setListName] = useState('')
    const [sendMensage, setSendMensage] = useState(false)



    function handleNewName() {
        if (!newName) {
            toast.error("Ops! Faltou colocar um nome no campo... vamos tentar de novo? 😅")
        }
        else {

            const name = {
                id: Math.random(),
                name: newName,
            }

            setNames(oldState => [...names, name])
            setListName(oldState => `%0A-> *${name.name}*, ${listName}`)

            setSendMensage(true)

            setNewName('')

        }
    }

    function handleConfirmed() {

        window.location.replace(`
            https://wa.me/5514996247077?text=Olá noivoooooooooos!!!!%0AEstamos confirmando nossa presença para a festinha após a cerimônia. Vamos continuar a celebrar com vocês!%0A %0AA listinha dos nomes pra vocês: ${listName}%0A %0AMuito obrigado e até breve!
        `)

        setNames([])
        setListName('')

        setSendMensage(false)
    }

    function handleRemoveName(id: number) {
        const filterNames = names.filter(names => names.id !== id)

        setNames(filterNames)

        if (names.length <= 1) {
            setSendMensage(false)
        }
    }

    return (

        <>

            <Head>
                <title>Bruna & Jessé | Comfirmar Presença</title>
            </Head>

            <div className='container'>
                <div className={styles.content}>

                    <Header />

                    <div className={styles.nameList}>

                        <p>Coloque seu nome no campo abaixo e confirma no <span>verde</span> ✅! Depois é só enviar a confirmação e pronto!! <br /></p>

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

                        <div className={sendMensage ? styles.enable : styles.disable}>
                            <button onClick={sendMensage ? handleConfirmed : null}>
                                <FaWhatsapp size={24} color="#fff" />
                                <p>Enviar Confirmação</p>
                            </button>
                        </div>

                    </div>



                </div>

            </div>

            <ToastContainer />

            <Footer />
        </>
    )
}