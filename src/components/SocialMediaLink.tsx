import React from "react";
import {SocialMedia} from "../data/SocialMedia";

export function SocialMediaLink(props: {socialMedia: SocialMedia}) {
    return (
        <div className="my-1">
            <a href={props.socialMedia.link}
               className="link-secondary text-decoration-none"
               target="_blank"
               rel="noopener noreferrer"
            >
                {props.socialMedia.icon}&emsp;
                <span className="small">
                    {props.socialMedia.contactName}
                </span>
            </a>
        </div>
    );
}

// TODO
export function SocialMediaShortLink(props: {socialMedia: SocialMedia}) {
    return (
        <div>
            <a href={props.socialMedia.link}
               className="link-secondary text-decoration-none"
               target="_blank"
               rel="noopener noreferrer"
            >
                {props.socialMedia.site}
            </a>
        </div>
    );
}