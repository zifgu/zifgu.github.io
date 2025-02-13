import { ReactNode } from "react";
import TransductionHeading from "./images/heading/TransductionHeading.png";
import FanworksSiteHeading from "./images/heading/FanworksSiteHeading.png";
import TimetableCalculatorHeading from "./images/heading/TimetableCalculatorHeading.png";
import PersonalWebsiteHeading from "./images/heading/PersonalWebsiteHeading.png";
import CodenamesMultiplayerHeading from "./images/heading/CodenamesMultiplayerHeading.png";
import OERGeomaticsHeading from "./images/heading/OERGeomaticsHeading.png";
import EmpathHeading from "./images/heading/EmpathHeading.png";
import SAPAppHeading from "./images/heading/SAPAppHeading.png";
import RaytracerHeading from "./images/heading/RaytracerHeading.png";
import RLCutterHeading from "./images/heading/RLCutterHeading.png";
import UnicornsHeading from "./images/heading/UnicornsHeading.png";
import ZenZoneHeading from "./images/heading/ZenZoneHeading.png";
import TapestryHeading from "./images/heading/TapestryHeading.png";
import ImageBlenderHeading from "./images/heading/ImageBlenderHeading.png";
import FastAtlasHeading from "./images/heading/FastAtlasHeading.png";

export interface LinkInfo {
    name: string,
    url: string,
}

export enum ProjectAffiliation {
    Publication = "publication",
    Professional = "professional",
    Personal = "personal",
}

export interface ProjectInfo {
    id: string,
    name: string,
    affiliation: ProjectAffiliation,
    start: Date,
    finished?: Date | "present",
    collaborators?: ReactNode,
    venue?: string,
    summary: ReactNode,
    links: LinkInfo[],
    markdown?: string,
    headerImageSrc: string,
    technologies: string[],
}

export function formatProjectTime(project: ProjectInfo): string {
    if (project.venue !== undefined) {
        return project.venue + " " + formatMonthYear(project.start, false, true);
    }

    const showStartYear = project.finished === undefined || project.finished === "present" || project.start.getFullYear() !== project.finished.getFullYear();
    const startString = formatMonthYear(project.start, true, showStartYear);
    const endString = project.finished === undefined ? "" :
                             project.finished === "present" ? " - present" :
                             " - " + formatMonthYear(project.finished, true, true);

    return startString + endString;
}

function formatMonthYear(date: Date, includeMonth: boolean, includeYear: boolean) : string {
    const options : Intl.DateTimeFormatOptions = {};
    if (includeMonth) {
        options.month = "long";
    }
    if (includeYear) {
        options.year = "numeric";
    }

    return date.toLocaleString("default", options);
}

