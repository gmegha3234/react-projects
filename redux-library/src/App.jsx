import "./App.css";
import Customer from "./features/customers/Customer";
import CustomerCreation from "./features/customers/CreateCustomer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
function App() {
  const fullName = useSelector((store) => store.customer.fullName);
  console.log(fullName);
  return (
    <>
      <h1>My Bank</h1>

      {fullName === "" ? (
        <div className="main-container">
          <CustomerCreation />
        </div>
      ) : (
        <>
          <BalanceDisplay />
          <div className="main-container">
            <div className="account-container">
              <Customer />
              <AccountOperations />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
