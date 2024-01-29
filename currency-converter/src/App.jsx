import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState();
  const host = "api.frankfurter.app";

  useEffect(
    function () {
      if (!number) {
        setResult("");
        return;
      }
      const controller = new AbortController();
      async function currencyConverter() {
        try {
          const res = await fetch(
            `https://${host}/latest?amount=${number}&from=${fromCurrency}&to=${toCurrency}`,{signal:controller.signal}
          );
          const data = await res.json();
          console.log(data);
          // data?.rates?.[toCurrency] && setResult(data.rates[toCurrency]);
          data.rates ? setResult(data.rates[toCurrency]) : setResult("");
        } catch (err) {
          console.log(err);
        }
      }
      currencyConverter();
       return function(){
         controller.abort();
       }
    },
    [number, fromCurrency, toCurrency]
  );

  return (
    <main className="main">
      <header>
        <h1>Currency Converter</h1>
      </header>

      <div className="converter">
        <div>
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={number}
            onChange={(e) => {
              const { value } = e.target;
              if (/^[0-9]*$/.test(value)) {
                setNumber(value);
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="">From</label>
          <select
            name=""
            id=""
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <div>
          <label htmlFor="">To</label>
          <select
            name=""
            id=""
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      <div className="result">
        <p>Result</p>
        <p>{result}</p>
      </div>
    </main>
  );
}

export default App;
