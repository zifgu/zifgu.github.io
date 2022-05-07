import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Global.css";
import "../css/Footer.css";
import { getSocials } from "../data/Contact";
import { SocialMedia } from "../data/SocialMedia";

export function Footer() {
    return (
        <Row className="footer">
            <Col>
                <p className="footer__acknowledgments">
                    Made with React.
                </p>
                <div className="icon-container footer__icon-container">
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