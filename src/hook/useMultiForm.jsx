import { useState } from "react";

export function useMultiForm(componentsForm) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index, event) {
    if (event) event.preventDefault();

    if (index < 0 || index >= componentsForm.length) return;

    setCurrentStep(index);
  }

  return {
    currentStep,
    currentComponent: componentsForm[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === componentsForm.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
