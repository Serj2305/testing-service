import { useEffect } from 'react'
import { FAQ } from './components/FAQ/faq'
import { Header } from './components/Header/header'
import { Recomendations } from './components/Recomendations/recomendations'
import { Courses } from './components/Сourses/courses'

export const Tests = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header/>
      <Recomendations/>
      <Courses/>
      <FAQ/>
    </>
  )
}
