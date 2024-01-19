import { useState } from "react";
export const Search = ()=>{
    const [search,setSearch] = useState('');
    return (
      <div className="search-box">
        <input type="text" value={search} placeholder="Search movies" onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    );
}