import { useState } from "react";

export const Form = ({ onAddItems }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { id: Date.now(), description,quantity,packed: false };
        setDescription("");
        setQuantity(1);
        onAddItems(newItem);
        
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip ? </h3>
        <select name="" id="" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (v, i) => i + 1).map((num) =><option value={num} key={num}>{num}</option>)}
        </select>
        <input type="text" placeholder="item..." value={description} onChange={ (e)=>setDescription(e.target.value)} />
        <button style={{backgroundColor:"aqua"}} >Add</button>
    </form>
}