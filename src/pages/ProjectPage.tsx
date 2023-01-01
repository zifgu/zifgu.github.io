import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";
import {useNavigate, useParams} from "react-router-dom";
import { formatProjectTime, getProject, indexOfProject, ProjectInfo } from "../data/ProjectInfo";
import { ProjectMarkdown } from "../components/ProjectMarkdown";
import { TableOfContents, TableOfContentsRef } from "../components/TableOfContents";
import { NotFound } from "./NotFound";
import "../css/Global.css";
import "../css/ProjectPage.css";

export function ProjectPage() {
    const { projectId } = useParams();
    const projectIndex = indexOfProject(projectId);
    const project = getProject(projectIndex);

    return (
        project ?
            <ProjectPageContent project={project}/>
            : <NotFound />
    );
}

function ProjectPageContent(props: {project: ProjectInfo}) {
    const tableOfContents = useRef<TableOfContentsRef>(null);

    const [markdown, setMarkdown] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        if (props.project.markdown) {
            fetch(props.project.markdown)
                .then((response: Response) => {
                    if (!response.ok) {
                        throw new Error(`Error fetching markdown file ${props.project.markdown}: ${response.status} ${response.statusText}`);
                    }

                    return response.text();
                })
                .then((text: string) => setMarkdown(text))
                .catch((err) => console.error(err));
        } else {
            navigate("/404");
        }
    }, [props.project.markdown]);

    const onHeadingChangedView = (id: string, inView: boolean) => {
        tableOfContents.current?.onHeadingChangedView(id, inView);
    };

    return (
        <Row className="py-5 px-2">
            <Col md={3} className="me-5">
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
                <ProjectMarkdown
                    markdown={markdown}
                    changedViewCallback={onHeadingChangedView}
                />
            </Col>
        </Row>
    );
}
