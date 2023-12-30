import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
export default function App() {
    const [step, setStep] = useState(1);
    const [display, setDisplay] = useState(true);
    // const test = useState({ name1: "Megha" });
    function handlePreviousButton() {
        // step > 1 && step<4 ? setStep((step)=>step - 1) : null;
        if (step > 1) setStep((s) => s - 1);
    }
    function handleNextButton() {
        if (step < 3) setStep((s) => s + 1);
        // test.name = "ruhi";//----never set state manually
        // step >=1 && step<3 ? setStep((step) => step + 1) : null;
    }
    // function handleCrossButton() {
    //     display ? setDisplay(false) : setDisplay(true);
    // }
    return <>
        <button className="close" onClick={() => setDisplay((display)=>!display)}><i className="fa fa-times"></i></button>
        { display &&
            <div className="steps">
                <div className="numbers">
                    <div className={step >= 1 ? "active" : ""}>1</div>
                    <div className={step >= 2 ? "active" : ""}>2</div>
                    <div className={step >= 3 ? "active" : ""}>3</div>
                </div>
                <div className="message" >Step: {step}{" "}{messages[step - 1]}</div>
                <div className="buttons">
                    <button style={{ backgroundColor: "blue", color: "white" }} onClick={handlePreviousButton}>Previous</button>
                    <button style={{ backgroundColor: "blue", color: "white" }} onClick={handleNextButton}>Next</button>
                </div>
            </div>
        
        }
        
    </>
}