import { useAppSelector } from '../../../../hooks/redux'
import styles from './styles.module.css'
import { v4 as uuid} from 'uuid';

export const QuestionNumbers = ({onNext}: {onNext: (id:string) => void}) => {

  const {test, activeQuestionId} = useAppSelector(state => state.testSlice)

  return (
    <div className={styles.container}>
      {test.map((item, index) => {
        return <div 
        className={styles.numberContainer}
        key={uuid()} 
        style={(activeQuestionId === item.id || item.userAnswers) ? {backgroundColor: '#82F7FF'} : {}}
        onClick={() => {
          onNext(item.id)
        }}
        >
          {index + 1}
        </div>
      })}
    </div>
  )
}
