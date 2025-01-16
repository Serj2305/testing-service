import { useAppSelector } from '../../../../hooks/redux'
import styles from './styles.module.css'
import mockImg from '../../../../assets/mook-img2.png'
import { useState } from 'react';
import { SingleChoiceQuestion } from '../SingleChoiceQuestion/singleChoiceQuestion';
import { MultipleChoiceQuestion } from '../MultipleChoiceQuestion/multipleChoiceQuestion';
import { OrderSequenceQuestion } from '../OrderSequenceQuestion/orderSequenceQuestion';

export const TestCard = ({onNext}:{onNext: (id:string) => void}) => {

  const {test, activeQuestionId } = useAppSelector(state => state.testSlice);
  const activeQuestion = test.find((item) => item.id === activeQuestionId);
  const activeQuestionIndex = test.findIndex((item) => item.id === activeQuestionId)
  const [currentUserAnswer, setCurrentUserAnswer] = useState(activeQuestion?.userAnswers);


  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <img src={mockImg} className={styles.img} />
        <p className={styles.questionText}>
          {activeQuestion?.question}
        </p>
      </div>
      <div className={styles.answersContainer}>
        {activeQuestion?.type === 'radio' && <SingleChoiceQuestion />}
        {activeQuestion?.type === 'checkbox' && <MultipleChoiceQuestion />}
        {activeQuestion?.type === 'sequence' && <OrderSequenceQuestion />}
      </div>
      <div className={styles.buttonContainer}>
        {test[0] && activeQuestionId !== test[0].id && 
        <button
          className={styles.buttonBack}
          onClick={() => onNext(test[activeQuestionIndex - 1].id)}>
          Назад
        </button>}
        {test[0] && activeQuestionId !== test[test.length-1].id && 
        <button
          className={styles.buttonAnswer}
          onClick={() => onNext(test[activeQuestionIndex + 1].id)}>
          Ответить
        </button>}
        {test[0] && activeQuestionId === test[test.length-1].id && 
        <button
          className={styles.buttonResult}
          onClick={() => console.log('чопокайфу')}>
          Узнать результат
        </button>}
      </div>
    </div>
  )
}
