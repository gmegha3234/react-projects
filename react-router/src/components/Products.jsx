import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Products() {
  return (
    <>
      <input type="search" placeholder="Search Products" />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet></Outlet>
      <div>
        <button>Active User</button>
        <button>Reset Filter</button>
      </div>
    </>
  );
}
