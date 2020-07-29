import React from "react";

export default function SidenavTitle(props) {

    const {label} = props;

    return (
            <span className="sidebar-heading">{label}</span>
    )
}
