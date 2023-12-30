import { useState } from "react";

export const Form = () => {
    const [description, setDescription] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
    }
    return <form className="add-form" onClick={handleSubmit}>
        <h3>What do you need for your 😍 trip ? </h3>
        <select name="" id="">
            {Array.from({ length: 20 }, (v, i) => i + 1).map((num) =><option value={num} key={num}>{num}</option>)}
        </select>
        <input type="text" placeholder="item..." value={description} onChange={ (e)=>setDescription(e.target.value)} />
        <button style={{backgroundColor:"aqua"}} >Add</button>
    </form>
}