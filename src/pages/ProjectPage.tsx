import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import React, {ReactNode} from "react";
import {Link, useParams} from "react-router-dom";
import {getProject} from "../data/projects";
import {ProjectTechnologies} from "../components/Projects/ProjectTechnologies";
import {ProjectLessons} from "../components/Projects/ProjectLessons";
import {ProjectDemos} from "../components/Projects/ProjectDemos";

export interface DemoInfo {
    caption?: ReactNode,
}

export interface VideoInfo extends DemoInfo {
    videoSrc: string,
}

export interface ImageInfo extends DemoInfo {
    imageSrc: string,
}

export interface ProjectInfo {
    name:  string,
    time: string,
    course?: string,
    technologies: string[],
    description: ReactNode,
    lessonsLearned?: ReactNode[],
    videos?: VideoInfo[],
    images?: ImageInfo[],
}

export function ProjectPage() {
    const params = useParams();
    const project = getProject(params.projectName);

    if (project) {
        return (
            <Container>
                <Col lg="8" className="mx-auto">
                    <header className="p-3 mb-3 border-bottom">
                        <Link to="/projects" className="link-secondary">all projects</Link>
                    </header>
                </Col>
                <Col lg="8" className="mx-auto">
                    <h3>
                        {project.name}
                    </h3>
                    <p className="text-secondary">
                        Made in: {project.time}
                    </p>
                    <ProjectTechnologies technologies={project.technologies}/>

                    <div className="my-3">
                        {project.description}
                    </div>

                    <ProjectLessons lessons={project.lessonsLearned} />
                    <ProjectDemos images={project.images} videos={project.videos}/>
                </Col>
            </Container>
        );
    } else return null;
}

export function ProjectSubheading(props: React.PropsWithChildren<any>) {
    return (
        <h5>
            {props.children}
        </h5>
    );
}