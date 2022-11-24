import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from "./Views/WelcomePage/WelcomePage";
import NewPortal from "./Views/NewPortal";
import SegenieOptions from "./Views/SegenieOptions/SegenieOptions"
import NavProvider from "./components/NavProvider";
import App from "./App";
 import '../assets/main.css'

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(
  <Router>
    <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" exact element={<WelcomePage />} /> 
      <Route path="/portal" element={<NewPortal />} /> 
      <Route path="/options" element={<SegenieOptions />} /> 
      </Route> 
    </Routes>
  </Router>
);