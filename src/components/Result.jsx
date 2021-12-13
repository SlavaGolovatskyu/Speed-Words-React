import React from 'react';
import styles from './style.module.scss';

export const Result = ({ wordsCount, seconds, onRestart }) => {
  return (
    <div className={styles.result}>
      <div className={styles.wrapper}>
        {wordsCount > 20 && (
          <img
            src="./fire.png"
            width={45}
            height={45}
            className={styles.icon}
            alt="Тут должно было быть изображение :("
          />
        )}
        {wordsCount < 20 && wordsCount >= 10 && (
          <img
            src="./notbad.png"
            width={45}
            height={45}
            className={styles.icon}
            alt="Тут должно было быть изображение :("
          />
        )}
        {wordsCount < 10 && (
          <img
            src="./bad.png"
            width={45}
            height={45}
            className={styles.icon}
            alt="Тут должно было быть изображение :("
          />
        )}
        <p className={styles.text}>
          {wordsCount > 20 ? 'Воу!' : 'Неплохо!'}{' '}
          <strong>За {seconds} секунд, </strong> ты ввел:
        </p>
        <h2
          className={
            styles.countWords +
            ' ' +
            (wordsCount > 20
              ? styles.red
              : wordsCount < 20 && wordsCount >= 10
              ? styles.orange
              : null)
          }
        >
          {wordsCount} слов
        </h2>
        <button onClick={onRestart}>
          <img src="./restart.png" alt="Попробовать снова?" />
        </button>
      </div>
    </div>
  );
};
