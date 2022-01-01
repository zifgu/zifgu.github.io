import {getSocials} from "../data/contact";
import {SocialMediaLink} from "./SocialMediaLink";
import React from "react";

export function SocialMediaList() {
    const socials = getSocials();

    return (
        <div className="flex-column">
            {
                socials.map((socialMedia) => {
                    return (
                        <div>
                            <SocialMediaLink socialMedia={socialMedia} key={socialMedia.site}/>
                        </div>
                    );
                })
            }
        </div>
    );
}