/* eslint-disable react/prop-types */

// function Pizza(props) {
//     console.log(props);
//     if (props.pizzaObj.soldOut) return null;
//     return <li className="pizza">
//         <img src={`/assets/img/${props.pizzaObj.photoName}`} alt="Pizza Spinaci" />
//         <div>
//             <h3>{props.pizzaObj.name}</h3>
//             <p>{props.pizzaObj.ingredients}</p>
//             <span>{props.pizzaObj.price}</span>
//         </div>
//     </li>
// }

//with destructuring
function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null;
    return <li className={`pizza ${pizzaObj.soldOut ? "sold-out" :""}`} >
        <img src={`/assets/img/${pizzaObj.photoName}`} alt="Pizza Spinaci" />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut? "SOLD OUT": pizzaObj.price}</span>
        </div>
    </li>
}
export default Pizza;