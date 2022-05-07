import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";

function App() {
    // TODO: scroll restoration
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="projects/:projectId" element={<ProjectPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
