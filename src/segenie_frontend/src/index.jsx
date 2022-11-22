import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./Views/WelcomePage/WelcomePage";
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
        {/* Problem with Route Configuration persists, App displays white screen with no errors on console */}
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<WelcomePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </NavProvider>
    </React.StrictMode>
  );
};

init();
