import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React, {ReactElement} from "react";
import Col from "react-bootstrap/Col";
import "../../css/layout.css";

interface TwoColumnsProps {
    children: [ReactElement, ReactElement]
}

export function TwoColumnPageBody(props: TwoColumnsProps) {
    return (
        <Container>
            <Row className="my-3 justify-content-center">
                {props.children[0]}
                {props.children[1]}
            </Row>
        </Container>
    );
}

export const sideColumnSize = 3;
export const mainColumnSize = 8;

interface SideColumnProps extends React.PropsWithChildren<any> {
    title?: string,
    subtitle?: string,
}

export function SideColumn(props: SideColumnProps) {
    return (
        <Col lg={sideColumnSize}>
            <div className="mt-2 my-lg-5 pe-lg-5">
                <h3>{props.title}</h3>
                {
                    props.title ?
                        <hr className="side-column-separator"/>
                        : null
                }
                <p className="fs-6 lead text-muted">
                    {props.subtitle}
                </p>
            </div>
            {props.children}
        </Col>
    );
}

export function MainColumn(props: React.PropsWithChildren<any>) {
    return (
        <Col lg={mainColumnSize}>
            {props.children}
        </Col>
    )
}