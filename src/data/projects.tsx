import {ProjectInfo} from "./ProjectInfo";
import TransductionHeading from "./images/TransductionHeading.png";
import FanworksSiteHeading from "./images/FanworksSiteHeading.png";
import TimetableCalculatorHeading from "./images/TimetableCalculatorHeading.png";
import PersonalWebsiteHeading from "./images/PersonalWebsiteHeading.png";
import CodenamesSingleplayerHeading from "./images/CodenamesSingleplayerHeading.png";

const projects: ProjectInfo[] = [
    {
        name: "Personal website",
        start: new Date(2021, 11),
        githubUrl: "https://github.com/zifgu/zifgu.github.io",
        technologies: ["React", "TypeScript", "Bootstrap", "HTML/CSS", "GitHub Pages"],
        summary: "My personal website.",
        headerImageSrc: PersonalWebsiteHeading,
        discussion: (
            <p>
                Mauris scelerisque sagittis nibh, a rhoncus risus tempor nec. Morbi pellentesque gravida ligula, id
                sollicitudin velit condimentum ut. Mauris tempor eleifend rhoncus. Integer vitae lectus consequat,
                commodo quam eget, faucibus lorem. Aenean in dictum turpis, ut scelerisque quam. Nulla sed lobortis
                odio, in porttitor augue. Nulla et hendrerit ante. Vestibulum a leo eu nulla tristique vulputate. Fusce
                finibus hendrerit massa vitae sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Maecenas sit amet consequat dui. Phasellus vehicula vulputate venenatis.

                Nullam interdum, libero nec lobortis aliquam, risus nibh aliquam ipsum, non tempor mauris nulla at eros.
                Curabitur ac ante ligula. Phasellus ultrices nunc vel congue blandit. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. In egestas metus nec urna sagittis
                consectetur non sit amet nisi. Maecenas felis ante, aliquet a neque et, vulputate congue ligula. Quisque
                sed tincidunt justo, sit amet consequat ex. Integer malesuada, elit non finibus porta, elit ante semper
                leo, quis interdum velit mi tristique tellus. Mauris pulvinar risus quam, et blandit sapien aliquet ac.
                Etiam sed pretium ipsum. Fusce et volutpat eros, vel bibendum arcu. Mauris vulputate id felis at
                feugiat. Integer sodales vestibulum condimentum. Praesent est orci, egestas non magna tempor, ultricies
                varius sem.

                Duis placerat ultricies erat, sit amet ornare ligula dapibus vel. Vivamus at odio quam. Duis maximus
                tincidunt ligula eget ultrices. Praesent rutrum, nisl in eleifend ornare, orci elit facilisis ante, ut
                sodales dui risus blandit lectus. Proin sem lacus, egestas et iaculis sed, mattis id purus. Pellentesque
                et quam velit. Sed fringilla, ipsum non porta semper, sem lorem egestas enim, ac molestie sapien sem
                quis nisl. Suspendisse tempus vestibulum fermentum. Duis hendrerit metus a mi porta malesuada. Sed ante
                velit, maximus ullamcorper auctor in, cursus a orci. Vestibulum nec ante lorem.
            </p>
        ),
        lessonsLearned: ["How to deploy to GitHub pages using gh-pages", "How to use React Router"],
        videos: [],
        images: [],
    },
    {
        name: "Fanworks site",
        start: new Date(2021, 4),
        finished: new Date(2021, 5),
        course: "CPSC 304: Introduction to Relational Databases",
        technologies: ["Java", "SQL", "Oracle Database", "Apache Tomcat", "Java Servlet", "JSP", "HTML/CSS"],
        summary: "A Java web application that hosts fan stories and artworks using a database.",
        headerImageSrc: FanworksSiteHeading,
        team: 3,
    },
    {
        name: "Timetable generator",
        start: new Date(2020, 8),
        finished: new Date(2020, 11),
        technologies: ["Java"],
        course: "CPSC 210: Software Construction",
        summary: "A Java desktop application to help students automatically arrange their course timetables.",
        headerImageSrc: TimetableCalculatorHeading,
    },
    {
        name: "Software development for ...",
        start: new Date(2021, 8),
        finished: "present",
        technologies: [],
        summary: "",
    },
    {
        name: "Codenames app",
        start: new Date(2021, 11),
        technologies: ["React", "TypeScript", "Bootstrap", "HTML/CSS"],
        summary: "A single page React app for playing the popular party game Codenames.",
        headerImageSrc: CodenamesSingleplayerHeading,
    },
    {
        name: "Transduction",
        start: new Date(2020, 9),
        finished: new Date(2021, 7),
        technologies: ["Unity", "C#"],
        summary: "A first-person 3D puzzle game for two players, made as part of the UBC Game Development Club.",
        team: 11,
        discussion: (
            <><p>
                Mauris scelerisque sagittis nibh, a rhoncus risus tempor nec. Morbi pellentesque gravida ligula, id
                sollicitudin velit condimentum ut. Mauris tempor eleifend rhoncus. Integer vitae lectus consequat,
                commodo quam eget, faucibus lorem. Aenean in dictum turpis, ut scelerisque quam. Nulla sed lobortis
                odio, in porttitor augue. Nulla et hendrerit ante. Vestibulum a leo eu nulla tristique vulputate. Fusce
                finibus hendrerit massa vitae sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Maecenas sit amet consequat dui. Phasellus vehicula vulputate venenatis.
            </p><p>
                Nullam interdum, libero nec lobortis aliquam, risus nibh aliquam ipsum, non tempor mauris nulla at eros.
                Curabitur ac ante ligula. Phasellus ultrices nunc vel congue blandit. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. In egestas metus nec urna sagittis
                consectetur non sit amet nisi. Maecenas felis ante, aliquet a neque et, vulputate congue ligula. Quisque
                sed tincidunt justo, sit amet consequat ex. Integer malesuada, elit non finibus porta, elit ante semper
                leo, quis interdum velit mi tristique tellus. Mauris pulvinar risus quam, et blandit sapien aliquet ac.
                Etiam sed pretium ipsum. Fusce et volutpat eros, vel bibendum arcu. Mauris vulputate id felis at
                feugiat. Integer sodales vestibulum condimentum. Praesent est orci, egestas non magna tempor, ultricies
                varius sem.
            </p><p>
                Duis placerat ultricies erat, sit amet ornare ligula dapibus vel. Vivamus at odio quam. Duis maximus
                tincidunt ligula eget ultrices. Praesent rutrum, nisl in eleifend ornare, orci elit facilisis ante, ut
                sodales dui risus blandit lectus. Proin sem lacus, egestas et iaculis sed, mattis id purus. Pellentesque
                et quam velit. Sed fringilla, ipsum non porta semper, sem lorem egestas enim, ac molestie sapien sem
                quis nisl. Suspendisse tempus vestibulum fermentum. Duis hendrerit metus a mi porta malesuada. Sed ante
                velit, maximus ullamcorper auctor in, cursus a orci. Vestibulum nec ante lorem.
            </p></>
        ),
        headerImageSrc: TransductionHeading,
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