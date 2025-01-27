import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import styles from './styles.module.css'
import mockImg from '../../../../assets/mook-img2.png'
import { useEffect, useState } from 'react';
import { SingleChoiceQuestion } from '../SingleChoiceQuestion/singleChoiceQuestion';
import { MultipleChoiceQuestion } from '../MultipleChoiceQuestion/multipleChoiceQuestion';
import { OrderSequenceQuestion } from '../OrderSequenceQuestion/orderSequenceQuestion';
import { testSlice } from '../../../../store/redusers/TestSlice';
import { ImageModal } from '../ImageModal/imageModal';

interface ITestCard {
  onNext: (id:string) => void;
  shouResult: () => void;
}

export const TestCard = ({onNext, shouResult}:ITestCard) => {

  const {test, activeQuestionId } = useAppSelector(state => state.testSlice);
  const activeQuestion = test.find((item) => item.id === activeQuestionId);
  const activeQuestionIndex = test.findIndex((item) => item.id === activeQuestionId)
  const [currentUserAnswer, setCurrentUserAnswer] = useState(activeQuestion?.userAnswers);

  const dispatch = useAppDispatch()

  useEffect(() => {
    setCurrentUserAnswer(activeQuestion?.userAnswers)
  }, [activeQuestion])


  function saveUserAnswers(nextQuestionId: string) {
    dispatch(testSlice.actions.saveAnswers({id:activeQuestionId, answers: currentUserAnswer}))
    onNext(nextQuestionId)
  }

  function saveAnswersAndShouResult() {
    dispatch(testSlice.actions.saveAnswers({id:activeQuestionId, answers: currentUserAnswer}))
    shouResult()
  }


  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <img src={mockImg} className={styles.img} />
        <p className={styles.questionText}>
          {activeQuestion?.question}
        </p>
      </div>
      <div className={styles.contentContainer}>
          {activeQuestion?.img && <ImageModal imageUrl={activeQuestion.img}/>}
          {activeQuestion?.type === 'radio' && <SingleChoiceQuestion currentUserAnswer={currentUserAnswer} setCurrentUserAnswer={setCurrentUserAnswer} answers={activeQuestion.answers} />}
          {activeQuestion?.type === 'checkbox' && <MultipleChoiceQuestion currentUserAnswer={currentUserAnswer} setCurrentUserAnswer={setCurrentUserAnswer} answers={activeQuestion.answers} />}
          {activeQuestion?.type === 'sequence' && <OrderSequenceQuestion currentUserAnswer={currentUserAnswer ?? activeQuestion.answers} setCurrentUserAnswer={setCurrentUserAnswer} answers={activeQuestion.answers}/>}
      </div>
      <div className={styles.buttonContainer}>
        {test[0] && activeQuestionId !== test[0].id && 
        <button
          className={styles.buttonBack}
          onClick={() => saveUserAnswers(test[activeQuestionIndex - 1].id)}>
          Назад
        </button>}
        {test[0] && activeQuestionId !== test[test.length-1].id && 
        <button
          className={styles.buttonAnswer}
          onClick={() => saveUserAnswers(test[activeQuestionIndex + 1].id)}>
          Ответить
        </button>}
        {test[0] && activeQuestionId === test[test.length-1].id && 
        <button
          className={styles.buttonResult}
          onClick={() => saveAnswersAndShouResult()}>
          Узнать результат
        </button>}
      </div>
    </div>
  )
}


