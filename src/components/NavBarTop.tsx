import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import React from "react";
import {HiOutlineMenu} from "react-icons/hi";
import {myName, resumeLink} from "../data/basic-info";
import "../css/navbar-top.css"

export function NavBarTop() {
    return (
        <Navbar expand="sm" bg="white" variant="light" role="navigation" className="border-bottom">
            <Navbar.Brand className="fw-light mx-sm-5 mx-2">
                {myName}
            </Navbar.Brand>
            <Navbar.Toggle className="mx-2" aria-controls="navbarContent">
                <HiOutlineMenu/>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarContent" className="justify-content-end px-2">
                <Nav>
                    <NavbarLink eventKey="home">
                        <RouteLink route="/" text="Home" />
                    </NavbarLink>
                    {/*<NavbarLink eventKey={"about"}>*/}
                    {/*    <RouteLink route={"/about"} text={"About"} />*/}
                    {/*</NavbarLink>*/}
                    <NavbarLink eventKey="projects">
                        <RouteLink route="/projects" text="Projects" />
                    </NavbarLink>
                    <NavbarLink eventKey="resume">
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="top-navbar-link">
                            Resume
                        </a>
                    </NavbarLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function RouteLink(props: { route: string, text: string }) {
    return (
        <Link to={props.route} className="top-navbar-link">
            {props.text}
        </Link>
    );
}

interface NavbarLinkProps extends React.PropsWithChildren<any> {
    eventKey: string,
}

function NavbarLink(props: NavbarLinkProps) {
    return (
        <Nav.Item as="span" className="mx-2">
            {props.children}
        </Nav.Item>
    )
}
