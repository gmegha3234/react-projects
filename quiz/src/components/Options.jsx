/* eslint-disable react/prop-types */
export default function Options({ question, answer, dispatch }) {
    const hasAnswered= answer!==null;
    console.log(hasAnswered);
  return (
    <div className="options">
      {question.options.map((opt, index) => (
        <button
          key={opt}
          className={`option-btn 
           ${answer === index ? " answer" : ""}
           ${
             hasAnswered?(index === question.correctOption ? " correct" : " wrong"):""
               
           }
           `}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
