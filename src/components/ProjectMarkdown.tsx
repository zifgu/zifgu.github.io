import { DemoImage, DemoVideo } from "./Demos";
import ReactMarkdown from "react-markdown";
import remarkUnwrapImages from "remark-unwrap-images";
import React, { ReactNode } from "react";
import { InView } from "react-intersection-observer";

function generateId(headingText: any): string {
    // TODO: is this the best way to generate an id?
    return headingText.toString().replace(" ", "_");
}

function Heading(props: { as: any, id?: string, children: ReactNode, notifyEnteredView: (id: string) => void }) {
    const Component = props.as;
    const headingId = props.id ?? generateId(props.children);

    return (
        <InView
            onChange={(inView: boolean) => {
                if (inView) {
                    props.notifyEnteredView(headingId);
                }
            }}
        >
            <Component id={headingId}>
                {props.children}
            </Component>
        </InView>
    );
}

export function ProjectMarkdown(props: { markdown: string, notifyEnteredView: (id: string) => void }) {
    const renderImageOrVideo = ({...imgProps}) => {
        if (imgProps.src && imgProps.alt) {
            if (imgProps.alt.startsWith("v:")) {
                // Create an embedded video instead
                return <DemoVideo src={imgProps.src} caption={imgProps.alt.slice(2).trim()} />;
            } else {
                return <DemoImage src={imgProps.src} caption={imgProps.alt} />;
            }
        }

        return null;
    };

    return (
        <ReactMarkdown
            components={{
                h1: ({children}) => <Heading as={"h4"} notifyEnteredView={props.notifyEnteredView}>{children}</Heading>,
                h2: ({children}) => <Heading as={"h5"} notifyEnteredView={props.notifyEnteredView}>{children}</Heading>,
                h3: ({children}) => <Heading as={"h6"} notifyEnteredView={props.notifyEnteredView}>{children}</Heading>,
                img: renderImageOrVideo,
            }}
            remarkPlugins={[remarkUnwrapImages]}
        >
            {props.markdown}
        </ReactMarkdown>
    );
}