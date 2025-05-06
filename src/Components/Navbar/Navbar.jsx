import React, { use } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";
import { FaBriefcase } from "react-icons/fa";
import { AuthContext } from "../../Authentication/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutuser } = use(AuthContext);
  const handleLogOut = () => {
    logOutuser()
      .then(() => {toast.warning('You Logged Out')})
      .catch((error) => toast.error(error.message));
  };
  const links = (
    <>
      <NavLink className="my-1 mx-4 text-[1.1rem]" to="/">
        Home
      </NavLink>
      <NavLink className="my-1 mx-4 text-[1.1rem]" to="/success">
        Success
      </NavLink>
      <NavLink className="my-1 mx-4 text-[1.1rem]" to="/myProfile">
        Profile
      </NavLink>
    </>
  );
  const register = (
    <Link to="/register">
      <button className="btn btn-primary text-white font-bold">Register</button>
    </Link>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md text-center dropdown-content bg-base-100 rounded-box z-1 mt-3 w-48 p-2 shadow"
          >
            {links}
            {!user && <div className="my-4">{register}</div>}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">
          <FaBriefcase /> JOBTRACK
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        <div className="flex items-center navbar-end gap-2">
          <Link to="/myProfile">
            <img
              src={user.photoURL}
              alt=""
              className="h-12 w-12 rounded-full cursor-pointer"
            />
          </Link>
          <button
            onClick={handleLogOut}
            className="btn btn-error text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="navbar-end space-x-2">
          <Link to="/login">
            <button className="btn btn-primary text-white font-bold">
              Login
            </button>
          </Link>
          <div className="hidden lg:block">{register}</div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
