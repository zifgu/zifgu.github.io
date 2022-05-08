import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HashLink } from 'react-router-hash-link';
import { resumeLink } from "../data/BasicInfo";
import { IoMoon, IoSunny } from "react-icons/io5";
import "../css/Navigation.css";

function ToggleModeButton() {
    // false means light, true means dark
    const [darkMode, setDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        const handlePreferenceChange = (event: MediaQueryListEvent) => setDarkMode(event.matches);

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", handlePreferenceChange);

        return () => mediaQuery.removeEventListener("change", handlePreferenceChange);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        darkMode ?
            <IconButton className="light-mode-btn" icon={<IoSunny size={20}/>} onClick={toggleDarkMode}/> :
            <IconButton className="dark-mode-btn" icon={<IoMoon size={20}/>} onClick={toggleDarkMode}/>
    );
}

function IconButton(props: {className: string, icon: ReactElement, onClick: () => void}) {
    return (
        <div
            className={"nav__icon-btn " + props.className}
            onClick={props.onClick}
        >
            {props.icon}
        </div>
    );
}

export function NavBar() {
    return (
        <Navbar className="nav">
            <span className="nav__title">Title</span>
            <Nav className="ms-auto align-items-center gap-3">
                <Nav.Item>
                    <HashLink className="nav__link" to="/#top">Home</HashLink>
                </Nav.Item>
                <Nav.Item>
                    <HashLink className="nav__link" to="/#about">About</HashLink>
                </Nav.Item>
                <Nav.Item>
                    <HashLink className="nav__link" to="/#projects">Projects</HashLink>
                </Nav.Item>
                <Nav.Item>
                    <a
                        href={resumeLink} target="_blank" rel="noreferrer"
                        className="nav__link"
                    >
                        Resume
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <ToggleModeButton />
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}