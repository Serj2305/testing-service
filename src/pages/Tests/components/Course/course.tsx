import { Link } from 'react-router'
import styles from './styles.module.css'
import { Paths } from '../../../../paths'

interface ICourse {
    id: number
    name: string
    age: string
    countQuestions: string
    img: string
    color: string
}

export const Course = (props:ICourse) => {
  return (
    <Link style={{backgroundColor:`${props.color}`}} to={`${Paths.test}/:${props.id}`} className={styles.container}>
        <p className={styles.age}>{props.age}</p>
        <p className={styles.countQuestions}>{props.countQuestions} вопросов</p>
        <p className={styles.name}>{props.name}</p>
        <img className={styles.img} src={props.img}/>
    </Link>
  )
}
