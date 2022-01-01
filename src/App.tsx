import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from "react-router-dom";
import {NavBarTop} from "./components/NavBarTop";
import {Footer} from "./components/Footer";

function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
          <NavBarTop />
          <Outlet />
          <Footer />
      </div>
  );
}

export default App;
