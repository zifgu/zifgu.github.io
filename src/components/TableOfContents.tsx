import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import "../css/ProjectPage.css";

interface Heading {
    text: string | null,
    id: string,
}

export interface TableOfContentsRef {
    onHeadingChangedView: (id: string, inView: boolean) => void,
}

interface HeadingsMap {
    [id: string]: boolean,
}

export const TableOfContents = forwardRef((props: {content: string}, ref: ForwardedRef<TableOfContentsRef>) => {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const headingsVisibility = useRef<HeadingsMap>({});

    useEffect(() => {
        const headingElements: Heading[] = Array.from(document.querySelectorAll("h4, h5, h6"))
            .map((element) => ({
                text: element.textContent,
                id: element.id,
            }));

        setHeadings(headingElements);
    }, [props.content]);

    const [activeId, setActiveId] = useState<string>();

    useImperativeHandle(ref, () => ({
        onHeadingChangedView: (id: string, inView: boolean) => {
            headingsVisibility.current[id] = inView;

            const idsOfVisible: string[] = Object.keys(headingsVisibility.current)
                .filter((id) => headingsVisibility.current[id]);

            if (idsOfVisible.length === 1) {
                setActiveId(idsOfVisible[0]);
            } else if (idsOfVisible.length > 1) {
                idsOfVisible.sort((id1: string, id2: string) => comparePositionInArray(headings, id1, id2));
                setActiveId(idsOfVisible[0]);
            }
        },
    }), [headings]);

    return (
        <>
            {
                headings.map((heading: Heading) => (
                    heading.text ?
                        <TableOfContentsLink
                            key={heading.id}
                            text={heading.text}
                            id={heading.id}
                            active={heading.id === activeId}
                        />
                        : null
                ))
            }
        </>
    );
});

// Returns < 0 if id1 is before id2, and > 0 if id2 is before id1. Otherwise, returns 0
function comparePositionInArray(array: Heading[], id1: string, id2: string): number {
    for (let heading of array) {
        if (heading.id === id1) {
            return -1;
        } else if (heading.id === id2) {
            return 1;
        }
    }

    return 0;
}

function TableOfContentsLink(props: { text: string, id: string, active: boolean }) {
    const activeClass = props.active ? " project-page__active" : "";

    const scrollIntoView = () => {
        const element = document.querySelector(`#${props.id}`);

        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <span
            className={"my-2 d-none d-md-block link project-page__toc-link" + activeClass}
            onClick={scrollIntoView}
        >
            {props.text}
        </span>
    );
}