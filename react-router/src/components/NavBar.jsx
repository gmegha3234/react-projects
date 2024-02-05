import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from './Auth'
export default function NavBar() {
    const navStyle= ({isActive})=>{
        return {
         textDecoration:"none",
         fontWeight:"bold",
         margin:"2px"
        }
    }
    const auth=useAuth();
  return (
    <>
      <nav>
        <NavLink style={navStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navStyle} to="/aboutus">
          About
        </NavLink>
        <NavLink style={navStyle} to="/products">
          Products
        </NavLink>
        <NavLink style={navStyle} to="/profile">
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={navStyle} to="/login">
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
}
