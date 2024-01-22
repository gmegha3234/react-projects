import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("render");
  useEffect(() => {
    console.log("hey");
  }, [resourceType]); // If resourceType remain same, then it is not called

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("useeffect cleaned");
    };
  }, [resourceType]);

  useEffect(() => {
    //we are attaching an event listener to window in start
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <p>Window Width : {windowWidth}</p>
      </div>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <div>
        <h1>{resourceType}</h1>
        {items.map((item) => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
}

export default App;
