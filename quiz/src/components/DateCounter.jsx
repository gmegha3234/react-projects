import { useReducer} from "react";
 const initialState = { text: 0, step: 1 };
function reducer(state, action) {
  console.log(state, action);
  //    if(action.type=="inc") return state+action.payload;
  //     if (action.type == "dec") return state - action.payload;
  //      if (action.type == "setText" || action.type == "clear")
  //        return action.payload;
  switch (action.type) {
    case "inc":
      return { ...state, text: state.text + state.step };
    case "dec":
      return { ...state, text: state.text - state.step };
    case "setText":
    
      return { ...state, text: action.payload };
    case  "clear":
      return initialState;
    case "setStep":
        return {...state,step:action.payload
}
    default:
      throw new Error("Unknown value");
  }
}
export default function DateCounter() {
 
 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { text, step } = state;
  const date = new Date();
  date.setDate(date.getDate() + text);
  const dateOutput = date.toDateString();

  function handleIncrement() {
    dispatch({ type: "inc", payload: 1 });
  }
  function handleDecrement() {
    dispatch({ type: "dec", payload: 1 });
  }
  return (
    <div className="date-counter">
      <div className="slider">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: Number(e.target.value) })
          }
          id="myRange"
        ></input>
        <span>{step}</span>
      </div>
      <div className="counter">
        <button onClick={() => handleDecrement()}>-</button>
        <input
          type="text"
          value={text}
          onChange={(e) =>
            dispatch({ type: "setText", payload: Number(e.target.value) })
          }
        />
        <button onClick={() => handleIncrement()}>+</button>
      </div>
      <div className="result">{dateOutput}</div>
      <button
        type="reset"
        className="reset-btn"
        onClick={() => dispatch({ type: "clear"})}
      >
        Reset
      </button>
    </div>
  );
}
