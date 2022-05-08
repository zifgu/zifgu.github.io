import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Global.css";
import "../css/Hero.css";
import { getSocials } from "../data/Contact";
import { SocialMedia } from "../data/SocialMedia";
import { ParticleTest } from "./ParticleTest";

// TODO: figure out how to enforce types on polymorphic components
function HeroIcon({as, link, ...props}: any) {
    const Component = as;

    return (
        <a href={link} target="_blank" rel="noreferrer" className="hero__icon-wrapper">
            <Component className="hero__icon" {...props}/>
        </a>
    );
}

export function Hero() {
    return (
        <Row id="top" className="hero vh-100">
            <Col
                xs md={3}
                className="hero__text mx-5"
            >
                <h1>
                    Hi, I'm Floria
                </h1>
                <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="icon-container hero__icon-container">
                    {
                        getSocials().map((socialMedia: SocialMedia) => {
                            return (
                                <HeroIcon
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
            <div className="hero__canvas-container">
                <ParticleTest/>
            </div>
        </Row>
    );
}