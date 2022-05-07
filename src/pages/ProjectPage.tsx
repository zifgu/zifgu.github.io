import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkUnwrapImages from "remark-unwrap-images";
import { DemoImage, DemoVideo } from "../components/Demos";
import { formatProjectTime, getAllProjects, getProject, indexOfProject, LinkInfo, numProjects } from "../data/ProjectInfo";
import { testMarkdown } from "../data/testMarkdown";
import "../css/Global.css";
import "../css/ProjectPage.css";

function ProjectNavLink(props: {text: string}) {
    // TODO: navigation focus

    return (
        <HashLink to={`#${props.text}`} className="my-2 d-none d-md-block project-page__toc-link">
            {props.text}
        </HashLink>
    );
}

function ProjectLink(props: {link: LinkInfo}) {
    return (
        <a href={props.link.url} className="project-page__project-link">
            {props.link.name}
        </a>
    );
}

function ProjectLinks(props: {links: LinkInfo[]}) {
    const listOfLinks = props.links.map((link: LinkInfo, index: number) => {
        const divider = index > 0 ? " / " : "";

        return (
            <>
                {divider}
                <ProjectLink link={link}/>
            </>
        );
    });

    return (
        <div className="my-3 project-page__links-container">
            {listOfLinks}
        </div>
    );
}

function ProjectMarkdown(props: {markdown: string}) {
    const renderImageOrVideo = ({...imgProps}) => {
        if (imgProps.src && imgProps.alt) {
            if (imgProps.alt.startsWith("v:")) {
                // Create an embedded video instead
                return <DemoVideo src={imgProps.src} caption={imgProps.alt.slice(2).trim()} />;
            } else {
                return <DemoImage src={imgProps.src} caption={imgProps.alt}/>;
            }
        }

        return null;
    };

    return (
        <ReactMarkdown
            components={{
                h1: "h4",
                h2: "h5",
                h3: "h6",
                img: renderImageOrVideo,
            }}
            remarkPlugins={[remarkUnwrapImages]}
        >
            {props.markdown}
        </ReactMarkdown>
    );
}

function PreviousProject(props: {projectIndex: number}) {
    const prevProject = getProject(props.projectIndex - 1);

    if (!prevProject) {
        return <div />;
    }

    return (
        <div>
            <Link to={`/projects/${prevProject.name}`} className="fs-5 heading link">
                {prevProject.name}
            </Link>
            <p className="project-page__accent">Previous</p>
        </div>
    );
}

function NextProject(props: {projectIndex: number}) {
    const nextProject = getProject(props.projectIndex + 1);

    if (!nextProject) {
        return <div />;
    }

    return (
        <div className="text-end">
            <Link to={`/projects/${nextProject.name}`} className="fs-5 heading link">
                {nextProject.name}
            </Link>
            <p className="project-page__accent">Next project</p>
        </div>
    );
}

export function ProjectPage() {
    const { projectId } = useParams();

    const projectIndex = indexOfProject(projectId);
    const project = getProject(projectIndex);

    if (!project) {
        return null;
    }

    // TODO: anchors

    return (
        <Row id="Overview" className="py-5 px-2 justify-content-evenly">
            <Col md={3}>
                <div
                    className="text-md-end project-page__links-container project-page__toc-container"
                >
                    <ProjectNavLink text={"Overview"}/>
                    <ProjectNavLink text={"Technologies"}/>
                    <ProjectNavLink text={"Demos"}/>
                    <HashLink
                        className="mt-5 project-page__toc-link"
                        to="/#projects"
                    >
                        {"< All projects"}
                    </HashLink>
                </div>
            </Col>
            <Col md={7}>
                <h3>
                    {project.name}
                </h3>
                <div className="project-page__accent">
                    {formatProjectTime(project)}
                </div>
                <ProjectLinks links={project.links}/>
                <ProjectMarkdown markdown={testMarkdown}/>
                <div
                    className="my-4 d-flex justify-content-between"
                >
                    <PreviousProject projectIndex={projectIndex}/>
                    <NextProject projectIndex={projectIndex}/>
                </div>
            </Col>
        </Row>
    );
}