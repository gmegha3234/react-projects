import Order from "./Order";

// const Footer = () => React.createElement('footer', null, "We're currently open!");
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className='footer'>
        {isOpen ? <Order closeHour= {closeHour} />
            : <p>We are happy to welcome you between {openHour}.00 and {closeHour}.00 </p>}
         </footer>
}
export default Footer;

// if (hour >= openHour && hour <= closeHour) {
//     alert("We're currently open");
// }
// else {
//     alert("Sorry, we're closed");
// }
// { new Date().toLocaleTimeString() }. We're currently open