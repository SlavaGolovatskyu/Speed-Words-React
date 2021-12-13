import React from 'react';
import styles from './style.module.scss';

const arr = [
  'Наверное вы ещё готовы такой музыке вашим детям она понравится',
  'Тото меня такое ощущение больше Канзасе',
  'судите прошлое живу там больше',
  'Как принято считать стремящиеся вытеснить традиционное производство нанотехнологии обнародованы',
  'следует однако забывать том что выбранный нами инновационный',
  'Сегодняшний день она планировала завершить порцией тако',
  'грей намечалось свадьбы пенсии было далеко',
  'третьем этаже новая компания айтишники',
  'Двери лифта открылись втором этаже',
  'Она протирала стекла своих черепаховых очков сводила глаз Дженнифер',
  'отличие от мужчин женщины оставляли свою личность вместе ключами документами и неоплаченными счетами за электричество',
  'имелось достаточно информации чтобы начать работать',
  'Люди вокруг шмыгали носами них слезились глаза поежилась',
  'Вот начались вопросы ведь глаза слезятся легкие чистые',
  'Так отец Виктор говорит хорошеньких девушках вроде Изабель Линкольн',
  'Пройдя через двойные двери мимо людей истекавших кровью мимо астматиков гудящих аппаратов наконец оказалась кабинете Иана',
  'Капля пота стекала виску смахивала айвори джинсы клатч лонгслив смокинг стретч худи шорты',
  'чипсы хот-дог ростбиф крамбл крекер брокер бренд дефолт дедлайн дилер инвестор',
  'маркетинг нетворкинг ноу-хау пиар промоутер риэлтор фрилансер бодибилдинг допинг',
  'серфинг спорт старт фитнес браузер драйвер дисплей геймер комьюнити ноутбук',
  'провайдер трафик хакер блендер бойлер грант клевый клоун лузер кроссворд',
  'плейлист пазл репортаж саундтрек селфи спикер тест-драйв трамвай триллер',
];

const generateNewIndex = (len) => {
  return Math.floor(Math.random() * len);
};

const getRandomWord = () => {
  const firstIndex = generateNewIndex(arr.length);
  const wordArr = arr[firstIndex].split(' ');
  const secondIndex = generateNewIndex(wordArr.length);
  return wordArr[secondIndex];
};

export const Game = ({ incrementIndex, currentIndex, nextStep }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [timeLeft, setTimeLeft] = React.useState(30);
  const [currentWord, setCurrentWord] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  if (!currentWord) {
    setCurrentWord(getRandomWord());
  }

  const onChangeInput = (event) => {
    const { value } = event.target;

    if (value === currentWord) {
      incrementIndex();
      setInputValue('');
      setCurrentWord(getRandomWord());
      return;
    }

    if (currentWord.startsWith(value)) {
      if (isError) {
        setIsError(false);
      }
    } else {
      setIsError(true);
    }

    if (!value.trim()) {
      setIsError(false);
    }

    setInputValue(value);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          nextStep('result');
        }
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.Game}>
      <p className={styles.GameTitle}>Введите слово</p>
      <h2 className={styles.GameWord}>{currentWord}</h2>
      <input
        value={inputValue}
        onChange={onChangeInput}
        placeholder="Введите слово"
        autoFocus
        className={styles.GameInput + ' ' + (isError ? styles.error : null)}
      />
      <div className={styles.MainInformation}>
        <div className={styles.GameRow}>
          <p>Осталось времени:</p>
          <h3 className={styles.timeLeft}>{timeLeft} сек.</h3>
        </div>
        <div className={styles.GameRow}>
          <p>Введено слов:</p>
          <h3 className={styles.words}>{currentIndex}</h3>
        </div>
      </div>
    </div>
  );
};
