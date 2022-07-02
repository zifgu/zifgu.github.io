import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { formatProjectTime, getAllProjects, ProjectInfo } from "../data/ProjectInfo";
import "../css/Projects.css";
import { animated, useSpring, config } from "react-spring";
import { AnimateWhenHovered } from "./Animation";

export function Projects() {
    return (
        <Row id="projects" className="py-5 px-2 px-md-5 gy-4" xs={1}>
            <Col>
                <h2>Projects</h2>
                <p className="projects__subtitle">
                    Here are some of my programming projects.
                </p>
            </Col>
            <Col>
                <Row xs={1} md={2} className="justify-content-around gx-4 gy-5">
                    {
                        getAllProjects()
                            .map((project: ProjectInfo) => (
                                <Col md={5} key={project.name}>
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
        <div>
            <AnimateWhenHovered>
                {
                    (hover: boolean) => <ProjectCardImage hover={hover} link={projectLink} src={props.project.headerImageSrc}/>
                }
            </AnimateWhenHovered>
            <ProjectCardBody
                project={props.project}
                link={projectLink}
            />
        </div>
    );
}

function ProjectCardImage(props: {link: string, src: string, hover: boolean}) {
    const style = useSpring({
        transform: props.hover ? "translateY(-20px)" : "translateY(0)",
        config: config.gentle,
    });

    return (
        <Link to={props.link}>
            <animated.img
                src={props.src}
                className="img-fluid project-card__image"
                style={style}
            />
        </Link>
    );
}

function ProjectCardBody(props: {project: ProjectInfo, link: string}) {
    return (
        <div className="pt-3 h-100">
            <div className="d-flex justify-content-between">
                <div className="text-start project-card__details">
                    {props.project.affiliation}
                </div>
                <div className="text-end project-card__details">
                    {formatProjectTime(props.project)}
                </div>
            </div>
            <h5>
                <Link to={props.link} className="project-card__title">
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
    );
}

function TechnologyBadge(props: {technology: string}) {
    return (
        <Badge pill className="px-3 project-card__technology">
            {props.technology}
        </Badge>
    );
}