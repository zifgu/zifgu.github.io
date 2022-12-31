import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface SocialMedia {
    site: string,
    icon: IconDefinition,
    link: string,
    contactName: string,
    includeInHeader: boolean,
}

const socialMedia: SocialMedia[] = [
    {
        site: "GitHub",
        icon: faGithub,
        link: "https://github.com/zifgu",
        contactName: "zifgu",
        includeInHeader: true,
    },
    {
        site: "Email",
        icon: faEnvelope,
        link: "mailto: gfzting@gmail.com",
        contactName: "gfzting@gmail.com",
        includeInHeader: true,
    },
    {
        site: "LinkedIn",
        icon: faLinkedin,
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