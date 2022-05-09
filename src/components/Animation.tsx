import React, { PropsWithChildren, useState } from "react";
import { InView } from "react-intersection-observer";

export function AnimateWhenReached(props: PropsWithChildren<any>) {
    const [reached, setReached] = useState(false);

    return (
        <InView {...props} onChange={(inView) => {
            if (inView) {
                setReached(true);
            }
        }}>
            {props.children(reached)}
        </InView>
    );
}