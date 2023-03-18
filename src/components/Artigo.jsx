import styles from './Artigo.module.css'

export function Artigo ({ imageUrl, content}){
    return (
        <article className={styles.article}>
            <img src={imageUrl} alt="" />
            <div className={styles.content}>
                {content}
            </div>
        </article>
    )
}