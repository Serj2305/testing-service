import styles from './styles.module.css'
import { Logo } from '../../components/Logo/logo'
import { QuestionNumbers } from './components/QuestionNumbers/questionNumbers'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import { loadTest } from '../../store/actionCreators/TestActions'
import { TestCard } from './components/TestCard/testCard'
import { testSlice } from '../../store/redusers/TestSlice'
import Loader from 'react-ts-loaders'
import { IThresholds } from '../../models/ITest'
import { ResultCard } from './components/ResultCard/resultCard'
import { fetchFakeGetThersholds } from '../../api/test'

export const Test = () => {
  const [animationQuestion, setAnimationQuestion] = useState<"enter" | "exit" | null>(null);
  const [animationResult, setAnimationResult] = useState<"enter" | "exit" | null>('exit');
  const [animationQuestionNumbers, setAnimationQuestionNumbers] = useState<"enter" | "exit" | null>(null);
  const [openResult, setOpenResult] = useState(false)
  const [thresholds, setThresholds] = useState<IThresholds>()
  const { isLoading } = useAppSelector(state => state.testSlice)
  const dispatch = useAppDispatch()


  // Для смены вопроса с анимацией
  const handleNextQuestion = (id: string) => {
    setAnimationQuestion("exit"); // Сначала анимация выхода
    setTimeout(() => {
      // После выхода — смена вопроса и запуск анимации появления
      dispatch(testSlice.actions.changeActiveQuestion(id))
      setAnimationQuestion("enter");
    }, 300);
  };

  const handleShouResult = () => {
    setAnimationQuestion('exit');
    setAnimationQuestionNumbers('exit')
    setTimeout(() => {
      setOpenResult(true)
      setTimeout(() => {
        setAnimationResult('enter');
      }, 300)
    }, 300)
  }


  useEffect(() => {
    loadTest(dispatch)
    fetchFakeGetThersholds().then((data) => setThresholds(data))
  }, [dispatch])


  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.testContainer}>
        {isLoading ?
          <div className={styles.loaderContainer}>
            <Loader type="ring"
              color="#a00598"
              size={150} />
          </div> :
          <>
            {
              !openResult ?
                <>
                  <div className={`${styles.card} ${animationQuestionNumbers === "exit" ? styles.exit : ""}`}>
                    <QuestionNumbers onNext={handleNextQuestion} />
                  </div>
                  <div className={`${styles.card} ${animationQuestion === "enter" ? styles.enter : ""
                    } ${animationQuestion === "exit" ? styles.exit : ""}`}>
                    <TestCard onNext={handleNextQuestion} shouResult={handleShouResult} />
                  </div>
                </> :
                <div className={`${styles.card} ${animationResult === "enter" ? styles.enter : ''
                  } ${animationQuestion === "exit" ? styles.exit : ""}`}>
                  <ResultCard thresholds={thresholds} />
                </div>
            }
          </>
        }

      </div>
    </div>
  )

}


