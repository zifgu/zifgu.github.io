import {FaGithub} from "react-icons/fa";
import React from "react";
import "../../css/links.css";

export function ProjectGithubLink(props: {githubUrl: string}) {
    return (
        <span className="float-end" title="View on GitHub">
            <a href={props.githubUrl}
               className="text-decoration-none icon-link"
               target="_blank"
               rel="noopener noreferrer"
            >
                <FaGithub size={25}/>
            </a>
        </span>
    );
}