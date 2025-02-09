import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../css/Global.css";
import "../css/About.css";
import { animated, config, useSpring } from "react-spring";
import { AnimateWhenReached } from "./Animation";
import AboutPhoto from "../data/images/about/AboutPhoto.jpg";

function AboutContent({reached}: {reached: boolean}) {
    const styles = useSpring({
        transform: reached ? "translateY(0)" : "translateY(15%)",
        opacity: reached ? 1 : 0,
        config: config.gentle,
        delay: 0,
    });

    // TODO: fix nesting
    return (
        <Row id="about" className="pt-5 px-2 px-md-5 justify-content-center">
            <Col md={9}>
                <Row className="gx-5 justify-content-between align-items-center">
                    <animated.div className="col-md-8" style={styles}>
                        <h2 className="my-3">
                            About
                        </h2>
                        <p>
                            I'm a Master's student in Computer Science at the University of British Columbia. I'm interested in everything visual, three-dimensional, and interactive computing – currently, I work on GPU algorithms for real-time rendering and geometry processing.
                        </p>
                        <p>
                            In the past, I've helped teach from-scratch game development with C++ and OpenGL, worked as a developer on web-based 3D visualizations and the <a href="https://www.home.tapestry-tool.com/">Tapestry Tool</a> at UBC, and collaborated on several student games as a member of the UBC Game Development Club.
                        </p>
                        <p>
                            I hold a B.Sc. Honours in Computer Science from the University of British Columbia (2023).
                        </p>
                    </animated.div>
                    <Col md={4}>
                        <Image
                            fluid
                            src={AboutPhoto}
                            className="w-75 about__image"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export function About() {
    return (
        <AnimateWhenReached threshold={0.4}>
            {
                (reached: boolean) => {
                    return <AboutContent reached={reached} />;
                }
            }
        </AnimateWhenReached>
    );
}