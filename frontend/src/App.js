// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Axios import 
// import axios from 'axios';
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import UploadFile from "./components/UploadFile/UploadFile";
import axios from "axios";
// import React, {Component}  from "react";

function App() {
  const getQuote = () => {
    axios.get('http://localhost:8000/api/ren/').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PortfolioPage />
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/uploadfile" element={<UploadFile />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
