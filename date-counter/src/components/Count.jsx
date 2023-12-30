// eslint-disable-next-line react/prop-types
export default function Count({ count,incHandler,decHandler }) {
    return <div className="count">
        <button className="btn" onClick={decHandler}>-</button>
        <p><strong> Count: {count}</strong>
           </p>
        <button className="btn" onClick={incHandler}>+</button>
    </div>
}