import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import { FormSplitBill } from "./components/FormSplitBill";
function App() {
  

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList></FriendList>
        <button>hey</button>
        <FormAddFriend></FormAddFriend>
      </div>
      
      <div className="clas">
         <FormSplitBill></FormSplitBill>
      </div>
    </div>
  )
}

export default App
