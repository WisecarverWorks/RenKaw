// General Imports
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'react-bootstrap';

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BuisnessPortfolioPage from './pages/BuisnessPortfolioPage/BuisnessPortfilioPage';
import AssessmentPage from './pages/AssessmentPage/AssessmentPage';
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import './Images/Gif';
import './Images/psych';

function App() {

  return (
    <div id="root">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/bpp" element={<BuisnessPortfolioPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
