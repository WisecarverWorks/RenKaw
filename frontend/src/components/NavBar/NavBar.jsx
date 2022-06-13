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
        <ol className="brand">
          <Link to="/portfolio" style={{ textDecoration: "none", color: "white" }} />
          <b>Rennie Tillis Artwork</b>
        </ol>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}

    </div>
  );
};

export default Navbar;
