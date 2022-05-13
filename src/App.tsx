import React, { PropsWithChildren, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <HashRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path="projects/:projectId" element={<ProjectPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </ScrollToTop>
        </HashRouter>
    );
}

export default App;

function ScrollToTop(props: PropsWithChildren<any>) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return props.children;
}