import styles from './styles/MyDescription.module.css'

export const MyDescription = () => {
    return (
        <div className={styles.description}>
            <span>Привет. Я профессиональный fullstack web-разработчик. Обожаю свою работу, чистый код и FSD.</span>
            <img className={styles.avatar} src="src/shared/assets/me.png" alt="" />
        </div>
    )
}