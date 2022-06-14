import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { VechaiProvider, Button } from "@vechaiui/react";
import "./Navbar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <l className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          </Link>
        </l>
        <l>
          {user ? (
            <VechaiProvider>
              <Button onClick={logoutUser}>Logout</Button>
            </VechaiProvider>
          ) : (
            <VechaiProvider>
              <Button onClick={() => navigate("/login")}>Login</Button>
              <Button onClick={() => navigate("/renniedatabase")}>Rennie</Button>
            </VechaiProvider>
          )}
        </l>
      </ul>
    </div>
  );
};

export default Navbar;
