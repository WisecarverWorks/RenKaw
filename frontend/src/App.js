// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import BulletinPage from "./pages/BulletinPage/BulletinPage";
import AssessmentPage from "./pages/AssessmentPage/AssessmentPage";
// Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import Bulletin from "./components/Bulletin/Bulletin";
// import DisplayBulletins from "./components/DisplayBulletins/DisplayBulletins";
// import CreateBulletin from "./components/CreatePost/CreateBulletin";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function App() {
  const { t,i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div className="container-fluid">
      <header className="App-header">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <Trans i18nKey="desctiption.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
      </header>
      <NavBar />
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/bulletin" element={<BulletinPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
