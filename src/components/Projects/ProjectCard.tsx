import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {Badge} from "react-bootstrap";
import {ProjectInfo} from "../../data/ProjectInfo";

interface ProjectCardProps extends PropsWithChildren<any> {
    project: ProjectInfo,
}

export function ProjectCard(props: ProjectCardProps) {
    let cardHeaderImage = null;
    if (props.project.headerImageSrc) {
        cardHeaderImage = (
            <Link to={`/projects/${props.project.name}`}>
                <Card.Img
                    variant="top"
                    src={props.project.headerImageSrc}
                />
            </Link>
        );
    }

    return (
        <Col className="p-0">
            <Card>
                {cardHeaderImage}
                <Card.Body>
                    <Card.Title as="h5">
                        <Link
                            to={`/projects/${props.project.name}`}
                            className="text-decoration-none"
                        >
                            { props.project.name }
                        </Link>
                    </Card.Title>
                    <Card.Subtitle as="h6" className="text-secondary mb-3">{ props.project.time }</Card.Subtitle>
                    <Card.Text>{ props.project.summary }</Card.Text>
                    <BadgeList items={props.project.technologies} maxLength={4} />
                </Card.Body>
            </Card>
        </Col>
    );
}

function BadgeList(props: {items: string[], maxLength?: number}) {
    let items = props.items;

    if (props.maxLength && props.items.length > props.maxLength) {
        items = items.slice(0, props.maxLength);
        items.push("...");
    }

    const badges = items.map((item) => {
        return (
            <Badge key={item} pill bg="primary" className="mx-1">
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