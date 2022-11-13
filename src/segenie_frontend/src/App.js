/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
// This new React feature (<Outlet />) is not working correctly, still have to import React into components, needs to be fixed later on
const App = () => <Outlet />;

export default App;