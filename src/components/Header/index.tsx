import styles from './styles.module.scss'

export function Header() {
    return (
        <div className={styles.content} >
            <img src='/logo.svg' alt="Bruna e Jessé" />

            <a href="/"> Início</a>
            <a href="/Contato"> Contatos</a>
        </div>
    )
}