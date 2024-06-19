import { useSelector } from "react-redux";

export default function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return <h1>Welcome, {customer}</h1>;
}
