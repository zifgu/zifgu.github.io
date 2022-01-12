import React from "react";
import {ProjectTechnologies} from "./ProjectTechnologies";
import { formatProjectTime, ProjectInfo } from "../../data/ProjectInfo";

export function ProjectBasicInfo(props: { project: ProjectInfo }) {
    let courseInfo = null;
    if (props.project.course) {
        courseInfo = (
            <BasicInfoItem description={"Course"}>{props.project.course}</BasicInfoItem>
        );
    }

    let teamInfo = null;
    if (props.project.team) {
        teamInfo = (
            <BasicInfoItem description="Team">{props.project.team} members</BasicInfoItem>
        );
    }

    return (
        <div className="mt-5 text-dark p-1">
            <BasicInfoItem description={"Date"}>
                {formatProjectTime(props.project)}
            </BasicInfoItem>
            {courseInfo}
            {teamInfo}
            <BasicInfoItem description={"Technologies"}>
                <ProjectTechnologies technologies={props.project.technologies} />
            </BasicInfoItem>
        </div>
    )
}

interface BasicInfoItemProps extends React.PropsWithChildren<any> {
    description: string,
}

function BasicInfoItem(props: BasicInfoItemProps) {
    return (
        <div className="my-3">
            <b>{capitalize(props.description)}: </b>
            {props.children}
        </div>
    )
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
