import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Views
import App from './App';
import NewPortal from './Views/NewPortal/NewPortal';
import WelcomePage from './Views/WelcomePage/WelcomePage';
import SegenieOptions from './Views/SegenieOptions/SegenieOptions';
import Web3Authorization from './Views/Web3Authorization/Web3Authorization';

// CSS
import '../assets/main.css';
import '@connect2ic/core/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//adding Main UI
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" exact element={<WelcomePage />} />
        <Route path="/portal" exact element={<NewPortal />} />
        <Route path="/options" element={<SegenieOptions />} />
        <Route path="/web3authorization" element={<Web3Authorization />} />
      </Route>
    </Routes>
  </Router>
);
