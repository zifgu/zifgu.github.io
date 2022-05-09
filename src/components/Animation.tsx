import React, { PropsWithChildren, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { Globals } from "react-spring";

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

export function SetAnimationPreference() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion)").matches);

    useEffect(() => {
        const handlePreferenceChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);

        const mediaQuery = window.matchMedia("(prefers-reduced-motion)");

        mediaQuery.addEventListener("change", handlePreferenceChange);
        return () => mediaQuery.removeEventListener("change", handlePreferenceChange);
    }, []);

    useEffect(() => {
        Globals.assign({
            skipAnimation: prefersReducedMotion,
        });
    }, [prefersReducedMotion]);

    return null;
}