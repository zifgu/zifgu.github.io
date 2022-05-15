import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Global.css";
import "../css/Footer.css";
import { getSocials, SocialMedia } from "../data/SocialMedia";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <Row className="footer py-3">
            <Col>
                <div className="my-5 icon-container footer__icon-container">
                    {
                        getSocials().map((socialMedia: SocialMedia) => {
                            return (
                                <FooterIcon
                                    key={socialMedia.site}
                                    as={socialMedia.icon}
                                    link={socialMedia.link}
                                    size={25}
                                />
                            );
                        })
                    }
                </div>
                <p className="footer__acknowledgments">
                    <Link to={"/attribution"} className="footer__attribution-link">Attributions</Link>
                    {" | Copyright "}
                    <span className="fs-5">&copy;</span> 2021 Floria Gu.
                </p>
            </Col>
        </Row>
    );
}

function FooterIcon({as, link, ...props}: any) {
    const Component = as;

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Component {...props}/>
        </a>
    );
}