// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// Component Imports
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RennieDatabase from "./pages/RennieDatabase/RennieDatabase";




function App() {

    return (
      <div>
       <header>Ren's Art</header>
       <title>Ren's Art</title>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                  <RennieDatabase />
                  <HomePage />
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
