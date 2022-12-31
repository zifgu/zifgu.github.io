import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IconType } from "react-icons";

export interface SocialMedia {
    site: string,
    icon: IconType,
    link: string,
    contactName: string,
    includeInHeader: boolean,
}

const socialMedia: SocialMedia[] = [
    {
        site: "GitHub",
        icon: FaGithub,
        link: "https://github.com/zifgu",
        contactName: "zifgu",
        includeInHeader: true,
    },
    {
        site: "Email",
        icon: IoMail,
        link: "mailto: gfzting@gmail.com",
        contactName: "gfzting@gmail.com",
        includeInHeader: true,
    },
    {
        site: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/floria-gu-a60a52200/",
        contactName: "Floria Gu",
        includeInHeader: true,
    },
]

export function getSocialsInHeader(): SocialMedia[] {
    return socialMedia.filter((contact) => contact.includeInHeader);
}

export function getSocials(): SocialMedia[] {
    return socialMedia;
}