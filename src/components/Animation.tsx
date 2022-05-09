import React, { PropsWithChildren, useState } from "react";
import { InView } from "react-intersection-observer";

export function AnimateWhenReached({children, ...props}: PropsWithChildren<any>) {
    const [reached, setReached] = useState(false);

    return (
        <InView
            {...props}
            onChange={(inView) => {
                if (inView) {
                    setReached(true);
                }
            }}
        >
            {children(reached)}
        </InView>
    );
}

export function AnimateWhenHovered({children, ...props}: PropsWithChildren<any>) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            {children(hover)}
        </div>
    )
}