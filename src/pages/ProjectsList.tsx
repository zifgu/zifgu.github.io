import {getAllProjects} from "../data/projects";
import {ProjectCard} from "../components/Projects/ProjectCard";
import Row from "react-bootstrap/Row";
import React from "react";
import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";

export function ProjectsList() {
    const projects = getAllProjects();

    // Sort in increasing order of start date
    const sortedProjects = projects.sort((proj1, proj2) => {
        return proj2.start.getTime() - proj1.start.getTime();
    });

    const projectCardList = sortedProjects.map((project) => {
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