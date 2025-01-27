import styles from './styles.module.css'
import { IThresholds } from '../../../../models/ITest'
import mockImg1 from '../../../../assets/mook-img1.png'
import mockImg2 from '../../../../assets/mook-img3.png'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { calculateResultValue } from '../../../../utils/calculateResultValue'
import { useNavigate } from 'react-router'
import { getBallWord } from '../../../../utils/getBallWord'

export const ResultCard = ({ thresholds }: { thresholds: IThresholds | undefined }) => {

  const { test } = useAppSelector(state => state.testSlice)
  const [threshold, setThreshold] = useState<'poor' | 'average' | 'good'>('poor')
  const [result, setResult] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    const resultValue = calculateResultValue(test)
    setResult(resultValue)
    const fraction = resultValue/test.length

    if(fraction < 0.4) {
      setThreshold('poor')
    } else if(fraction < 0.7) {
      setThreshold('average')
    } else setThreshold('good')
    
  }, [test])


  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <img src={mockImg1} className={styles.img1} />
        <p className={styles.questionText}>
          Ваш результат готов!
        </p>
        <img src={mockImg2} className={styles.img2} />
      </div>
      <div className={styles.contentContainer}>
        {thresholds &&
          <>
            <p className={styles.title}>{thresholds[threshold].title}</p>
            <p className={styles.description}>Вы набрали {result} из {test.length} {getBallWord(result)}. {thresholds[threshold].description}</p>
            <p className={styles.recommendation}>{thresholds[threshold].recommendation}</p>
          </>}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => navigate('/')}>На главную</button>
      </div>
    </div>
  )
}
