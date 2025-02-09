import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Global.css";
import "../css/Hero.css";
import { getSocialsInHeader, SocialMedia } from "../data/SocialMedia";
import { WaveGraphic } from "./WaveGraphic";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HeroIcon({icon, link}: any) {
    return (
        <div className="hero__icon-wrapper">
            <a href={link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="hero__icon" icon={icon} size="xl"/>
            </a>
        </div>
    );
}

export function Hero() {
    return (
        <Row className="hero__container">
            <Col xs={9} md={4} className="hero__text mx-5">
                <h1>
                    Hi, I'm Floria.
                </h1>
                <p className="my-4 hero__subtitle">
                    I'm a Computer Science Master's student at the University of British Columbia.
                </p>
                <div className="icon-container hero__icon-container">
                    {
                        getSocialsInHeader().map((socialMedia: SocialMedia) => {
                            return (
                                <HeroIcon
                                    key={socialMedia.site}
                                    icon={socialMedia.icon}
                                    link={socialMedia.link}
                                />
                            );
                        })
                    }
                </div>
            </Col>
            <div className="hero__canvas-container">
                <WaveGraphic />
            </div>
        </Row>
    );
}