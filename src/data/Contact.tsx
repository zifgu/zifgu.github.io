import { FaLinkedinIn } from "react-icons/fa";
import { SocialMedia } from "./SocialMedia";
import { FiGithub } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

const socialMedia: SocialMedia[] = [
    {
        site: "GitHub",
        icon: FiGithub,
        link: "https://github.com/zifgu",
        contactName: "zifgu",
    },
    {
        site: "Email",
        icon: IoMail,
        link: "mailto: gfzting@gmail.com",
        contactName: "gfzting@gmail.com",
    },
    {
        site: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/floria-gu-a60a52200/",
        contactName: "Floria Gu",
    },
]

export function getSocials(): SocialMedia[] {
    return socialMedia;
}