import { ICurrentQuestion } from '../../../../models/ITest'
import styles from './styles.module.css'
import {v4 as uuid} from 'uuid'

export const MultipleChoiceQuestion = ({currentUserAnswer, setCurrentUserAnswer, answers}:ICurrentQuestion) => {

  function changeCurrentUserAnswer(answer: string) {
    if(currentUserAnswer?.includes(answer)) {
      const answers = currentUserAnswer.filter((item) => item !== answer)
      setCurrentUserAnswer(answers)
    } else {

      if(currentUserAnswer) {
        setCurrentUserAnswer([...currentUserAnswer, answer])
      } else {
        setCurrentUserAnswer([answer])
      }
    }
  }

  return (
    <div className={styles.answersContainer}>
      {answers.map((answer) => <div
        className={`${styles.answer} ${currentUserAnswer?.includes(answer) ? styles.active : ''}`}
        key={uuid()}
        onClick={() => changeCurrentUserAnswer(answer)}>
        {answer}
      </div>)}
    </div>
  )
}
