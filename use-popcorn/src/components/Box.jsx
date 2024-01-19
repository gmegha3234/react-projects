/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Box({children}){
    const [isOpen,setIsOpen]= useState(true);
    return (
      <div className="box">
        <button className="main-btn" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "+" : "- "}</button>
        {isOpen && children}
      </div>
    );
}