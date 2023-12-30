/* eslint-disable react/prop-types */
export default function Order({ closeHour }) {
    return <div className="order">
        <p> {"We're open until " + closeHour}.00 Come visit us or order online</p>
        <button className="btn">Order Now</button>
    </div>
}