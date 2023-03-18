import styles from './Header.module.css'



import reactLogo from '../assets/logo.svg'
import { MagnifyingGlass } from 'phosphor-react'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={reactLogo} alt="Logotipo React" />
            <div className={styles.headerContent}>
                <ul>
                    <li>Topico 1</li>
                    <li>Topico 2</li>
                    <li>Topico 3</li>
                    <li>Topico 4</li>
                </ul>
                <form action="">
                <input type="search" placeholder='Pesquisar' />
                <button><MagnifyingGlass size={25} /></button>
            </form>
            </div>
            
        </header>
    )
}