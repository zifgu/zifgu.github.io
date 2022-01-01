import {ReactNode} from "react";
import {PageSubheading} from "../PageSubheading";

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
            <PageSubheading>What I learned:</PageSubheading>
            <ul>
                {lessonsList}
            </ul>
        </div>
    );
}