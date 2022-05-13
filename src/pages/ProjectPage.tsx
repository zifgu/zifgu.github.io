import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
import { Link, useParams } from "react-router-dom";
import { formatProjectTime, getProject, indexOfProject, LinkInfo, ProjectInfo } from "../data/ProjectInfo";
import { ProjectMarkdown } from "../components/ProjectMarkdown";
import { TableOfContents, TableOfContentsRef } from "../components/TableOfContents";
import "../css/Global.css";
import "../css/ProjectPage.css";

export function ProjectPage() {
    const { projectId } = useParams();
    const projectIndex = indexOfProject(projectId);
    const project = getProject(projectIndex);

    return (
        project ?
            <ProjectPageContent project={project} projectIndex={projectIndex} />
            : null
    );
}

function ProjectPageContent(props: {project: ProjectInfo, projectIndex: number}) {
    const tableOfContents = useRef<TableOfContentsRef>(null);

    const [markdown, setMarkdown] = useState<string>("");

    useEffect(() => {
        fetch(props.project.markdown)
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error(`Error fetching markdown file ${props.project.markdown}: ${response.status} ${response.statusText}`);
                }

                return response.text();
            })
            .then((text: string) => setMarkdown(text))
            .catch((err) => console.error(err));
    }, [props.project.markdown]);

    const onHeadingChangedView = (id: string, inView: boolean) => {
        tableOfContents.current?.onHeadingChangedView(id, inView);
    };

    return (
        <Row className="py-5 px-2 justify-content-evenly">
            <Col md={3}>
                <div className="text-md-end project-page__links-container project-page__toc-container">
                    <TableOfContents ref={tableOfContents} content={markdown}/>
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
                    {props.project.name}
                </h3>
                <div className="project-page__accent">
                    {formatProjectTime(props.project)}
                </div>
                <ExternalLinks links={props.project.links}/>
                <ProjectMarkdown
                    markdown={markdown}
                    changedViewCallback={onHeadingChangedView}
                />
                <div className="my-4 d-flex">
                    <PreviousProject projectIndex={props.projectIndex}/>
                    <NextProject projectIndex={props.projectIndex}/>
                </div>
            </Col>
        </Row>
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

function ExternalLink(props: {link: LinkInfo}) {
    return (
        <a href={props.link.url} className="project-page__project-link">
            {props.link.name}
        </a>
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
