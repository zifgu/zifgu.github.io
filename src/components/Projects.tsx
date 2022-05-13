import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { formatProjectTime, getAllProjects, ProjectInfo } from "../data/ProjectInfo";
import "../css/Projects.css";
import { animated, useSpring } from "react-spring";
import { AnimateWhenHovered, AnimateWhenReached } from "./Animation";

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
    const projectLink = `/projects/${props.project.name}`;

    return (
        <div className="project-card">
            <AnimateWhenHovered>
                {
                    (hover: boolean) => <ProjectCardImage hover={hover} link={projectLink} src={props.project.headerImageSrc}/>
                }
            </AnimateWhenHovered>
            <AnimateWhenReached threshold={0.4}>
                {
                    (reached: boolean) => (
                        <ProjectCardBody
                            project={props.project}
                            index={props.index}
                            link={projectLink}
                            reached={reached}
                        />
                    )
                }
            </AnimateWhenReached>
        </div>
    );
}

function ProjectCardImage(props: {hover: boolean, link: string, src: string}) {
    const style = useSpring({
        transform: props.hover ? "scale(0.925)" : "scale(1)",
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

function ProjectCardBody(props: {project: ProjectInfo, link: string, index: number, reached: boolean}) {
    const bodySpring = useSpring({
        transform: props.reached ? "translateY(0)" : "translateY(20%)",
        opacity: props.reached ? 1 : 0,
    });

    return (
        <animated.div className="pt-3" style={bodySpring}>
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
        </animated.div>
    );
}

function TechnologyBadge(props: {technology: string}) {
    return (
        <Badge pill className="px-3 project-card__technology">
            {props.technology}
        </Badge>
    );
}