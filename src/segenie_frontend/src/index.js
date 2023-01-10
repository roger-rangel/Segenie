/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Views
import App from './App';
import Dashboard from './Views/Dashboard/Dashboard';
import NewPortal from './Views/NewPortal/NewPortal';
import WelcomePage from './Views/WelcomePage/WelcomePage';
import UserSettings from './Views/UserSettings/UserSettings';
import Documentation from './Views/Documentation/Documentation';
import SegenieOptions from './Views/SegenieOptions/SegenieOptions';
import Web3Authorization from './Views/Web3Authorization/Web3Authorization';

import "@connect2ic/core/style.css"
import { createClient } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import { defaultProviders } from "@connect2ic/core/providers"
import RequireWeb3Auth from './Views/Web3Authorization/RequireWeb3Auth/RequireWeb3Auth';

// CSS
import '../assets/main.css';
import '@connect2ic/core/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = createClient({
  providers: defaultProviders,
})

root.render(
  // <Connect2ICProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/options" element={<SegenieOptions />} />
          {/* <Route path="/auth" element={<Web3Authorization />} /> */}
          <Route path="/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </Router>
   ,{/* </Connect2ICProvider> */}
);
