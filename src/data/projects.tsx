import {ProjectInfo} from "../pages/ProjectPage";

const projects: ProjectInfo[] = [
    {
        name: "Personal website",
        time: "December 2021",
        technologies: ["React", "Bootstrap"],
        description: "My personal website.",
        lessonsLearned: ["How to deploy to GitHub pages using gh-pages", "How to use React Router"],
        videos: [
            {
                videoSrc: "https://www.youtube.com/embed/Tn6-PIqc4UM",
                caption: (<b>Bold caption!</b>),
            }
        ],
        images: [
            {
                imageSrc: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                caption: "Free images!",
            },
        ],
    },
    {
        name: "Transduction",
        time: "October 2020 - August 2021",
        technologies: ["Unity", "C#"],
        description: "A game.",
    }
]

export function getAllProjects(): ProjectInfo[] {
    return projects;
}

export function getProject(name: string | undefined): ProjectInfo | undefined {
    if (!name) {
        return undefined;
    }

    return projects.find((project) => {return project.name === name});
}