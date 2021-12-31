import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {PropsWithChildren} from "react";
import {ProjectInfo} from "../../pages/ProjectPage";
import {Link} from "react-router-dom";
import {Badge} from "react-bootstrap";

interface ProjectCardProps extends PropsWithChildren<any> {
    project: ProjectInfo,
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title as="h5">
                        <Link
                            to={`/projects/${props.project.name}`}
                            key={props.project.name}
                            className="text-decoration-none"
                        >
                            { props.project.name }
                        </Link>
                    </Card.Title>
                    <Card.Subtitle as="h6" className="text-secondary mb-3">{ props.project.time }</Card.Subtitle>
                    <Card.Text>{ props.project.description }</Card.Text>
                    <Card.Text>
                        { props.children }
                    </Card.Text>
                    <BadgeList items={props.project.technologies} />
                </Card.Body>
            </Card>
        </Col>
    );
}

export function BadgeList(props: {items: string[]}) {
    const badges = props.items.map((item) => {
        return (
            <Badge pill bg="primary" className="mx-1">
                {item}
            </Badge>
        );
    })

    return (
        <div>
            {badges}
        </div>
    );
}