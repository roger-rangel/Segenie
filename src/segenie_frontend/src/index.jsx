import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./Views/WelcomePage";
import NewPortal from "./Views/NewPortal";
import SegenieOptions from "./Views/SegenieOptions/DiscoverTheMetaverse"
import NavProvider from "./components/NavProvider";
import App from "./App";
import '../assets/main.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

const init = async () => {
  root.render(
    <React.StrictMode>
      <NavProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/new-portal" element={<NewPortal />} />
              <Route path="/segenie-options" element={<SegenieOptions />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </NavProvider>
    </React.StrictMode>
  );
};

init();
