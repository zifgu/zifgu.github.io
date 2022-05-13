import { ReactNode } from "react";
import TransductionHeading from "./images/heading/TransductionHeading.png";
import FanworksSiteHeading from "./images/heading/FanworksSiteHeading.png";
import TimetableCalculatorHeading from "./images/heading/TimetableCalculatorHeading.png";
import PersonalWebsiteHeading from "./images/heading/PersonalWebsiteHeading.png";
import CodenamesSingleplayerHeading from "./images/heading/CodenamesSingleplayerHeading.png";
import OERGeomaticsHeading from "./images/heading/OERGeomaticsHeading.png";
import testMarkdown from "../data/testMarkdown.md";

export interface LinkInfo {
    name: string,
    url: string,
}

export interface ProjectInfo {
    name: string,
    affiliation: string,
    start: Date,
    finished?: Date | "present",
    summary: ReactNode,
    links: LinkInfo[],
    markdown: string,
    headerImageSrc?: string,
    technologies: string[],
}

export function formatProjectTime(project: ProjectInfo): string {
    const startString = formatMonthYear(project.start);

    let endString = "";
    if (project.finished) {
        endString = " - " + (project.finished === "present" ? project.finished : formatMonthYear(project.finished));
    }

    return startString + endString;
}

function formatMonthYear(date: Date): string {
    return date.toLocaleString("default", {month: "2-digit", year: "numeric"});
}

const projects: ProjectInfo[] = [
    {
        name: "Personal website",
        start: new Date(2021, 11),
        finished: "present",
        affiliation: "Personal Project",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/zifgu/zifgu.github.io",
            },
            {
                name: "Demo",
                url: "https://github.com/zifgu/zifgu.github.io",
            },
            {
                name: "Devpost",
                url: "https://github.com/zifgu/zifgu.github.io",
            },
        ],
        headerImageSrc: PersonalWebsiteHeading,
        summary: "The website you're on!",
        technologies: ["React", "TypeScript", "Bootstrap", "HTML/CSS", "GitHub Pages"],
        markdown: testMarkdown,
    },
    {
        name: "Codenames App",
        start: new Date(2021, 11),
        finished: new Date(2022, 0),
        affiliation: "Personal Project",
        links: [],
        headerImageSrc: CodenamesSingleplayerHeading,
        summary: "A single page React app for playing the popular word-guessing game Codenames.",
        technologies: ["React", "TypeScript", "Bootstrap", "HTML/CSS"],
        markdown: testMarkdown,
    },
    {
        name: "Fanworks Site",
        start: new Date(2021, 4),
        finished: new Date(2021, 5),
        affiliation: "CPSC 304: Introduction to Relational Databases",
        links: [],
        headerImageSrc: FanworksSiteHeading,
        summary: "A Java web application for sharing and reading fanworks, similar to Archive of Our Own.",
        technologies: ["Java", "SQL", "Oracle Database", "HTML/CSS"],
        markdown: testMarkdown,
    },
    {
        name: "Timetable Generator",
        start: new Date(2020, 8),
        finished: new Date(2020, 11),
        affiliation: "CPSC 210: Software Construction",
        links: [],
        headerImageSrc: TimetableCalculatorHeading,
        summary: "A Java desktop application to help students automatically create their course timetables.",
        technologies: ["Java", "Swing"],
        markdown: testMarkdown,
    },
    {
        name: "OER Geomatics project",
        start: new Date(2021, 8),
        finished: "present",
        affiliation: "UBC Emerging Media Lab",
        links: [],
        technologies: ["React", "JavaScript", "Three.js"],
        summary: <>
            An open source interactive 3D visualization for teaching geomatics students about three different models of Earth.
        </>,
        headerImageSrc: OERGeomaticsHeading,
        markdown: testMarkdown,
    },
    {
        name: "Transduction",
        start: new Date(2020, 9),
        finished: new Date(2021, 7),
        affiliation: "UBC Game Development Club",
        links: [],
        summary: "A first-person 3D puzzle game for two players, made as part of the UBC Game Development Club.",
        technologies: ["Unity", "C#"],
        headerImageSrc: TransductionHeading,
        markdown: testMarkdown,
    }
]

export function getAllProjects(): ProjectInfo[] {
    return projects;
}

export function numProjects() {
    return projects.length;
}

export function getProject(index: number): ProjectInfo | undefined {
    return projects[index];
}

export function indexOfProject(name: string | undefined): number {
    if (!name) {
        return -1;
    }

    return projects.findIndex((project) => {
        return project.name === name
    });
}