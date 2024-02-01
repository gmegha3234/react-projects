import { useState } from "react"

export default function DateCounter1(){

    const[step,setStep]= useState(1);
    
    const [text,setText]= useState(0);
   
    const date = new Date();
    date.setDate(date.getDate()+text);
    const dateOutput = date.toDateString(); 

    function handleIncrement(){
       setText((prev) => prev + step);
    }
    function handleDecrement() {
        setText((prev) => prev - step > 0 ? prev - step : 0);
    }
    return <div className="date-counter">
        <div className="slider">
            <input type="range" min="1" max="10" value={step} onChange={(e)=>setStep(Number(e.target.value))}   id="myRange"></input>
            <span>{step}</span>
        </div>
         <div className="counter">
             <button onClick={()=>handleDecrement()}>-</button>
             <input type="text" value={text} onChange={(e)=>setText(Number(e.target.value))}/>
             <button onClick={()=>handleIncrement()}>+</button>
         </div>
         <div className="result">{dateOutput}</div>
         <button type="reset" className="reset-btn" onClick={()=>setText(0)}>Reset</button>
    </div>
}