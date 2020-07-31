import React from "react";

export default function SidebarBrand(props) {
    const {label, icon} = props;
    return (
        <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
        >
            <div className="sidebar-brand-icon pl-3">
                <i className={`fas ${icon}`}></i>
            </div>
            <div className="sidebar-brand-text mx-3">{label}</div>
        </a>
    );
}
