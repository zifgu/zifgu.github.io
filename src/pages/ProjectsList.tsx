import {getAllProjects} from "../data/projects";
import {ProjectCard} from "../components/Projects/ProjectCard";
import Row from "react-bootstrap/Row";
import React from "react";
import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";

export function ProjectsList() {
    const projects = getAllProjects();

    const projectCardList = projects.map((project) => {
        return (
            <ProjectCard project={project} key={project.name}/>
        );
    });

    return (
        <TwoColumnPageBody>
            <SideColumn
                title={"Programming projects"}
                subtitle={"Things I've worked on!"}
            />
            <MainColumn>
                <Row className="row-cols-1 mt-lg-1 gy-3">
                    {projectCardList}
                </Row>
            </MainColumn>
        </TwoColumnPageBody>
    )

}