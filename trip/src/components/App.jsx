import Logo from "./Logo";
import { Form } from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 15, packed: true },
// ];
function App() {
  const [items, setItems] = useState([]);
  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function deleteItems(id) {
    setItems((items) => items.filter((item)=>item.id !== id));
  }
  function handlePackingItem(id) {
    setItems((items) => items.map((item) => item.id !== id ? item : { ...item, packed: !item.packed }));
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items");
    if(confirmed) setItems([]);
  }
  return (
    <div className="container">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList items={items} onDeleteItem={deleteItems} onUpdateItem={handlePackingItem} clearList={handleClearList}/>
      <Stats items={items} />
    </div>
  )
}

export default App
