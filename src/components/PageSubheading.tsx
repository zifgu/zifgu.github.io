import React from "react";

export function PageSubheading(props: React.PropsWithChildren<any>) {
    return (
        <h5 className="border-top py-3">
            {props.children}
        </h5>
    );
}