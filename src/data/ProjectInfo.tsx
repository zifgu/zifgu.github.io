import { ReactNode } from "react";
import TransductionHeading from "./images/heading/TransductionHeading.png";
import FanworksSiteHeading from "./images/heading/FanworksSiteHeading.png";
import TimetableCalculatorHeading from "./images/heading/TimetableCalculatorHeading.png";
import PersonalWebsiteHeading from "./images/heading/PersonalWebsiteHeading.png";
import CodenamesSingleplayerHeading from "./images/heading/CodenamesSingleplayerHeading.png";
import OERGeomaticsHeading from "./images/heading/OERGeomaticsHeading.png";
import EmpathHeading from "./images/heading/EmpathHeading.png";
import InsightUBCHeading from "./images/heading/InsightUBCHeading.png";
import testMarkdown from "../data/testMarkdown.md";

export interface LinkInfo {
    name: string,
    url: string,
}

export interface ProjectInfo {
    id: string,
    name: string,
    affiliation: string,
    start: Date,
    finished?: Date | "present",
    summary: ReactNode,
    links: LinkInfo[],
    markdown: string,
    headerImageSrc: string,
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
        id: "personal-website",
        name: "Personal Website",
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
        summary: "This website! Personal site and portfolio.",
        technologies: ["React", "TypeScript", "Bootstrap", "HTML/CSS", "GitHub Pages"],
        markdown: testMarkdown,
    },
    {
        id: "oer-geomatics",
        name: "OER Geomatics Project",
        start: new Date(2021, 8),
        finished: new Date(2022, 3),
        affiliation: "UBC Emerging Media Lab",
        links: [],
        technologies: ["React", "JavaScript", "Three.js"],
        summary: "Interactive 3D visualization for teaching geomatics students about models of Earth.",
        headerImageSrc: OERGeomaticsHeading,
        markdown: testMarkdown,
    },
    {
        id: "me-an-empath",
        name: "Me, An Empath",
        start: new Date(2022, 2),
        affiliation: "cmd-f 2022 Hackathon",
        links: [],
        technologies: ["React", "JavaScript", "Bootstrap", "Figma", "OpenAI"],
        summary: "Web app that can detect the emotion in text messages and suggest ways to respond. Created for" +
            " the cmd-f 2022 hackathon.",
        headerImageSrc: EmpathHeading,
        markdown: testMarkdown,
    },
    {
        id: "insight-ubc",
        name: "Insight UBC",
        start: new Date(2021, 8),
        finished: new Date(2022, 11),
        affiliation: "CPSC 310: Introduction to Software Engineering",
        links: [],
        headerImageSrc: InsightUBCHeading,
        summary: "REST API that manages and supports SQL-like queries over UBC course datasets.",
        technologies: ["TypeScript", "Node.js", "Express"],
        markdown: testMarkdown,
    },
    {
        id: "codenames-app",
        name: "Codenames App",
        start: new Date(2021, 11),
        finished: new Date(2022, 0),
        affiliation: "Personal Project",
        links: [],
        headerImageSrc: CodenamesSingleplayerHeading,
        summary: "Online implementation of the word-guessing game Codenames.",
        technologies: ["React", "TypeScript", "Bootstrap", "HTML/CSS"],
        markdown: testMarkdown,
    },
    {
        id: "fanworks-site",
        name: "Fanworks Site",
        start: new Date(2021, 4),
        finished: new Date(2021, 5),
        affiliation: "CPSC 304: Introduction to Relational Databases",
        links: [],
        headerImageSrc: FanworksSiteHeading,
        summary: "Web application for sharing fan-made fiction and artworks, inspired by Archive of Our Own.",
        technologies: ["Java", "SQL", "Oracle Database", "HTML/CSS"],
        markdown: testMarkdown,
    },
    {
        id: "transduction",
        name: "Transduction",
        start: new Date(2020, 9),
        finished: new Date(2021, 7),
        affiliation: "UBC Game Development Club",
        links: [],
        summary: "3D puzzle game about exploring mindscapes to crack a case – with a cooperative twist.",
        technologies: ["Unity", "C#"],
        headerImageSrc: TransductionHeading,
        markdown: testMarkdown,
    },
    {
        id: "timetable-generator",
        name: "Timetable Generator",
        start: new Date(2020, 8),
        finished: new Date(2020, 11),
        affiliation: "CPSC 210: Software Construction",
        links: [],
        headerImageSrc: TimetableCalculatorHeading,
        summary: "Desktop application to help students automatically schedule their course timetables.",
        technologies: ["Java", "Swing"],
        markdown: testMarkdown,
    },
]

export function getAllProjects(): ProjectInfo[] {
    return projects;
}

export function getProject(index: number): ProjectInfo | undefined {
    return projects[index];
}

export function indexOfProject(id: string | undefined): number {
    if (!id) {
        return -1;
    }

    return projects.findIndex((project) => {
        return project.id === id
    });
}