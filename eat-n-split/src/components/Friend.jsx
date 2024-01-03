/* eslint-disable react/prop-types */
import Button from "./Button";
const Friend = ({ friend, onSelection, selectedfriend }) => {
    const isSelected = friend.id == selectedfriend?.id;

    return <li id={friend.id}
        className={isSelected ? "selected-list" : ""}
    >
                    <img src={friend.image} alt="" />
                    <div className="detail">
                        <h4>{friend.name}</h4>
                        {friend.balance < 0 && <p className="red">
                            You owe {friend.name} ${Math.abs(friend.balance)}
                        </p>}
                        {friend.balance > 0 && <p className="green">
                            {friend.name} owe me ${friend.balance}
                        </p>}
                        {friend.balance === 0 && <p>
                            You and {friend.name} are even
                        </p>}

                    </div>
        <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"} </Button>
    </li>
}
export default Friend;