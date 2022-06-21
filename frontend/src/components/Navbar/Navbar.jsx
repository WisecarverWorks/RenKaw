import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
// import LoginPage from '../../pages/LoginPage/LoginPage';
// import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          </li>
          </ul>v.1
          <ul>Application </ul>
          <ul>
          <li>
          {user ? (
            <button onClick={logoutUser}>O</button>
          ) : (
            <button onClick={() => navigate("/login")}>I</button>
          )}
        </li>
      </ul>
      <select className="dropdown">
        <button class="dropbtn">Dropdown</button>
         classs="dropdown-content">
          <a href="../../pages/HomePage">Home</a>
          <a href="../../pages/HomePage">Home</a>
          <a href="../../pages/HomePage">Home</a>
        </select>
    </div>

  );
};
// Our navbar will be primarily for logging in and out. 
export default Navbar;
