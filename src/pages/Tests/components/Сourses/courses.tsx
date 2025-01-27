import styles from './styles.module.css'
import { Course } from '../Course/course'
import mookImg1 from '../../../../assets/mook-img1.png'
import mookImg2 from '../../../../assets/mook-img2.png'
import { v4 as uuid} from 'uuid';

export const Courses = () => {
  const backgroundColors = ['#EA3FA4', '#CBF86D', '#FF5A50', '#00AF85', '#82F7FF', '#FFB0CD']

  const courses = [
    {
      id:1,
      name: "Основы логики и программирования",
      age: '6-7 лет',
      countQuestions: '15',
      img: mookImg1
    },
    {
      id:2,
      name: "Видеоблогинг",
      age: '9-14 лет',
      countQuestions: '15',
      img: mookImg2
    },
    {
      id:3,
      name: "Python start",
      age: '11-13 лет',
      countQuestions: '15',
      img: mookImg1
    },
    {
      id:4,
      name: "Компьютерная грамотность",
      age: '7-9 лет',
      countQuestions: '15',
      img: mookImg2
    },
    {
      id:5,
      name: "Визуальное программирование на Scratch",
      age: '9-11 лет',
      countQuestions: '15',
      img: mookImg2
    },
    {
      id:6,
      name: "Фронтенд разработка",
      age: '12-15 лет',
      countQuestions: '15',
      img: mookImg2
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Узнайте, какой курс подойдёт вашему ребёнку!</h2>
      <p className={styles.text}>
        Каждый ребёнок уникален, и наши тесты помогут раскрыть его таланты. 
        Пройдите короткий тест для каждого курса, чтобы узнать, 
        какой уровень обучения будет максимально интересным и полезным для вашего ребёнка.
      </p>
      <div className={styles.coursesContainer}>
        {courses.map((item, index) => <Course {...item} color={backgroundColors[index % backgroundColors.length]} key={uuid()}/>)}
      </div>
    </div>
  )
}
