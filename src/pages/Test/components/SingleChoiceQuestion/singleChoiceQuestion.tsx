import styles from './styles.module.css'
import { ICurrentQuestion } from '../../../../models/ITest'
import { v4 as uuid } from 'uuid';

export const SingleChoiceQuestion = ({ currentUserAnswer, setCurrentUserAnswer, answers }: ICurrentQuestion) => {

  return (
    <div className={styles.answersContainer}>
      {answers.map((answer) => <div
        className={`${styles.answer} ${currentUserAnswer?.includes(answer) ? styles.active : ''}`}
        key={uuid()}
        onClick={() => setCurrentUserAnswer([answer])}>
        {answer}
      </div>)}
    </div>
  )
}
