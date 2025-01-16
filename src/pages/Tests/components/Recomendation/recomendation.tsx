import styles from './styles.module.css'

interface IRecomendation {
    title: string
    text: string
    img: string
}

export const Recomendation = (props:IRecomendation) => {
  return (
    <div className={styles.container}>
        <img src={props.img} className={styles.img}/>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.text}>{props.text}</p>
    </div>
  )
}
