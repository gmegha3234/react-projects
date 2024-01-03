import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedfriend }) => {
    return <ul>
        {friends.map((friend) => {
            return <Friend key={friend.id}
                friend={friend}
                onSelection={onSelection}
                selectedfriend={selectedfriend}>
                
                </Friend>
        })
        }

    </ul>;
}
export default FriendList;