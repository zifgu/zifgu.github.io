import React from "react";
import {SocialMedia} from "../data/SocialMedia";
import "../css/links.css"

export function SocialMediaLink(props: {socialMedia: SocialMedia}) {
    return (
        <li className="my-1">
            <a href={props.socialMedia.link}
               className="text-decoration-none icon-link"
               target="_blank"
               rel="noopener noreferrer"
            >
                {props.socialMedia.icon}
                &emsp;
                <span className="small">
                    {props.socialMedia.contactName}
                </span>
            </a>
        </li>
    );
}

// TODO
export function SocialMediaShortLink(props: {socialMedia: SocialMedia}) {
    return (
        <div>
            <a href={props.socialMedia.link}
               className="text-decoration-none icon-link"
               target="_blank"
               rel="noopener noreferrer"
            >
                {props.socialMedia.site}
            </a>
        </div>
    );
}