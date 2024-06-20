import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const initialState={balance: 0, loan:0,status: false,loanStatus:false};
function reducer(state,action){
    if(!state.status && action.type !== "open") return state;
    switch(action.type){
      case "changeDropdown":
        return {...state,:state.balance+action.payload,status:true}
      case "deposit":
        return {...state, balance: state.balance + action.payload};
      case "withdraw":
        return{...state,balance:state.balance - action.payload};
      case "loan":
        if(state.loan > 0) return state;
        return {
          ...state,
          balance: state.balance + action.payload,
          loan: action.payload,
          loanStatus: true,
        };
      case "payloan":
        return {
          ...state,
          balance: state.balance - state.loan,
          loan:0,
          loanStatus: false
        };
      
      case "close":
        if(state.loan > 0 || state.balance !== 0) return state;
        return initialState;
        
    }
}

function App() {
  const [{balance,loan,status},dispatch]=useReducer(reducer,initialState);
  
  return (
    <div className="app">
      <header className="header">useReducer Bank Account</header>
      <main className="main">
        <p className="description">Balance: {balance}</p>
        <p className="description">Loan: {loan}</p>
        <button
          className="btn"
          disabled={status}
          onClick={() => {
            dispatch({ type: "open", payload: 500 });
          }}
        >
          Open Account
        </button>
        <button
          className="btn"
          disabled={!status}
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
        >
          Deposit 150
        </button>
        <button
          className="btn"
          disabled={!status}
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
        >
          Withdraw 50
        </button>
        <button
          className="btn"
          disabled={!status}
          onClick={() => {
            dispatch({ type: "loan", payload: 5000 });
          }}
        >
          Request a loan of 5000
        </button>
        <button
          className="btn"
          disabled={!status}
          onClick={() => {
              dispatch({ type: "payloan"});
            
          }}
        >
          Pay loan
        </button>
        <button
          className="btn"
          disabled={!status}
          onClick={() => dispatch({ type: "close" })}
        >
          Close Account
        </button>
      </main>
    </div>
  );
}

export default App
