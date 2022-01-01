import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React, {ReactElement} from "react";
import Col from "react-bootstrap/Col";

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

interface SideColumnProps extends React.PropsWithChildren<any> {
    title?: string,
    subtitle?: string,
}

export function SideColumn(props: SideColumnProps) {
    return (
        <Col lg={3} className="mb-4">
            <div className="my-5">
                <h3>{props.title}</h3>
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
        <Col lg={8}>
            {props.children}
        </Col>
    )
}