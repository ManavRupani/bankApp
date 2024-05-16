import React from "react";
import Logo from "./Assesets/td-bank-logo-vector.svg";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Navbar = ({ balance }) => {
  return (
    <nav className="navbar navbar-expand-lg custom">
      <div className="container text-info">
        <Link className="navbar-brand " to="/">
          <img src={Logo} alt="logo"  height="50" className="d-inline-block align-top" />
        </Link>
        {/* <div className="navbar-text ml-auto text-white">
          <h5 className="text-white">Balance: {balance}</h5>
        </div> */}
        <div className="navbar-nav ml-auto">
          <Link to="/login" className=" ml-auto  mx-2 navTEXT">
          Login
          </Link>
          <Link to="/login" className=" ml-auto  navTEXT">
            Sign-Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;