import React from "react";

export default function ApplicationLogo(props) {
    return (
        <React.Fragment>
            <img src="/images/logo.png" className={`${props?.className}`} />
        </React.Fragment>
    );
}
