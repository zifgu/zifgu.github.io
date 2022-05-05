import { ProjectInfo } from "./ProjectInfo";
import TransductionHeading from "./images/heading/TransductionHeading.png";
import FanworksSiteHeading from "./images/heading/FanworksSiteHeading.png";
import TimetableCalculatorHeading from "./images/heading/TimetableCalculatorHeading.png";
import PersonalWebsiteHeading from "./images/heading/PersonalWebsiteHeading.png";
import CodenamesSingleplayerHeading from "./images/heading/CodenamesSingleplayerHeading.png";
import OERGeomaticsHeading from "./images/heading/OERGeomaticsHeading.png";

const projects: ProjectInfo[] = [
    {
        name: "Personal website",
        start: new Date(2021, 11),
        finished: "present",
        githubUrl: "https://github.com/zifgu/zifgu.github.io",
        technologies: ["React", "TypeScript", "Node.js", "Bootstrap", "HTML", "CSS", "GitHub Pages"],
        summary: "My personal website.",
        headerImageSrc: PersonalWebsiteHeading,
        discussion: (
            <>
                <p>
                    In December 2021, I wanted to try making a minimalistic personal website template, and built the main structure of this site
                    during the winter break.
                </p>
                <p>
                    I learned a great deal about developing with React during my first term at the Emerging Media Lab, and
                    I also found TypeScript and Bootstrap highly usable when creating my Codenames app project. I knew I
                    could use create-react-app plus React Router to create multiple pages. However, since I did not know
                    if GitHub Pages would support the dynamic React framework, I looked into a variety of ways to render
                    this content static. Eventually, I decided on <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> because I did not expect to need extensive interactivity for a personal website, and this solution
                    also required very little configuration.
                </p>
                <p>
                    This was my first time setting up a project of this scale from scratch, and I learned some useful
                    lessons about folder structure by observing other personal website code on GitHub. Notably, <a
                    href="https://github.com/mldangelo/personal-site">Michael D'Angelo's</a> personal website template
                    showed me how to isolate personal information from the website’s building blocks, which I found I
                    could easily achieve by importing images and text as JavaScript constants, with the help of Webpack.
                    This allowed me to write independent descriptions (like this one!) which different components would
                    then import and read.
                </p>
                <p>
                    I picked up many other useful techniques, like how to make a navbar work with React Router, and how
                    to use the React prop <code>children</code> and composition of components to cleanly implement consistent layout
                    and styling across multiple pages.
                </p>
                <p>
                    To get some of the visual effects I wanted, I also had to learn CSS; although I am yet far from
                    fluent, I now have a much better understanding of CSS syntax and what it is capable of.
                </p>
                <p>
                    Future improvements I would love to make:
                </p>
                <ul>
                    <li>Animations and transitions</li>
                    <li>A way to extract long text content, like this project description, into a separate text file, so
                        it doesn’t need to be kept in a JavaScript file
                    </li>
                    <li>A contact page</li>
                </ul>
                <p>
                    This website is deployed on GitHub pages with the help of the gh-pages package. I hope you’ll stick around and explore some of the other things I've made.
                </p>
            </>

        ),
        lessonsLearned: [
            "How to deploy to GitHub pages using gh-pages",
            "How to use React Router to create a single page app",
            <>How to use the React prop <code>children</code> and compose components</>,
            "How to write basic CSS stylesheets and include them in React components",
            "How to import images and constants with the help of webpack",
        ],
    },
    {
        name: "Codenames App",
        start: new Date(2021, 11),
        finished: new Date(2022, 0),
        technologies: ["React", "TypeScript", "Node.js", "Bootstrap", "HTML", "CSS"],
        summary: "A single page React app for playing the popular word-guessing game Codenames.",
        headerImageSrc: CodenamesSingleplayerHeading,
        videos: [
            {
                videoSrc: "https://www.youtube.com/embed/9YKPoHNEySI",
            }
        ]
    },
    {
        name: "Fanworks Site",
        start: new Date(2021, 4),
        finished: new Date(2021, 5),
        course: "CPSC 304: Introduction to Relational Databases",
        technologies: ["Java", "SQL", "Oracle Database", "Apache Tomcat", "Java Servlets", "HTML", "CSS"],
        summary: "A Java web application where users can search for stories and artworks, post their own works, and" +
            " interact with others' works, similar to Archive of Our Own.",
        headerImageSrc: FanworksSiteHeading,
        team: 3,
    },
    {
        name: "Timetable Generator",
        start: new Date(2020, 8),
        finished: new Date(2020, 11),
        technologies: ["Java", "Swing"],
        course: "CPSC 210: Software Construction",
        summary: "A Java desktop application to help students automatically create their course timetables.",
        headerImageSrc: TimetableCalculatorHeading,
        videos: [
            {
                videoSrc: "https://www.youtube.com/embed/UwZz1zgA9BQ",
            }
        ],
    },
    {
        name: "OER Geomatics project @ UBC Emerging Media Lab",
        start: new Date(2021, 8),
        finished: "present",
        technologies: ["React", "JavaScript", "WebGL", "Three.js", "Node.js"],
        summary: <>
            As a Work Learn at the Emerging Media Lab, I worked on an open source WebGL 3D visualization for teaching geomatics students about three different models of Earth.
            Find out more about the OER Geomatics project on <a href="https://eml.ubc.ca/projects/oer-geomatics/">the EML website</a>.
        </>,
        headerImageSrc: OERGeomaticsHeading,
    },
    {
        name: "Transduction",
        start: new Date(2020, 9),
        finished: new Date(2021, 7),
        technologies: ["Unity", "C#"],
        summary: "A first-person 3D puzzle game for two players, made as part of the UBC Game Development Club.",
        team: 11,
        headerImageSrc: TransductionHeading,
        videos: [
            {
                videoSrc: "https://www.youtube.com/embed/HBAudrEJzps",
            },
            {
                videoSrc: "https://www.youtube.com/embed/_e0DnHZnvhg",
            }
        ],
    }
]

export function getAllProjects(): ProjectInfo[] {
    return projects;
}

export function getProject(name: string | undefined): ProjectInfo | undefined {
    if (!name) {
        return undefined;
    }

    return projects.find((project) => {
        return project.name === name
    });
}