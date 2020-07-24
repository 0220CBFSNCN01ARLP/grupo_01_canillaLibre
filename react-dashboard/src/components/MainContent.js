import React from "react";
import Avatar from "../assets/images/dummy-avatar.jpg"
import Product from "../assets/images/asadoyquilmes.jpg"

export default function MainContent() {
    return (
        <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                >
                    <i className="fa fa-bars"></i>
                </button>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            id="alertsDropdown"
                        >
                            <i className="fas fa-bell fa-fw"></i>
                            <span className="badge badge-danger badge-counter">
                                3+
                            </span>
                        </a>
                    </li>

                    <li className="nav-item dropdown no-arrow mx-1">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            id="messagesDropdown"
                        >
                            <i className="fas fa-envelope fa-fw"></i>
                            <span className="badge badge-danger badge-counter">
                                7
                            </span>
                        </a>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    <li className="nav-item dropdown no-arrow">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            id="userDropdown"
                        >
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                Cosme Fulanito
                            </span>
                            <img
                                className="img-profile rounded-circle"
                                src={Avatar}
                                width="60"
                            />
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">• Canilla Libre • Dashboard</h1>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Productos en database
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                             135 {/* modificar dato con api */}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Cantidad de Productos
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            $546.456 {/* modificar dato con api */}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Cantidad de Usuarios
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            38 {/* modificar dato con api */}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Último producto en la database
                                </h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                        style={{ width: "25rem" }}
                                        src={Product}
                                        alt="image dummy"
                                    />
                                </div>
                                <p>
                                Luego de lanzar de manera exclusiva la variedad roja en el Restaurant 
                                del Parque Cervecero y en los Clásicos (bares propios de la marca), 
                                Quilmes escuchó a sus consumidores que la aclamaban y sumó a su portfolio 
                                la nueva “Red Lager”. Ahora, los amantes de la cerveza roja, podrán 
                                encontrarla en todo el país y al mismo precio que Quilmes Clásica 
                                y el resto de las variedades.
                                </p>
                                <a target="_blank" rel="nofollow" href="/">
                                    Ver detalle del producto
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Categorías en database
                                </h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-warning text-white shadow">
                                            <div className="card-body">
                                                Categoría 01
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-warning text-white shadow">
                                            <div className="card-body">
                                                Categoría 02
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-warning text-white shadow">
                                            <div className="card-body">
                                                Categoría 03
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-warning text-white shadow">
                                            <div className="card-body">
                                                Categoría 04
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-warning text-white shadow">
                                            <div className="card-body">
                                                Categoría 05
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-warning text-white shadow">
                                            <div className="card-body">
                                                Categoría 06
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
