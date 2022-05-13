import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
import "../css/NotFound.css";
import { BsStars } from "react-icons/bs";

export function NotFound() {
    return (
        <Row className="py-5 px-2" style={{height: "75vh"}}>
            <Col className="d-flex flex-column text-center justify-content-center">
                <BsStars size={75} className="mb-5 not-found__icon"/>
                <h3>
                    Page not found
                </h3>
                <p>
                    Sorry, the page you requested does not exist :(
                </p>
                <HashLink to={"/"} className="mt-4 not-found__link">{"Back to homepage"}</HashLink>
            </Col>
        </Row>
    );
}