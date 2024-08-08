import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user);
  console.log(logOut);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("handle logOut is working"))
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addPotteryCeramics">Add Pottery-and-Ceramics</NavLink>
      </li>
      <li>
        <NavLink to="/myPotteryCeramics">My Pottery-and-Ceramics</NavLink>
      </li>
      <li>
        {/* <Link to="/aboutUs">About Us</Link> */}
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-green-700 text-slate-50">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-56 p-2 shadow text-lg"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            src="JS ceramics.jpeg"
            alt=""
            srcset=""
            className="w-20 h-10 rounded-full ml-2"
          />{" "}
          JS Pottery & Ceramics Store
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal pl-5 ml-20 text-lg">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="text-sm text-orange-200">{user.email}</span>
            <Link className="btn btn-ghost text-xl" onClick={handleLogOut}>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost text-xl">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
