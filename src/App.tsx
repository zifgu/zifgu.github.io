import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from "react-router-dom";
import {NavigationHeader} from "./components/NavigationHeader";

function App() {
  return (
      <div>
          <NavigationHeader />
          <Outlet />
      </div>
  );
}

export default App;
