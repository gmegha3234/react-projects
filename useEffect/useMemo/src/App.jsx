import { useState, useMemo, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [number, setNumber]=useState(0);
   const [dark,setDark]=useState(false);
   const doubleNumber = useMemo(()=>{
      return slowFunction(number);
   },[number]);
    
   const themeStyles=useMemo(()=>{
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      };
   },[dark]);
   
   
   useEffect(()=>{
      console.log("Theme changed");
   },[themeStyles]);
   return (
     <>
       <div>
         <input
           type="number"
           value={number}
           onChange={(e) => setNumber(e.target.value)}
           placeholder="Enter number"
         />
       </div>
       <br />
       <div>
         <button onClick={ ()=>setDark(prevDark => !prevDark)}>Change Theme</button>
       </div>
       <br />
       <div style = {themeStyles}>{doubleNumber}</div>
     </>
   );
}
function slowFunction(num){
   console.log("calling slow function");
   for(let i=0; i<= 1000000;i++){ 
       //shshhshhsshssh
   }
   console.log("calling end function");
   return num*2;
}

export default App
