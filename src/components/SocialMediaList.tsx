import {getSocials} from "../data/contact";
import {SocialMediaLink} from "./SocialMediaLink";
import React from "react";

export function SocialMediaList() {
    const socials = getSocials();

    return (
        <ul className="list-unstyled">
            {
                socials.map((socialMedia) => {
                    return (
                        <SocialMediaLink socialMedia={socialMedia} key={socialMedia.site}/>
                    );
                })
            }
        </ul>
    );
}