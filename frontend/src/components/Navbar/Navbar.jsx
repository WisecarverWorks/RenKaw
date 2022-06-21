import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
// import LoginPage from '../../pages/LoginPage/LoginPage';
// import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import "./NavBar.css";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div bg="info" variant="dark">
      <h3><small className='text-muted'>Artwork</small>Application v.1</h3>
      <ul>
        <li className="brand">
          {user ? (
            <button onClick={logoutUser}>O</button>
          ) : (
            <button onClick={() => navigate("/login")}>I</button>
          )}
        </li>
      </ul>
       <Link to={<RegisterPage/>} />
    </div>

  );
};
// Our navbar will be primarily for logging in and out. 
export default NavBar;
