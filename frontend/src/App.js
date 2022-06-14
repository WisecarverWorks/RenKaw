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
import RennieDatabase from "./pages/RennieDatabase/RennieDatabase";
import RenPortfolioPage from "./pages/RenPortfolioPage/RenPortrfolioPage";



function App() {

    return (
      <div>
        <Navbar />
        <title>Ren's Art</title>
        <h1>Ren's Art</h1>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute >
                <RennieDatabase />
              </PrivateRoute>
             }
           />
           <Routes>
            <Route 
              path="/"
              element={
              <PrivateRoute >
                <RenPortfolioPage />
              </PrivateRoute>
              }
            />
           </Routes>
          <Route path="/login" element={<LoginPage />} />
           <Route path="/register" element={<RegisterPage />} />
           <Route path="/renniedatabase" element={<RennieDatabase />} />
           <Route path="/renportfolio" element={<RenPortfolioPage />} />
         </Routes>
        <Footer />
       </div>
  );
}

export default App;
