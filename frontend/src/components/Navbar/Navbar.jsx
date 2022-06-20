import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          </Link>
        </li>
          {user ? (
            <button onClick={logoutUser}>O</button>
          ) : (
            <button onClick={() => navigate("/login")}>I</button>
          )}
    </div>
  );
};

export default Navbar;
