export function ProjectTechnologies(props: {technologies: string[]}) {
    return (
        <p className="text-dark my-2">
            <i>Technologies: </i>
            {" "}{formList(props.technologies)}
        </p>
    );
}

function formList(words: string[]): string {
    return words.join(", ");
}