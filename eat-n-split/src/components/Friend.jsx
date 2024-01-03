
const Friend = ({friend}) => {
    return <li id={friend.id}>
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
        <button >Select </button>
    </li>
}
export default Friend;