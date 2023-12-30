import Step from "./Step";
import Count from "./Count";
import Message from "./Message";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incStep = () => {
    if (step >= 1)
      setStep(prev => prev + 1);
  }

  const decStep = () => {
    if (step > 1)
      setStep(prev => prev - 1);
  }

  const incCount = (step) => {
    if (count >= 0) {
      setCount((prev) => prev + step)
    };
  }
  const decCount = (step) => {
    if (count > 0)
      setCount((prev) => {
        if (prev - step > 0) {
          return prev - step;
        }
        return 0;
      });
  }
  return <div className="container">
    <Step
      step={step}
      incHandler={incStep}
      decHandler={decStep}
    />
    <Count
      count={count}
      incHandler={() => { incCount(step) }}
      decHandler={() => { decCount(step) }}
    />
    <Message count={count} />
  </div>
}

export default App
