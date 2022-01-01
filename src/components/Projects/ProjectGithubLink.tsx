import {FaGithub} from "react-icons/fa";
import React from "react";

export function ProjectGithubLink(props: {githubUrl: string}) {
    return (
        <div className="float-end">
            <a href={props.githubUrl}
               className="link-secondary text-decoration-none"
               target="_blank"
               rel="noopener noreferrer"
            >
                <FaGithub size={25}/>
            </a>
        </div>
    );
}