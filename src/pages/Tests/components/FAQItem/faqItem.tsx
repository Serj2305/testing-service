import { useState } from 'react'
import styles from './styles.module.css'

interface IFAQItem {
  question: string
  answer: string
}

export const FAQItem = (props: IFAQItem) => {

  const [isShow, setIsShow] = useState(false)

  return (
    <div  className={styles.container} onClick={() => setIsShow(!isShow)}>
      <p className={styles.question} >{props.question}</p>
      <p className={`${styles.answer} ${isShow ? styles.show: ''}`}>{props.answer}</p>
    </div>
  )
}
