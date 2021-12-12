import React from "react";
import styles from "./App.module.scss";

export const App = () => {
  const [currentStep, setCurrentStep] = React.useState("");

  const onStart = () => {
    setCurrentStep("game");
  };

  return <div className={styles.App}></div>;
};
