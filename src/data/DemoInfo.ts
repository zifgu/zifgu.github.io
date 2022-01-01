import {ReactNode} from "react";

export interface DemoInfo {
    caption?: ReactNode,
}

export interface VideoInfo extends DemoInfo {
    videoSrc: string,
}

export interface ImageInfo extends DemoInfo {
    imageSrc: string,
}