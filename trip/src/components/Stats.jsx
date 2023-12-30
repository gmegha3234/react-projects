/* eslint-disable react/prop-types */
const Stats = ({items}) => {
     
    if (!items.length)
        return <footer className="stats">Start adding some items to your packing list ✈</footer>;
    const countItems = items.length;
    const packedItems = items.filter((v) => v.packed).length;
    const percentage = Math.round((packedItems / countItems) * 100);
    return <footer className="stats">
        <em> You have {countItems} items in your list, and you already packed {packedItems} ({percentage}%) </em>
    </footer>
}
export default Stats