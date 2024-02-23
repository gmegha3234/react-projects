import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen  grid-rows-[auto_1fr_auto] gap-y-2 bg-yellow-300">
      {/* <div className="grid h-[700px] grid-cols-2 grid-rows-[auto_1fr_auto] gap-y-2 bg-green-400"></div> */}
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll ">
        <main className="mx-auto  max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
