// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BPPRenniePage from "./pages/BPPRenniePage/BPPRenniePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AssessmentPage from "./pages/AssessmentPage/AssessmentPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/" exact
          element={
            <PrivateRoute>
              <HomePage />
              <BPPRenniePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bpp" element={<BPPRenniePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
