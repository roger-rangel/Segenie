import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import CreateBadge from "./components/CreateBadge";
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
              <Route path="/" element={<WelcomePage />} />
              <Route path="/create-badge" element={<CreateBadge />} />     
            </Route>
          </Routes>
        </BrowserRouter>
      </NavProvider>
    </React.StrictMode>
  );
};

init();
