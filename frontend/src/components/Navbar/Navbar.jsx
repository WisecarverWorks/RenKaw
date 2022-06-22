import React from "react";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Button } from "react-bootstrap";
// import RegisterPage from "../../pages/RegisterPage/RegisterPage";
// import LoginPage from '../../pages/LoginPage/LoginPage';
// import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import "./NavBar.css";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <h2 ><small >Artwork</small>Application v.1</h2>
      <ul>
        <li className="brand">
          {user ? (
            <Button onClick={logoutUser}>Logout</Button>
            ) : (
            <Button onClick={() => navigate("/login")}>I</Button>
            )}
        </li>
            <Button onClick={() => navigate("/admin")}>Admin</Button>
            <Button onClick={() => navigate("/assessment")}>Assessments</Button>
            <Button onClick={() => navigate("/bulletin")}>Bulletin</Button>
            <Button onClick={() => navigate("/home")}>Home</Button>
        </ul>
    </div>

  );
};
// Our navbar will be primarily for logging in and out. 
export default NavBar;
