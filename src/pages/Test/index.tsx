import styles from './styles.module.css'
import { Logo } from '../../components/Logo/logo'
import { QuestionNumbers } from './components/QuestionNumbers/questionNumbers'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useState } from 'react'
import { loadTest } from '../../store/actionCreators/TestActions'
import { TestCard } from './components/TestCard/testCard'
import { testSlice } from '../../store/redusers/TestSlice'

export const Test = () => {
  const [animation, setAnimation] = useState<"enter" | "exit" | null>(null);
  const { isLoading } = useAppSelector(state => state.testSlice)
  const dispatch = useAppDispatch()

  // Для смены вопроса с анимацией
  const handleNextQuestion = (id: string) => {
    setAnimation("exit"); // Сначала анимация выхода
    setTimeout(() => {
      // После выхода — смена вопроса и запуск анимации появления
      dispatch(testSlice.actions.changeActiveQuestion(id))
      setAnimation("enter");
    }, 300);
  };


  useEffect(() => {
    loadTest(dispatch)
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.testContainer}>
        {isLoading ?
          <div>Загрузка</div> :
          <>
            <QuestionNumbers onNext={handleNextQuestion} />
            <div className={`${styles.card} ${animation === "enter" ? styles.enter : ""
              } ${animation === "exit" ? styles.exit : ""}`}>
              <TestCard onNext={handleNextQuestion}/>
            </div>
          </>
        }

      </div>
    </div>
  )
}
