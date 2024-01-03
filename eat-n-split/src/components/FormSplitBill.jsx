export function FormSplitBill() {
    return <form action="" className="form-split-bill">
        <h2>Split a bill with Clarke</h2>
        <div className="inputData">
            <label htmlFor="">💰 Bill Value</label>
            <input type="text" />
        </div>
        <div className="inputData">
            <label htmlFor="">💵 Your Expenses</label>
            <input type="text" />
        </div>
        <div className="inputData">
            <label htmlFor=""> 👩🏻‍🤝‍🧑🏼 X's expenses</label>
            <input type="text" disabled />
        </div>
        <div className="inputData">
            <label htmlFor="">🤑 Who is paying the bill?</label>
            <select name="" id="">
                <option value="user">You</option>
                <option value="friend">X</option>
         
            </select>
        </div>
        <button className="btn submit-btn">Split Up</button>
    </form>
}