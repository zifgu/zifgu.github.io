import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "../css/ProjectPage.css";

interface Heading {
    text: string | null,
    id: string,
}

function useHeadings(): Heading[] {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const headingElements: Heading[] = Array.from(document.querySelectorAll("h4, h5, h6"))
            .map((element) => ({
                text: element.textContent,
                id: element.id,
            }));

        setHeadings(headingElements);
    }, []);

    return headings;
}

export interface TableOfContentsRef {
    setActiveId: (id: string) => void,
}

export const TableOfContents = forwardRef((props: {}, ref: ForwardedRef<TableOfContentsRef>) => {
    const headings = useHeadings();
    const [activeId, setActiveId] = useState<string>();

    useImperativeHandle(ref, () => ({
        setActiveId: (id: string) => setActiveId(id),
    }), []);

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