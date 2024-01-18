import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [number, setNumber]=useState(number);
   const [dark,setDark]=useState(false);

   return(
    <>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
    </>
   )
}

export default App
