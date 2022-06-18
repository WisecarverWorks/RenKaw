import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/bpp" style={{ textDecoration: "none", color: "white"}}>
            <button type="link" width="auto">Rennie</button>
          </Link>
          <Link to="/assessment" style={{ textDecoration: "none", color: "white"}}>
            <button text-align="left" type="link">Posts</button>
          </Link>
          <Link to="/artviewer" style={{ textDecoration: "none", color: "white"}}>
            <button type="link">Art</button>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b></b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
