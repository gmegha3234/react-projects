export default function Message({ count }) {
    //one way
    // const year = new Date().getFullYear();
    // const month = new Date().getMonth();
    // const date = new Date().getDate();
    // return <p className="message">{count ? `${count} days from` : ""}
    //     Today is {new Date(year, month, date+count).toDateString()}</p>

    //another way
    let date = new Date();
    if (count > 0) date.setDate(date.getDate() + count);
    return <p className="message">{count ? `${count} days from` : ""} Today is {date.toDateString()}</p>
}