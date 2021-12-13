import React from 'react';
import { Hello } from './components/Hello';
import { Game } from './components/Game';
import { Result } from './components/Result';

export default function App() {
  const [currentStep, setCurrentStep] = React.useState('hello');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onStart = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
    setCurrentStep('game');
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
          nextStep={setCurrentStep}
        />
      )}
      {currentStep === 'result' && (
        <Result onRestart={onStart} wordsCount={currentIndex} seconds={30} />
      )}
    </div>
  );
}
