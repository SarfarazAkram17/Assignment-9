import React from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router';
import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
    const links = <>

        <NavLink className='my-1 mx-4 text-[1rem]' to='/'>Home</NavLink>

        <NavLink className='my-1 mx-4 text-[1rem]' to='/something'>Home</NavLink>

        <NavLink className='my-1 mx-4 text-[1rem]' to='/blog'>Blog</NavLink>

        <NavLink className='my-1 mx-4 text-[1rem]' to='/something3'>Home</NavLink>
  
    </>
    return (
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl"><FaBriefcase /> JOBTRACK</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}

    </ul>
  </div>
  <div className='navbar-end space-x-2'>

<Link to='/login'><button className="btn btn-primary text-white font-bold">Login</button></Link>
<Link to='/register'><button className="btn btn-primary text-white font-bold">Register</button></Link>
  </div>
</div>
    );
};
export default Navbar;