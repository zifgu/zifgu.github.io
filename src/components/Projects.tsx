import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { formatProjectTime, getAllProjects, ProjectInfo } from "../data/ProjectInfo";
import "../css/Projects.css";

export function Projects() {
    return (
        <Row id="projects" className="py-5 px-2 px-md-5 gy-4" xs={1}>
            <Col>
                <h4>
                    Projects
                </h4>
                <p className="projects__subtitle">
                    Check out the projects I’ve worked on, etc etc
                </p>
            </Col>
            <Col>
                <Row xs={1} md={2} className="justify-content-around gx-4 gy-5">
                    {
                        getAllProjects()
                            .map((project: ProjectInfo, index: number) => (
                                <Col md={5} key={project.name}>
                                    <ProjectCard project={project} index={index}/>
                                </Col>
                            ))
                    }
                </Row>
            </Col>
        </Row>
    );
}

function ProjectCard(props: {project: ProjectInfo, index: number}) {
    return (
        <div className="project-card">
            <Image src="https://via.placeholder.com/500x280" className="project-card__image"/>
            <div className="pt-3">
                <div className="d-flex justify-content-between">
                    <div className="text-start project-card__details">
                        {props.project.affiliation}
                    </div>
                    <div className="text-end project-card__details">
                        {formatProjectTime(props.project)}
                    </div>
                </div>
                <h5>
                    <Link to={`/projects/${props.project.name}`} className="project-card__title">
                        {props.project.name}
                    </Link>
                </h5>
                <p className="my-4">
                    {props.project.summary}
                </p>
                <div className="d-flex flex-wrap gap-2">
                    {
                        props.project.technologies.map((technology: string) => (
                            <TechnologyBadge key={technology} technology={technology}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

function TechnologyBadge(props: {technology: string}) {
    return (
        <Badge pill className="px-3 project-card__technology">
            {props.technology}
        </Badge>
    );
}