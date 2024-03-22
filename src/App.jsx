import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./App.css";
import { ReviewForm } from "./components/ReviewForm";
import { Steps } from "./components/Steps";
import { ThanksForm } from "./components/ThanksForm";
import { UseForm } from "./components/UseForm";
import { useMultiForm } from "./hook/useMultiForm";

// hooks

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const components = [
    <UseForm key={1} data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm key={2} data={data} updateFieldHandler={updateFieldHandler} />,
    <ThanksForm key={3} data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useMultiForm(components);

  return (
    <div className="app">
      <header className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos Felizes com sua compra</p>
      </header>

      <div className="form-container">
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <Steps currentStep={currentStep} />
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                Voltar
              </button>
            )}
            {isLastStep ? (
              <button type="button">
                Enviar <FiSend />
              </button>
            ) : (
              <button type="submit">
                <GrFormNext />
                Avançar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
