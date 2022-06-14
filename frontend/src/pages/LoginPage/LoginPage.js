import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import FileUpload from "../../components/fileupload";


const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }}, 
    [isServerError, reset]);
  
  return (
    <div>
      <header>
        <meta name='viewport' content="width=device-width"></meta>
        <meta charset="utf-8"></meta>
        <title>Sign In - Ren's Art</title>
        <meta name="next-head-count" content="3"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/appIcons/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="../../Imgs/Geo.jpg"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="../../Imgs/Geo.jpg"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="../../Imgs/iohk-media-kit/iohk-logo-vector.svg"></link>
        <meta name="theme-color" content="#ffffff"></meta>
        <noscript data-n-css=""></noscript>
      </header>  
       <body>
        <div>
         <div className="main">
          <div>
           <div>
            <div class="SignIn_loginCard_">_</div>
         ```</div>
          `</div>
         </div>
        </div>
       </body>
       <form className="form" onSubmit={handleSubmit}>
        <label>Username:{" "}
         <input type="text" name="username"
          value={formData.username} onChange={handleInputChange}/>
        </label>
        <label>Password:{" "}
         <input type="text" name="password"
          value={formData.password} onChange={handleInputChange}/>
        </label>
        {isServerError ? ( 
        <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button>Login!</button>
        </form>
    </div>
  );
};

export default LoginPage;
