/* eslint-disable react/prop-types */
export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <p>{numQuestions} questions to test your react mastery</p>
      <button className="start-btn" onClick={() => dispatch({type: "start"})}>
        Let's start
      </button>
    </div>
  );
}