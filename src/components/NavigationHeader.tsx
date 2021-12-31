import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export function NavigationHeader() {
    return (
        <Navbar expand="md" bg="light" variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarContent"/>
                <Navbar.Collapse id="navbarContent"  className="justify-content-center">
                    <Nav defaultActiveKey="home">
                        <Nav.Link eventKey="home">
                            <Link to="/" className="text-reset text-decoration-none">About</Link>
                        </Nav.Link>
                        <Nav.Link eventKey="projects">
                            <Link to="/projects" className="text-reset text-decoration-none">Projects</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}