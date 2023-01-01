import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Global.css";
import "../css/Footer.css";
import { getSocials, SocialMedia } from "../data/SocialMedia";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Footer() {
    return (
        <Row className="footer py-3">
            <Col>
                <div className="my-4 icon-container footer__icon-container">
                    {
                        getSocials().map((socialMedia: SocialMedia) => {
                            return (
                                <FooterIcon
                                    key={socialMedia.site}
                                    icon={socialMedia.icon}
                                    link={socialMedia.link}
                                />
                            );
                        })
                    }
                </div>
                <p className="footer__acknowledgments">
                    Copyright <span className="fs-5">&copy;</span> 2022 Floria Gu.
                </p>
            </Col>
        </Row>
    );
}

function FooterIcon({icon, link}: any) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="footer__icon">
            <FontAwesomeIcon icon={icon} size="xl"/>
        </a>
    );
}