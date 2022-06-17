import React from "react";
import { useContext } from "react";
import { useNavigate, Link, } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { VechaiProvider, Button } from "@vechaiui/react";
import "./Navbar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const { artwork } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <l className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          </Link>

          <Link to="/database" style={{ textDecoration: "none", color: "white"}}>
          </Link>
          {user ? (
              <VechaiProvider>
              <Button onClick={logoutUser}>Logout</Button>
            </VechaiProvider>
          ) : (
              <VechaiProvider>
              <Button onClick={() => navigate("/login")}>Login</Button>
            </VechaiProvider>
          )}
          </l>

          {artwork ?  (
              
              <button>Portfilio</button>
              
              ) : (
            <VechaiProvider>
              <Button onClick={() => navigate("/portfolio")}>Portfilio</Button>
            </VechaiProvider>
          )}
          {artwork ? (
              
              <button>Database</button>
              
              ) : (
              <Button onClick={() => navigate("/database")}>Database</Button>
          )}
          {artwork ? (
              
              <button>Home</button>
              
              ) : (
                  <Button onClick={() => navigate("/home")}>Home</Button>
                  )}
      </ul>
    </div>
  );
};

export default Navbar;
