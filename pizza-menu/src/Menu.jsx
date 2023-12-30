import Pizza from "./Pizza"
import pizzaData from "./data";
console.log(pizzaData);
function Menu() {
    const numOfPizza = pizzaData.length;

    return <main className="menu">
        <h2>Our Menu</h2>
        {numOfPizza > 0 ? <><p>Savor the Flavor: Indulge in Irresistible Pizzas, Delivered Hot and Fresh to Your Doorstep – A Symphony of Tastes in Every Bite!</p>

                           <ul className="pizzas">
                            {  pizzaData.map((pizza) => {return <Pizza key={pizza.name} pizzaObj={pizza}> </Pizza>
                                })
                            }
                           </ul></>: 
                           <p>We are still working on our menu. Please come back later.</p>}

    </main>
}
export default Menu
{/* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="./src/assets/img/pizzas/focaccia.jpg" price={10} />
        <Pizza name="Pizza Margherita" ingredients="Tomato and  mozarella" photoName="./src/assets/img/pizzas/funghi.jpg" price={12} /> */}

// pizza.photoName = `/assets/img${pizza.photoName}`;
// return <Pizza
//     key={pizza.id}
//     name={pizza.name}
//     ingredients={pizza.ingredients}
//     photoName={`/assets/img/${pizza.photoName}`}
// />