import React from "react";

export function ProjectTechnologies(props: {technologies: string[]}) {
    const technologyElements = props.technologies.map((technology) => {
        return (
            <li key={technology} className="ps-3">
                {technology}
            </li>
        )
    });

    return (
        <ul className="list-unstyled">
            {technologyElements}
        </ul>
    );
}