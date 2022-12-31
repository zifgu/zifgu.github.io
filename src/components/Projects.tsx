import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import {formatProjectTime, getAllProjects, LinkInfo, ProjectInfo} from "../data/ProjectInfo";
import "../css/Projects.css";

export function Projects() {
    return (
        <Row id="projects" className="py-5 px-2 px-md-5 gy-4" xs={1}>
            <Col>
                <h2>Programming</h2>
            </Col>
            <Col>
                <Row className="g-4">
                    {
                        getAllProjects()
                            .map((project: ProjectInfo) => (
                                <Col md={4} key={project.name}>
                                    <ProjectCard project={project}/>
                                </Col>
                            ))
                    }
                </Row>
            </Col>
        </Row>
    );
}

function ProjectCard(props: {project: ProjectInfo}) {
    const projectLink = `/projects/${props.project.id}`;

    return (
        <div className="h-100 d-flex flex-column p-3 project-card">
            <Link to={projectLink}>
                <Image
                    fluid
                    src={props.project.headerImageSrc}
                    className="project-card__image"
                />
            </Link>
            <div className="mt-3 d-flex justify-content-between">
                <div className="text-start project-card__details">
                    {props.project.affiliation}
                </div>
                <div className="text-end project-card__details">
                    {formatProjectTime(props.project)}
                </div>
            </div>
            <h5 className="mb-3">
                <Link to={projectLink} className="project-card__title">
                    {props.project.name}
                </Link>
            </h5>
            <p>
                {props.project.summary}
            </p>
            <div className="mt-auto mb-2 d-flex flex-row gap-4">
                {
                    props.project.links.map((link: LinkInfo) => (
                        <a href={link.url} target="_blank">
                            {link.name}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
