export default function NextButton({dispatch, answer,index,numQuestions}){
    if(answer === null) return null;
    if(index<numQuestions-1){
        return <button className="nextBtn"
                onClick={()=>dispatch({type: "nextQuestion"})}>
                    Next
                </button>
    }
    if (index === numQuestions - 1) {
      return (
        <button
          className="nextBtn"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      );
    }
}