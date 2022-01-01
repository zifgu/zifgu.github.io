import {ReactNode} from "react";
import {ImageInfo, VideoInfo} from "./DemoInfo";

export interface ProjectInfo {
    name: string,
    time: string,
    githubUrl?: string,
    course?: string,
    team?: number,
    technologies: string[],
    summary: string,
    headerImageSrc?: string,
    discussion?: ReactNode,
    lessonsLearned?: ReactNode[],
    videos?: VideoInfo[],
    images?: ImageInfo[],
}