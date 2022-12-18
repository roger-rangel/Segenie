/* eslint-disable no-unused-vars */
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


// import * as counter from "canisters/counter"
// import { createClient } from "@connect2ic/core"
import { Connect2ICProvider } from '@connect2ic/react';
import { InternetIdentity } from '@connect2ic/core/providers';
import NavProvider from './components/NavProvider/NavProvider';
import Web3AuthProvider from './components/Web3AuthProvider/Web3AuthProvider';
import RequireWeb3Auth from './Views/Web3Authorization/RequireWeb3Auth/RequireWeb3Auth'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Connect2ICProvider providers={[InternetIdentity]}>
    <Web3AuthProvider>
      <NavProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" exact element={<WelcomePage />} />
              <Route 
                  path="/portal" 
                  exact element={
                    <RequireWeb3Auth>
                      <NewPortal />
                    </RequireWeb3Auth>
                } 
              />
              <Route path="/options" element={<SegenieOptions />} />
              <Route path="/auth" element={<Web3Authorization />} />
            </Route>
          </Routes>
        </Router>
      </NavProvider>
    </Web3AuthProvider>
  </Connect2ICProvider>
);
