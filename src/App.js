import React from "react";
import { Hello } from "./components/Hello";
import styles from "./App.module.scss";

export default function App() {
  const [currentStep, setCurrentStep] = React.useState("hello");

  const onStart = () => {
    setCurrentStep("game");
  };

  return (
    <div>
      {currentStep === "hello" && <Hello onStart={onStart} />}
      {currentStep === "game" && <h1>Это игра</h1>}
      {currentStep === "result" && <h1>Это результат</h1>}
    </div>
  );
}
