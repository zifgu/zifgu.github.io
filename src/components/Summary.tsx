import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import React from "react";

interface SummaryProps extends React.PropsWithChildren<any> {
    title: string,
}

export function Summary(props: SummaryProps) {
    return (
        <Container className="p-3">
            <Col lg="8" className="mx-auto">
                <h1>
                    {props.title}
                </h1>
                {props.children}
            </Col>
        </Container>
    );
}