import styles from './styles/MyDescription.module.css'
import avatar from '@/shared/assets/me.png'

export const MyDescription = () => {
    return (
        <div className={styles.description}>
            <span>Привет. Я профессиональный fullstack web-разработчик. Обожаю свою работу, чистый код и FSD.</span>
            <img className={styles.avatar} src={avatar} alt="" />
        </div>
    )
}