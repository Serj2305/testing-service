import styles from './styles.module.css'
import recImg1 from '../../../../assets/rec-image-1.png'
import recImg2 from '../../../../assets/rec-image-2.png'
import recImg3 from '../../../../assets/rec-image-3.png'
import recImg4 from '../../../../assets/rec-image-4.png'
import { Recomendation } from '../Recomendation/recomendation'
import { v4 as uuid} from 'uuid';

export const Recomendations = () => {

  const recomendations = [
    {
      title: 'Спокойная обстановка',
      text: 'Найдите тихое место, где ребёнок сможет сосредоточиться, убедитесь, что ребёнка не будут отвлекать во время теста.',
      img: recImg1
    },{
      title: 'Устройства и подключение',
      text: 'Проверьте, что устройство (компьютер, планшет или смартфон) работает исправно и убедитесь в наличии стабильного интернет-соединения.',
      img: recImg2
    },{
      title: 'Цель тестирования',
      text: 'Расскажите, что тест поможет подобрать самый интересный и подходящий курс обучения. Убедите, что ошибок бояться не стоит — это лишь часть процесса.',
      img: recImg3
    },
    {
      title: 'Использование интерфейса',
      text: 'Покажите, как выбирать ответы, переходить к следующему вопросу. Напомните ребёнку, что он может вернуться к предыдущему вопросу, если это возможно.',
      img: recImg4
    }
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Рекомендации по прохождению тестов</h2>
      <div className={styles.containerRecomedations}>
        {recomendations.map((item) => <Recomendation {...item} key={uuid()}/>)}
      </div>
    </div>
  )
}
