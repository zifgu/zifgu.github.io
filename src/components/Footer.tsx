import Container from "react-bootstrap/Container";

export function Footer() {
    return (
        <footer className="footer mt-auto">
            <Container className="border-top">
                <span className="text-muted py-2 float-end">
                    Made with React.
                </span>
            </Container>
        </footer>
    )
}