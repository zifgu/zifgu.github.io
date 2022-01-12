import {ReactNode} from "react";
import {ImageInfo, VideoInfo} from "./DemoInfo";

export interface ProjectInfo {
    name: string,
    start: Date,
    finished?: Date | "present",
    githubUrl?: string,
    course?: string,
    team?: number,
    technologies: string[],
    summary: ReactNode,
    headerImageSrc?: string,
    discussion?: ReactNode,
    lessonsLearned?: ReactNode[],
    videos?: VideoInfo[],
    images?: ImageInfo[],
}

export function formatProjectTime(project: ProjectInfo): string {
    const startString = formatMonthYear(project.start);

    let endString = "";
    if (project.finished === "present") {
        endString = " – present";
    } else if (project.finished) {
        endString = " - " + formatMonthYear(project.finished);
    }

    return startString + endString;
}

function formatMonthYear(date: Date): string {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
}