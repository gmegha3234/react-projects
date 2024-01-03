import Friend from "./Friend";
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
const FriendList = () => {
    const friends = initialFriends;
    return <ul>
        {friends.map((friend) => {
            return <Friend key={friend.key} friend={friend}></Friend>
        })
        }
        <button className="btn ">Add Friend</button>
    </ul>;
}
export default FriendList;