/* eslint-disable react/prop-types */
export default function FinishScreen({points,maxPossiblePoints,highscore,dispatch}){
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if(percentage === 100) emoji="🥇"
    if(percentage >=80 && percentage < 100) emoji="🎉"
    if(percentage >=50 && percentage < 80)  emoji="🙂"
    if(percentage >=0 && percentage <50) emoji="😐"
    if(percentage === 0) emoji="🤦‍♂️"
     return (
       <div className="finish">
         <div className="result-display">
           <p>
             <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
             {maxPossiblePoints} ({Math.ceil(percentage)}%)
           </p>
         </div>
         <p style={{ textAlign: "center", marginTop: "10px" }}>
           Highscore : {highscore} points
         </p>
         <button
           className="nextBtn"
           onClick={() => dispatch({ type: "restart" })}
         >
           Restart
         </button>
       </div>
     );
}