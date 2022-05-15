import React, { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HashLink } from 'react-router-hash-link';
import { resumeLink } from "../data/BasicInfo";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import "../css/Navigation.css";

export const darkModeClass: string = "dark";

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
            document.body.classList.add(darkModeClass);
        } else {
            document.body.classList.remove(darkModeClass);
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
            className={"nav__mode-btn " + props.className}
            onClick={props.onClick}
        >
            {props.icon}
        </div>
    );
}

function NavItem(props: PropsWithChildren<any>) {
    return (
        <Nav.Item className="overflow-hidden">
            {props.children}
        </Nav.Item>
    );
}

export function NavBar() {
    // TODO: ideally, dark mode toggle should be outside navbar when collapsed
    return (
        <Navbar className="nav" expand="md">
            <span className="nav__title">Title</span>
            <Navbar.Toggle aria-controls="navbar-nav">
                <FiMenu size={20}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto align-items-center gap-3">
                    <NavItem>
                        <HashLink className="nav__link" to="/#top">Home</HashLink>
                    </NavItem>
                    <NavItem>
                        <HashLink className="nav__link" to="/#about">About</HashLink>
                    </NavItem>
                    <NavItem>
                        <HashLink className="nav__link" to="/#projects">Projects</HashLink>
                    </NavItem>
                    <NavItem>
                        <a
                            href={resumeLink} target="_blank" rel="noreferrer"
                            className="nav__link"
                        >
                            Resume
                        </a>
                    </NavItem>
                    <Nav.Item>
                        <ToggleModeButton />
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}