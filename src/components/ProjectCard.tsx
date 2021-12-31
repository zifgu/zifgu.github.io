import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {PropsWithChildren} from "react";

interface ProjectCardProps extends PropsWithChildren<any> {
    projectName: string,
}

export function ProjectCard(props: ProjectCardProps) {
    // TODO: add project-specific information
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title as="h5">{props.projectName}</Card.Title>
                    <Card.Subtitle as="h6" className="card-subtitle mb-3">Subtitle</Card.Subtitle>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}