const projects: ProjectInfo[] = [
    {
        id: "fastatlas",
        name: "FastAtlas: Real-Time Compact Atlases for Texture Space Shading",
        start: new Date(2025, 4),
        affiliation: ProjectAffiliation.Publication,
        collaborators: <>Nicholas Vining, Alexander Majercik*, <u>Floria Gu</u>*, Towaki Takikawa, Ty Trusty, Paul Lalonde, Morgan McGuire, and Alla Sheffer (* equal contribution)</>,
        venue: "Eurographics",
        links: [
            {
                name: "Project Page",
                url: "https://www.cs.ubc.ca/labs/imager/tr/2025/fastatlas/",
            },
        ],
        headerImageSrc: FastAtlasHeading,
        summary: <>Texture-space shading (TSS) methods decouple shading and rasterization, allowing shading to be performed at a different framerate and spatial resolution than rasterization. We propose <i>FastAtlas</i>, a novel atlasing method that runs entirely on the GPU and is fast enough to be performed at interactive rates per-frame. Our method combines new per-frame chart computation and parametrization strategies and an efficient general chart packing algorithm.</>,
        technologies: ["C++", "OpenGL"],
    },
    {
        id: "raytracer",
        name: "Raytracer",
        start: new Date(2024, 9),
        finished: "present",
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "GitHub",
                url: "https://github.com/zifgu/raytracer",
            },
        ],
        headerImageSrc: RaytracerHeading,
        summary: <>A C++ ray tracer, based on the <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"><i>Ray Tracing in One Weekend</i></a> series.</>,
        technologies: ["C++", "Microsoft Unit Testing Framework for C++"],
    },
    {
        id: "rl-cutter",
        name: "Texture Atlas Refinement with Deep Reinforcement Learning",
        start: new Date(2024, 2),
        finished: new Date(2024, 3),
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "Technical Report",
                url: "https://drive.google.com/file/d/1bb7yJaEMwwfSH5zRnfyzc8WcNa2pcTrf/view?usp=sharing",
            },
        ],
        headerImageSrc: RLCutterHeading,
        summary: <>
            A deep reinforcement learning algorithm that optimizes the packing efficiency of texture atlases via sequential cutting and repacking. This problem is inspired by the paper <a href="https://www.cs.ubc.ca/labs/imager/tr/2018/BoxCutter/"><i>Box Cutter: Atlas Refinement for Efficient Packing via Void Elimination</i></a>.
        </>,
        technologies: ["Python", "PyTorch", "OpenAI Gymnasium", "TensorBoard", "C++", "pybind11"],
    },
    {
        id: "unicorns",
        name: "Visualizing Unicorns",
        start: new Date(2023, 0),
        finished: new Date(2023, 3),
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "View",
                url: "https://www.students.cs.ubc.ca/~cs-447/23Jan/fame/projects/g30/index.html",
            },
        ],
        headerImageSrc: UnicornsHeading,
        summary: "A dashboard of interactive visualizations exploring the 1,200 global unicorn companies (as of 2023) with D3.js.",
        technologies: ["JavaScript", "D3"],
    },
    {
        id: "zen-zone",
        name: "ZenZone 3D",
        start: new Date(2023, 2),
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "View",
                url: "https://zen-zone.vercel.app/",
            },
            {
                name: "GitHub",
                url: "https://github.com/zifgu/cmdf-2023",
            },
            {
                name: "Project Page",
                url: "https://devpost.com/software/zenzone-3d",
            },
        ],
        headerImageSrc: ZenZoneHeading,
        summary: "A browser-based 3D game for mental wellness that uses AI to help reframe worries. Built for the cmd-f 2023 hackathon.",
        technologies: ["JavaScript", "React", "Node.js", "Express"],
    },
    // {
    //     id: "regex-reader",
    //     name: "Regex Reader",
    //     start: new Date(2023, 2),
    //     finished: new Date(2023, 3),
    //     affiliation: ProjectAffiliation.Personal,
    //     links: [
    //         {
    //             name: "GitHub",
    //             url: "https://github.com/zifgu/regex-reader",
    //         },
    //     ],
    //     headerImageSrc: PersonalWebsiteHeading,
    //     summary: "A regular expression parser and evaluation engine written in Prolog.",
    //     technologies: ["Prolog"],
    // },
    // {
    //     id: "image-blender",
    //     name: "Image Blender",
    //     start: new Date(2023, 0),
    //     finished: new Date(2023, 1),
    //     affiliation: ProjectAffiliation.Personal,
    //     links: [
    //         {
    //             name: "GitHub",
    //             url: "https://github.com/zifgu/cpsc312-project-1",
    //         },
    //         {
    //             name: "Project Page",
    //             url: "https://wiki.ubc.ca/Course:CPSC312-2023-Image-Blending",
    //         }
    //     ],
    //     headerImageSrc: ImageBlenderHeading,
    //     summary: "A Haskell command-line tool to blend local or online images using Laplacian pyramids.",
    //     technologies: ["Haskell"],
    // },
    {
        id: "tapestry-tool",
        name: "Tapestry Tool",
        start: new Date(2022, 4),
        finished: new Date(2022, 7),
        affiliation: ProjectAffiliation.Professional,
        links: [
            {
                name: "Project Page",
                url: "https://www.home.tapestry-tool.com/",
            },
        ],
        headerImageSrc: TapestryHeading,
        summary: <>
            <p>Tapestry Tool is an open-source Microsoft- and TLEF-funded online learning platform used at UBC.</p>
            <p>I developed features to integrate UBC Kaltura for video content and handle migration of existing videos. I also worked on expanding import-export functionality and building new interactive features for Tapestry Tool 3.0.</p>
        </>,
        technologies: ["JavaScript", "Vue", "PHP", "MySQL", "CSS/SCSS", "WordPress", "Cypress", "GitHub Actions"],
    },
    {
        id: "oer-geomatics",
        name: "OER Geomatics",
        start: new Date(2021, 8),
        finished: new Date(2022, 3),
        affiliation: ProjectAffiliation.Professional,
        links: [
            {
                name: "View",
                url: "https://ubcemergingmedialab.github.io/geomatics-textbook/viz/geodesy-viz/",
            },
            {
                name: "Project Page",
                url: "https://eml.ubc.ca/projects/oer-geomatics/",
            },
        ],
        technologies: ["JavaScript", "Three.js", "React"],
        summary: <>
            <p>The OER Geomatics project is an interactive online geomatics textbook for UBC and beyond developed using open educational resources (OER).</p>
            <p>I built a 3D visualization tool using Three.js for the exploration of different models of Earth.</p>
        </>,
        headerImageSrc: OERGeomaticsHeading,
    },
    {
        id: "codenames",
        name: "Codenames",
        start: new Date(2022, 11),
        finished: new Date(2023, 0),
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "GitHub",
                url: "https://github.com/zifgu/codenames",
            },
        ],
        headerImageSrc: CodenamesMultiplayerHeading,
        summary: <>A web app for playing <a href="https://en.wikipedia.org/wiki/Codenames_(board_game)">Codenames</a> online with real-time multiplayer support.</>,
        technologies: ["TypeScript", "React", "Node.js", "Socket.IO", "Bootstrap"],
    },
    // {
    //     id: "me-an-empath",
    //     name: "Me, An Empath",
    //     start: new Date(2022, 2),
    //     affiliation: ProjectAffiliation.Personal,
    //     links: [
    //         {
    //             name: "View",
    //             url: "https://me-an-empath.netlify.app/",
    //         },
    //         {
    //             name: "GitHub",
    //             url: "https://github.com/zifgu/cmd-f-2022",
    //         },
    //         {
    //             name: "Project Page",
    //             url: "https://devpost.com/software/me-an-empath",
    //         },
    //     ],
    //     technologies: ["JavaScript", "React", "Bootstrap", "Figma", "OpenAI"],
    //     summary: "An NLP-based web app that analyzes the emotion in text messages and suggests responses. Created for the cmd-f 2022 hackathon.",
    //     headerImageSrc: EmpathHeading,
    // },
    // {
    //     id: "got-room",
    //     name: "Got Room For One More?",
    //     start: new Date(2022, 8),
    //     affiliation: ProjectAffiliation.Personal,
    //     links: [
    //         {
    //             name: "GitHub",
    //             url: "https://github.com/iForgot321/sap-hackathon",
    //         },
    //     ],
    //     technologies: ["JavaScript", "React", "PostgreSQL", "Node.js", "Heroku"],
    //     summary: "A web app that helps SAP employees find and enjoy office amenities together. Created for the 2022 SAP Invitational Hackathon.",
    //     headerImageSrc: SAPAppHeading,
    // },
    // {
    //     id: "insight-ubc",
    //     name: "Insight UBC",
    //     start: new Date(2021, 8),
    //     finished: new Date(2022, 11),
    //     affiliation: ProjectAffiliation.Personal,
    //     links: [],
    //     headerImageSrc: InsightUBCHeading,
    //     summary: "A REST API and client for custom queries over UBC course datasets.",
    //     technologies: ["TypeScript", "Node.js", "Express"],
    // },
    // {
    //     id: "fanworks-site",
    //     name: "Fanworks Site",
    //     start: new Date(2021, 4),
    //     finished: new Date(2021, 5),
    //     affiliation: ProjectAffiliation.Personal,
    //     links: [],
    //     headerImageSrc: FanworksSiteHeading,
    //     summary: "A platform for sharing fan-created stories and artworks, inspired by Archive of Our Own.",
    //     technologies: ["Java", "SQL", "Oracle Database", "HTML/CSS"],
    // },
    {
        id: "transduction",
        name: "Transduction",
        start: new Date(2020, 9),
        finished: new Date(2021, 7),
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "Trailer",
                url: "https://youtu.be/gGJgE94JCxg",
            },
            {
                name: "Project Page",
                url: "https://www.ubcgamedev.com/transduction",
            },
        ],
        summary: "A 3D puzzle game about exploring mindscapes to crack a case – with a cooperative multiplayer twist. Developed using Unity and C#.",
        technologies: ["Unity", "C#"],
        headerImageSrc: TransductionHeading,
    },
    {
        id: "timetable-generator",
        name: "Timetable Generator",
        start: new Date(2020, 8),
        finished: new Date(2020, 11),
        affiliation: ProjectAffiliation.Personal,
        links: [
            {
                name: "GitHub",
                url: "https://github.com/zifgu/cpsc210-project",
            },
        ],
        headerImageSrc: TimetableCalculatorHeading,
        summary: "A Java desktop app for automatically creating conflict-free course schedules from UBC courses.",
        technologies: ["Java", "Java Swing"],
    },
]

export function groupProjectsByAffiliation(): {[key in ProjectAffiliation] : ProjectInfo[]} {
    let result: {[key in ProjectAffiliation] : ProjectInfo[]} = {
        [ProjectAffiliation.Publication]: [],
        [ProjectAffiliation.Professional]: [],
        [ProjectAffiliation.Personal]: [],
    };

    for (const project of projects) {
        result[project.affiliation].push(project);
    }

    return result;
}

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