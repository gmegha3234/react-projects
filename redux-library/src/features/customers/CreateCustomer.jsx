import { useState } from "react";
import { useDispatch } from "react-redux";
import {createCustomer} from "./CustomerSlice";

export default function CustomerCreation() {
const [fullName,setFullName]=useState("");
const [nationalId,setNationalId]=useState("");
const dispatch=useDispatch();
function handleClick(){
    if(!fullName || !nationalId) return;
    console.log(createCustomer);
  dispatch(createCustomer(fullName, nationalId));
  setFullName("");
  setNationalId("");
}
  return (
    <div className="create-customer">
      <h2>Create new customer</h2>
      <div className="inner-container">
        <label>Customer Full Name </label>
        <input
          type="text"
          name="fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="inner-container">
        <label>Nationality ID </label>
        <input
          type="text"
          name="nationalId"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Create new customer</button>
    </div>
  );
}
