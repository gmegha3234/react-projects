/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useKey } from "../customhooks/useKey";
export const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  useKey("Enter",function(){
    if (document.activeElement === inputEl.current) return;
     inputEl.current.focus();
     setQuery("");
  })
  // useEffect(function () {
  
  //   function callback(e) {
  //     if (document.activeElement === inputEl.current) return;
      
  //     if (e.code === "Enter") {
  //       inputEl.current.focus();
  //       setQuery("");
  //     }
  //   }
  //   document.addEventListener("keydown", callback);

  //   return () => document.removeEventListener("keydown", callback);
  // }, [setQuery]);

  //Directly manipulating dom

  // const el = document.querySelector(".box");
  // console.log(el);
  // if(el)
  //  el.style.backgroundColor = "red";
  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
};
