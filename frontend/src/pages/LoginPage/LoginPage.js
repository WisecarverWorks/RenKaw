import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";



const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: " ", password: " " };
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
      </header>  
      <body>
         <form className="form" onSubmit={handleSubmit}>
          <label align='center'>Username:{" "}<input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
             </label><label>Password:{" "}<input type="text" name="password" value={formData.password} onChange={handleInputChange}/></label>
              {isServerError ? ( <p className="error">Login failed, incorrect credentials!</p>
              ) : null}
            <Link to="/register">Click to register!</Link>
          <button>Login!</button>
        </form>
      </body>
      <footer>
      </footer>
    </div>
  );
};

export default LoginPage;
