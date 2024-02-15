import { useContext } from "react";
import { usePosts } from "./PostContext";
export default function Header({children}) {
 const { clearPost } = usePosts();
  return (
    <header className="header">
      <h1>
        <span>⚛️</span>My Blog
      </h1>
      {children}
      <button className="btn" onClick={clearPost}>
        Clear posts
      </button>
    </header>
  );
}