
import headerImg from '../../../../assets/header-image.png'
import marsobotImg from '../../../../assets/marsobot.png'
import { Logo } from '../../../../components/Logo/logo'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo/>
      <div className={styles.imgContainer}>
        <div className={styles.container}>
          <img src={marsobotImg} className={styles.marsobotImg}/>
          <h1 className={styles.headerTitle}>
            Добро пожаловать! Здесь вы можете пройти тесты, чтобы узнать,
            насколько ваш ребёнок готов к обучению на наших курсах.
            Мы подберём подходящий уровень и программу,
            чтобы обучение было интересным и эффективным
          </h1>
        </div>
        <img src={headerImg} className={styles.headerImg}/>
      </div>
    </div>
  )
}
