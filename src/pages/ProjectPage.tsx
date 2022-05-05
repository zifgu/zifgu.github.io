import React from "react";
import {Link, useParams} from "react-router-dom";
import {getProject} from "../data/projects";
import {ProjectLessons} from "../components/Projects/ProjectLessons";
import {ProjectDemos} from "../components/Projects/ProjectDemos";
import {ProjectGithubLink} from "../components/Projects/ProjectGithubLink";
import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";
import {IoChevronBack} from "react-icons/io5";
import {ProjectBasicInfo} from "../components/Projects/ProjectBasicInfo";
import { PageSubheading } from "../components/PageSubheading";

export function ProjectPage() {
    const params = useParams();
    const project = getProject(params.projectName);

    if (!project) {
        return null;
    }

    const githubLink = project.githubUrl ? <ProjectGithubLink githubUrl={project.githubUrl}/> : null;

    const discussion = project.discussion ? (
        <>
            <PageSubheading>Discussion</PageSubheading>
            {project.discussion}
        </>
    ): null;

    return (
        <TwoColumnPageBody>
            <SideColumn>
                <Link to="/projects" className="fs-5 link-secondary text-decoration-none">
                    <IoChevronBack />
                    all projects
                </Link>

                <ProjectBasicInfo project={project} />
            </SideColumn>
            <MainColumn>
                <h3 className="border-top border-2 border-primary pt-3 mb-4">
                    {githubLink}
                    {project.name}
                </h3>
                {discussion}
                <ProjectLessons lessons={project.lessonsLearned} />
                <ProjectDemos images={project.images} videos={project.videos}/>
            </MainColumn>
        </TwoColumnPageBody>
    );
}