import {ProjectSubheading} from "../../pages/ProjectPage";
import {ReactNode} from "react";

export function ProjectLessons(props: {lessons?: ReactNode[]}) {
    if (!props.lessons) {
        return null;
    }

    const lessonsList = props.lessons.map((lesson, index) => {
        return (
            <li key={index}>
                {lesson}
            </li>
        );
    });

    return (
        <div>
            <ProjectSubheading>What I learned:</ProjectSubheading>
            <ul>
                {lessonsList}
            </ul>
        </div>
    );
}