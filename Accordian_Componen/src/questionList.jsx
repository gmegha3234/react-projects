/* eslint-disable react/prop-types */
import './index.css';
export default function QuesList({ question, answer, quesId, active, handleClick }) {
    
    return <div className={`quesTab  ${active == quesId ? 'open' : ''}`}
                      id = { quesId }
                     onClick = { handleClick } >
        <h3 >{question}<span style={{ float: "right", fontWeight: "700" }} >{active != quesId ? '+' : '-'}</span></h3>
        <p className={`answer ${active == quesId ? 'active' : ''}`}>{answer}</p>
           </div >
}