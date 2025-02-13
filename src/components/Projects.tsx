import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import {
    formatProjectTime,
    getAllProjects,
    groupProjectsByAffiliation,
    LinkInfo, ProjectAffiliation,
    ProjectInfo
} from "../data/ProjectInfo";
import "../css/Projects.css";

export function Projects() {
    const projectsByAffiliation = groupProjectsByAffiliation();
    return (
        <Row id="projects" className="pt-5 px-2 px-md-5 justify-content-center" xs={1}>
            <Col md={9}>
                <h2>Publications</h2>
                {
                    projectsByAffiliation[ProjectAffiliation.Publication]
                        .map((project: ProjectInfo) => (
                            <Project key={project.name} project={project}/>
                        ))
                }
                <h2>Professional Projects</h2>
                {
                    projectsByAffiliation[ProjectAffiliation.Professional]
                        .map((project: ProjectInfo) => (
                            <Project key={project.name} project={project}/>
                        ))
                }
                <h2>Personal Projects</h2>
                {
                    projectsByAffiliation[ProjectAffiliation.Personal]
                        .map((project: ProjectInfo) => (
                            <Project key={project.name} project={project}/>
                        ))
                }
            </Col>
        </Row>
    );
}

function Project(props: {project: ProjectInfo}) {
    return (
        <Row className="project-card align-items-center my-5 gy-3 gy-md-0">
            <Col md={4}>
                <Image
                    fluid
                    src={props.project.headerImageSrc}
                    className="project-card__image"
                />
            </Col>
            <Col md={8}>
                <h5>
                    {props.project.name}
                </h5>
                {
                    props.project.collaborators &&
                    <div className="project-card__details mb-2">
                        {props.project.collaborators}
                    </div>
                }
                <div className="project-card__details">
                    {formatProjectTime(props.project)}
                </div>
                <div className="my-3">
                    {props.project.summary}
                </div>
                <div className="d-flex flex-row gap-4">
                    {
                        props.project.links.map((link: LinkInfo) => (
                            <a href={link.url} className="project-card__link" target="_blank" rel="noreferrer">
                                {link.name}
                            </a>
                        ))
                    }
                </div>
            </Col>
        </Row>
    );
}

// TODO: remove old
function ProjectCard(props: {project: ProjectInfo}) {
    let projectImage = (
        <Image
            fluid
            src={props.project.headerImageSrc}
            className="project-card__image"
        />
    );
    let projectTitle = props.project.name;

    const projectLink = `/projects/${props.project.id}`; // Only works if this project has a Markdown page

    return (
        <div className="h-100 d-flex flex-column p-3 project-card">
            {
                props.project.markdown ?
                    <Link to={projectLink}>{projectImage}</Link> :
                    projectImage
            }
            <div className="mt-3 d-flex justify-content-between">
                <div className="text-start project-card__details">
                    {props.project.affiliation}
                </div>
                <div className="text-end project-card__details">
                    {formatProjectTime(props.project)}
                </div>
            </div>
            <h5 className="mb-3">
                {
                    props.project.markdown ?
                        <Link to={projectLink} className="project-card__title">{projectTitle}</Link> :
                        projectTitle
                }
            </h5>
            <p>
                {props.project.summary}
            </p>
            <div className="mt-auto mb-2 d-flex flex-row gap-4">
                {
                    props.project.links.map((link: LinkInfo) => (
                        <a href={link.url} className="project-card__link" target="_blank" rel="noreferrer">
                            {link.name}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
