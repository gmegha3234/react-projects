import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState('');
  // const [render,setRender]= useState(0);// we make useRef to persist between renders
  const renderCount =useRef(0);
   //useRef====={current: 0}
  //use of useeffect cause infinite loop
  const inputRef = useRef();
  const prevName =useRef();
  useEffect(()=>{
    renderCount.current +=1;
    prevName.current=name;
  },);
  function focus(){
    inputRef.current.focus();
    // inputRef.current.value="myvalue";
  }



   return (
     <>
       <input
         ref={inputRef}
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
       />
       <div>My name is {name} and it used to be {prevName.current}</div>
       <div>I have rendered {renderCount.current} times</div>
       <button onClick={focus}>Focus</button>
     </>
   );
}

export default App
