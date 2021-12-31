import {getAllProjects} from "../data/projects";
import {ProjectCard} from "../components/Projects/ProjectCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React from "react";

export function ProjectsList() {
    const projects = getAllProjects();

    const projectCardList = projects.map((project) => {
        return (
            <ProjectCard project={project}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel. In vitae turpis massa sed elementum tempus egestas sed. Fringilla est ullamcorper eget nulla facilisi etiam. Mi ipsum faucibus vitae aliquet nec.
            </ProjectCard>
        );
    });

    return (
        <Container className="my-3">
            <Row className="row-cols-1 row-cols-lg-2 gy-3">
                {projectCardList}
            </Row>
        </Container>
    );
}