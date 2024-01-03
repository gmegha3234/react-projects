import { useState } from "react"
import Button from "./Button"
export function FormSplitBill({ friend ,onSplitBill}) {
    const [bill, setBill] = useState("");
    const [myExpense, setMyExpense] = useState("");
    const friendBill = bill - myExpense;
    const [whoWillPay, setWhoWillPay] = useState("user");
    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !myExpense) return;
        onSplitBill(whoWillPay === "user" ? friendBill : -myExpense);

    }

    return <form action="" className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {friend.name}</h2>
        <div className="inputData">
            <label htmlFor="">💰 Bill Value</label>
            <input type="text" value={bill}  onChange={(e)=>setBill(Number(e.target.value))}/>
        </div>
        <div className="inputData">
            <label htmlFor="">💵 Your Expenses</label>
            <input type="text" value={myExpense} onChange={(e) =>
                setMyExpense(Number(e.target.value) > bill ? myExpense : Number(e.target.value))} />
        </div>
        <div className="inputData">
            <label htmlFor=""> 👩🏻‍🤝‍🧑🏼 {friend.name}'s expenses</label>
            <input type="text" value={Number(friendBill)}  disabled />
        </div>
        <div className="inputData">
            <label htmlFor="">🤑 Who is paying the bill?</label>
            <select name="" id="" value={whoWillPay} onChange={(e)=>setWhoWillPay(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
         
            </select>
        </div>
        <Button> Split Up </Button>
    </form>
}