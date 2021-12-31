import React from "react";
import Container from "react-bootstrap/Container";

export function NotFound() {
    return (
        <Container className="text-center pt-5" style={{ padding: "1rem" }}>
            <p className="text-muted"><i>There's nothing here!</i></p>
        </Container>
    );
}