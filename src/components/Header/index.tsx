import styles from './styles.module.scss'

export function Header() {
    return (
        <div className={styles.content} >
            <img src='/logo.svg' alt="Bruna & Jessé" />

            <nav>
                <a href="/"> Início</a>
                <a href="/PoucoDeNos"> Pouco de Nós</a>
                <a href="/Contato"> Contato</a>
            </nav>
        </div>
    )
}