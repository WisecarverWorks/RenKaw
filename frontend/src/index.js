import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
