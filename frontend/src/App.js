// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// Component Imports
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RennieDatabase from "./pages/RennieDatabase/RennieDatabase";
import RenPortfolioPage from "./pages/RenPortfolioPage/RenPortrfolioPage";



function App() {

    return (
      <div>
        <title>Ren's Art</title>
        <h1>Ren's Art</h1>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute >
                <RennieDatabase />
                <RenPortfolioPage />
              </PrivateRoute>
             }
           />
           <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
         </Routes>
        <Footer />
       </div>
  );
}

export default App;
