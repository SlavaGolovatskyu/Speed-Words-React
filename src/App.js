import React from 'react';
import { Hello } from './components/Hello';
import { Game } from './components/Game';
import styles from './App.module.scss';

export default function App() {
  const [currentStep, setCurrentStep] = React.useState('hello');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onStart = () => {
    setCurrentStep('game');
  };

  const onFinish = () => {
    setCurrentStep('result');
  };

  const incrementCurrentIndex = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      {currentStep === 'hello' && <Hello onStart={onStart} />}
      {currentStep === 'game' && (
        <Game
          incrementIndex={incrementCurrentIndex}
          currentIndex={currentIndex}
          onFinish={onFinish}
        />
      )}
      {currentStep === 'result' && <h1>Это результат</h1>}
    </div>
  );
}
