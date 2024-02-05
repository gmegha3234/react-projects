import { Outlet, useSearchParams } from "react-router-dom";

export default function Users(){
    const [searchParam,setSearchParam]=useSearchParams();
    const showSearchParam=searchParam.get('filter')==="active";
    return <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
            <button onClick={()=>setSearchParam({filter:"active"})}>Active Users</button>
            <button onClick={()=>setSearchParam({})}>Remove Filters</button>
            {
                showSearchParam? <h2>
                    Showing active users
                </h2>: 
                <h2>Showing all users</h2>

            }
        </div>
    </div>
}