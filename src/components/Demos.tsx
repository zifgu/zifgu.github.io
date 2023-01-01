import React from "react";
import Figure from "react-bootstrap/Figure";

export function DemoVideo(props: {src: string, caption?: string}) {
    return (
        <div className="mb-3">
            <div className="ratio ratio-16x9 mb-2">
                <iframe src={props.src}
                        allowFullScreen
                        title={"YouTube video player"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
            <figcaption>
                {props.caption}
            </figcaption>
        </div>
    );
}

export function DemoImage(props: {src: string, caption?: string}) {
    return (
        <Figure>
            <Figure.Image src={props.src}/>
            <figcaption>{props.caption}</figcaption>
        </Figure>
    );
}