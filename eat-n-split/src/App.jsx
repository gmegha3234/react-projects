import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import { FormSplitBill } from "./components/FormSplitBill";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleAddFriendButton() {
    setShowAddFriend((show) => !show);
  }
  function addFriends(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }
  function handleSelectFriend(friend) {
    setSelectedFriend((current) => current?.id == friend?.id ? null : friend);
    setShowAddFriend(false);
    // setSelectedFriend((cur) => {
    //   cur.id === friend.id ? null : friend;
    // });
  }
  function handleSplitBill(value) {
    
    // setFriends((friends) => friends.map((f) => {
    //   return f.id == selectedFriend?.id ? {...f, "balance": f.balance + value } : f;
    // }));
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} selectedfriend={selectedFriend} onSelection={handleSelectFriend}></FriendList>
        {showAddFriend && <FormAddFriend addFriends={addFriends} ></FormAddFriend>}
        <Button onClick={handleAddFriendButton}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      
      <div className="clas">
        {selectedFriend && <FormSplitBill key={selectedFriend.id} friend={selectedFriend} onSplitBill={handleSplitBill}></FormSplitBill>} 
      </div>
    </div>
  )
}

export default App
