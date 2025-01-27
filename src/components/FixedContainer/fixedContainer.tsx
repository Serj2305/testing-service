import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

interface IFixedContaeiner {
  children: React.ReactNode
  clickContainer?: () => void
}

export const FixedContainer = ({ children, clickContainer }: IFixedContaeiner) => {
  return ReactDOM.createPortal(
    <div className={styles.container} onClick={clickContainer}>
      {children}
    </div>,
    document.body
  )
}
