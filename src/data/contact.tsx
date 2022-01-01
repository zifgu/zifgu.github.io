import {FaEnvelope, FaGithub, FaLinkedinIn} from "react-icons/fa";
import React from "react";
import {SocialMedia} from "./SocialMedia";

const socialMedia: SocialMedia[] = [
    {
        site: "GitHub",
        icon: <FaGithub size={20}/>,
        link: "https://github.com/zifgu",
        contactName: "zifgu",
    },
    {
        site: "Email",
        icon: <FaEnvelope size={20}/>,
        link: "mailto: gfzting@gmail.com",
        contactName: "gfzting@gmail.com",
    },
    {
        site: "LinkedIn",
        icon: <FaLinkedinIn size={20}/>,
        link: "https://www.linkedin.com/in/floria-gu-a60a52200/",
        contactName: "Floria Gu",
    },
]

export function getSocials(): SocialMedia[] {
    return socialMedia;
}

export function getSiteSocials(site: string): SocialMedia | undefined {
    return socialMedia.find((value) => {
        return value.site.localeCompare(site, undefined, {sensitivity: "accent"});
    });
}