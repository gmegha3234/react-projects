import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="bg-pizza flex items-center justify-between border-b-2 border-stone-700 px-4 py-8 uppercase sm:px-6 ">
      <Link to="/" className="text-[22px] tracking-[5px]">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
