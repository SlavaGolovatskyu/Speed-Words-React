import React from 'react'
import styles from './style.module.scss'

export const Hello = ({ onStart }) => {
  return (
    <div className={styles.hello}>
      <img className={styles.flag} src='./flag.png' width={40} height={40} />
      <h1 className={styles.HelloTitle}>speed words</h1>
      <p className={styles.HelloParagraph}>Игра на скорость ввода слов</p>
      <button onClick={onStart} ><img src='./start.png' /></button>
    </div>
  )
}
