import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./Views/WelcomePage";
import CreateBadge from "./Views/CreateBadge";
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
              //Using "/" endpoint for development purposes. Can't make routes work at the moment, small bug that needs to be fixed
              <Route path="/"element={<CreateBadge />} />
              //same bug as above, can't make other paths work using the new React Route V6 version
              <Route path="/welcome"element={<WelcomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NavProvider>
    </React.StrictMode>
  );
};

init();
