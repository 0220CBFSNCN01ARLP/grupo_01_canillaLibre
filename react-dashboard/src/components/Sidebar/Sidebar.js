import React from "react";
import SidebarBrand from "./SidebarBrand";
import SidebarDivider from "./SidebarDivider";

export default function Sidebar() {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            <SidebarBrand />

            <SidebarDivider />

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <SidebarDivider />

            <div className="sidebar-heading">Acciones</div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Páginas</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Gráficos</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tablas</span>
                </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>
    );
}
