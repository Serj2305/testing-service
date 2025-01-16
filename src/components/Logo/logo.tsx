import styles from './styles.module.css'
import algoritmikaLogo from '../../assets/algoritmika-logo.png'

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={algoritmikaLogo} className={styles.algoritmikaLogo} />
      <p className={styles.logoText}>Международная школа<br />программирования и математики</p>
    </div>
  )
}
