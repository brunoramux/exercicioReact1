import styles from './Navbar.module.css'

export function Navbar (){
    return (
        <div className={styles.navbar}>
            <a href="#">Section 1</a>
            <a href="#">Section 2</a>
            <a href="#">Section 3</a>
            <a href="#">Section 4</a>
        </div>
    )
}