// eslint-disable-next-line react/prop-types
export default function Step({ step, incHandler, decHandler }) {
    return <div className="step">
        <button className="btn" onClick={decHandler}>-</button>
        <p ><strong>Step: {step}</strong></p>
        <button className="btn" onClick={incHandler}>+</button>
    </div>
}