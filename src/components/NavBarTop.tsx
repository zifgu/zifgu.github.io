import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import React from "react";
import Col from "react-bootstrap/Col";
import {HiOutlineMenu} from "react-icons/hi";
import {resumeLink} from "../data/basic-info";

export function NavBarTop() {
    return (
        <Navbar expand="sm" bg="light" variant="light">
            <Col>
                <Navbar.Toggle className="mx-2" aria-controls="navbarContent">
                    <HiOutlineMenu/>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarContent" className="justify-content-center">
                    <Nav defaultActiveKey="home">
                        <RouterNavbarLink eventKey={"home"} route={"/"} text={"Home"} />
                        <RouterNavbarLink eventKey={"about"} route={"/about"} text={"About"} />
                        <RouterNavbarLink eventKey={"projects"} route={"/projects"} text={"Projects"} />
                        <Nav.Link eventKey="resume"
                                  active={false}
                                  className="text-decoration-none mx-2"
                                  href={resumeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                        >
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>
        </Navbar>
    );
}

function RouterNavbarLink(props: {eventKey: string, route: string, text: string}) {
    return (
        <Nav.Link eventKey={props.eventKey} className="mx-2">
            <Link to={props.route} className="text-reset text-decoration-none">
                {props.text}
            </Link>
        </Nav.Link>
    );
}