import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-800 p-5 px-4 py-4 text-stone-200 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="font-semibold uppercase text-stone-300 space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
