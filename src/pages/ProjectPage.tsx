import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
import { Link, useParams } from "react-router-dom";
import { formatProjectTime, getProject, indexOfProject, LinkInfo, ProjectInfo } from "../data/ProjectInfo";
import { testMarkdown } from "../data/testMarkdown";
import { ProjectMarkdown } from "../components/ProjectMarkdown";
import { TableOfContents, TableOfContentsRef } from "../components/TableOfContents";
import "../css/Global.css";
import "../css/ProjectPage.css";

function ExternalLink(props: {link: LinkInfo}) {
    return (
        <a href={props.link.url} className="project-page__project-link">
            {props.link.name}
        </a>
    );
}

function ExternalLinks(props: {links: LinkInfo[]}) {
    return (
        <div className="my-3 project-page__links-container">
            {
                props.links.map((link: LinkInfo, index: number) => {
                    const divider = index > 0 ? " / " : "";

                    return (
                        <span key={link.name}>
                            {divider}
                            <ExternalLink link={link}/>
                        </span>
                    );
                })
            }
        </div>
    );
}

function PreviousProject(props: {projectIndex: number}) {
    const prevProject = getProject(props.projectIndex - 1);

    return (
        prevProject ?
            <LinkToProject project={prevProject} alignRight={false} subtitle={"Previous project"} />
            : null
    );
}

function NextProject(props: {projectIndex: number}) {
    const nextProject = getProject(props.projectIndex + 1);

    return (
        nextProject ?
            <LinkToProject project={nextProject} alignRight={true} subtitle={"Next project"} />
            : null
    );
}

function LinkToProject(props: {project: ProjectInfo, alignRight: boolean, subtitle: string}) {
    const alignment = props.alignRight ? "text-end" : "text-start";

    return (
        <div className={`${alignment} flex-grow-1`}>
            <Link to={`/projects/${props.project.name}`} className="fs-5 heading link">
                {props.project.name}
            </Link>
            <p className="project-page__accent">{props.subtitle}</p>
        </div>
    );
}

export function ProjectPage() {
    const { projectId } = useParams();

    const tableOfContents = useRef<TableOfContentsRef>(null);

    const projectIndex = indexOfProject(projectId);
    const project = getProject(projectIndex);

    if (!project) {
        return null;
    }

    const onHeadingEnteredView = (id: string) => {
        tableOfContents.current?.setActiveId(id);
    };

    return (
        <Row className="py-5 px-2 justify-content-evenly">
            <Col md={3}>
                <div className="text-md-end project-page__links-container project-page__toc-container">
                    <TableOfContents ref={tableOfContents}/>
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
                <ExternalLinks links={project.links}/>
                <ProjectMarkdown
                    markdown={testMarkdown}
                    notifyEnteredView={onHeadingEnteredView}
                />
                <div className="my-4 d-flex">
                    <PreviousProject projectIndex={projectIndex}/>
                    <NextProject projectIndex={projectIndex}/>
                </div>
            </Col>
        </Row>
    );
}