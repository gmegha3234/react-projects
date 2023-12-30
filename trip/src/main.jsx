import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'

//Derived State
// function Test() {
//   const [items, setItems] = React.useState([]);
//   const sum = items.reduce((acc, v) => acc + v, 0);

//   return <div>
//     {
//       items.map(i => <p key={i}>{ i }</p>)
//     }
//     <button onClick={() => setItems(prev => [...prev, Math.round(Math.random() * 10)])}>
//       {`Add(${sum})`}
//     </button>
//   </div>
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
