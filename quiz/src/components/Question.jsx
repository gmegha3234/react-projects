import Options from "./Options";
export default function Question({question,dispatch,answer}){
    return (
      <div className="question-div">
        <h2 className="question">{question.question}</h2>
          <Options question={question} answer={answer} dispatch={dispatch}></Options>
      </div>
    );
}