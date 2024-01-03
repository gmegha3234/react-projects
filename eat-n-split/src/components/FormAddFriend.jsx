import { useState } from "react";
import Button from "./Button";
const FormAddFriend = ({ addFriends }) => {
    const [name, setName] = useState("");
    const [img, setImage] = useState("https://i.pravatar.cc/48");
    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleAddButton() {
        if (!name || !img) return;
        const id = crypto.randomUUIDname;
        const newFriend = {
              name,
            "id": id,
            "image": `${img}?=${id}`,
             balance: 0
        };
        addFriends(newFriend);
        setImage("https://i.pravatar.cc/48");
        setName("");
        
    }
    return <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <div className="inputData">
            <label htmlFor="">💂‍♂️Friend Name </label>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
        </div>
        <div className="inputData">
            <label htmlFor="">📹Image Url</label>
            <input type="text" value={img} onChange={(event) => setImage(event.target.value)} />
        </div>
        <Button onClick={handleAddButton}>Add</Button>

     </form>
}
export default FormAddFriend;