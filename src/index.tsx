import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import {About} from "./pages/About";
import {NotFound} from "./pages/NotFound";
import {ProjectPage} from "./pages/ProjectPage";
import {ProjectsList} from "./pages/ProjectsList";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<About />} />
                  <Route path="projects">
                      <Route index element={<ProjectsList />} />
                      <Route path=":projectName" element={<ProjectPage />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
