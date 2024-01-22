import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(4);
  const [test,setTest]= useState({color:"red",topic:3});
  const color = test.color;
  const topic = test.topic;
  // const [count,setCount]=useState(()=>{
  //   console.log("render");// called only one time
  //   return 0;
  // })
  function decrementCount(){
    // setCount(count-1);
    // setCount(count - 1);

    setCount((prev)=>prev-1);
    // setCount((prev)=>prev-2);
    //setTest((prev)=>{ return {"topic" : prev.topic-1}});//it actually changes topic but color is removed permanently
    //it is actually updating entire object,
    //to overcome this we use ... operator
    setTest((prev)=>{
      return {...prev,"topic":prev.topic-1};
    });
  }
  function incrementCount(){
    setCount((prev)=>prev+1);
  }

  return (<>
  <button onClick={decrementCount}>-</button>
  <p>{count}{" "}{topic}{" "}{color}</p>
  <button onClick={incrementCount}>+</button>
  </>);
}

export default App
