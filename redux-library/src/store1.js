import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;


    // function reducer(state, action) {
//   if (typeof state === "undefined") {
//     state = 0;
//   }

//   if (action.type === "INCREMENT") {
//     return state + action.payload;
//   } else if (action.type === "DECREMENT") {
//     return state - action.payload;
//   } else {
//     return state;
//   }
// }

// const store = createStore(accountReducer);
// const customerStore=createStore(customerReducer);

// store.dispatch({ type: "INCREMENT" ,payload:500});
// console.log(store.getState());
// store.dispatch({type:"DECREMENT",payload:200});
// console.log(store.getState());
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "Buy a car",
//   },
// });
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());



// store.dispatch(deposit(500));
// store.dispatch(withdraw(300));
// store.dispatch(requestLoan(200,"Buy a house"));
// store.dispatch(payLoan());
// store.dispatch(createCustomer("Megha", 101));
// console.log(store.getState());