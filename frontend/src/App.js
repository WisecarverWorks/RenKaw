// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// Component Imports
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import RennieDatabasePage from "./pages/RennieDatabasePage/RennieDatabasePage";
import RenPortfolioPage from "./pages/RenPortfolioPage/RenPortrfolioPage";


function App() {

    return (
      <div>
        <Navbar />
        <title>Ren's Art</title>
        <h1>Ren's Art</h1>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>} 
            /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/portfolio" element={<RenPortfolioPage />} />
          <Route path="/database" element={<RennieDatabasePage />} />
        </Routes>
        <Footer />
       </div>
  );
}

export default App;

