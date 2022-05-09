import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../css/Global.css";
import "../css/About.css";
import { animated, useSpring } from "react-spring";
import { AnimateWhenReached } from "./Animation";

// todo: what is the type of this prop?
function AboutContent({reached}: {reached: boolean}) {
    const styles = useSpring({
        transform: reached ? "translateY(0)" : "translateY(15%)",
        opacity: reached ? 1 : 0,
        delay: 0,
    });

    return (
        <Row id="about" className="py-5 px-2 px-md-5 justify-content-evenly align-items-center">
            <Col md={4}>
                <Image
                    fluid
                    src="https://via.placeholder.com/400x600"
                    className="about__image"
                />
            </Col>
            <animated.div className="col-md-6 py-5 py-md-0" style={styles}>
                <h4 className="my-3">
                    About
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lacinia at quis risus sed vulputate odio ut.
                </p>
                <p>
                    Lobortis mattis aliquam faucibus purus in massa tempor nec. Lorem ipsum dolor sit amet
                    consectetur adipiscing elit. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.
                    Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Neque volutpat ac tincidunt
                    vitae. Ut ornare lectus sit amet est placerat in egestas erat. Nisi quis eleifend quam
                    adipiscing vitae proin sagittis. Elit pellentesque habitant morbi tristique.
                </p>
                <p>
                    Eu nisl nunc mi ipsum. Lectus sit amet est placerat in egestas. Cras adipiscing enim eu turpis
                    egestas pretium aenean pharetra magna. Pulvinar elementum integer enim neque volutpat ac. Velit
                    dignissim sodales ut eu sem integer vitae justo eget. Volutpat diam ut venenatis tellus in metus
                    vulputate eu.
                </p>
            </animated.div>
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