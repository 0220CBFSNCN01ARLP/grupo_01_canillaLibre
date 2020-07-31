import React, { Component } from "react";
import Product from "../../assets/images/asadoyquilmes.jpg"
import InfoCard from "./InfoCard";

import {
    getProducts,
    getUsers
} from "../../getDataFromServer";

class Container extends Component{
    state = {
        products: [],
        users: []
    }

    async updateState(){
        console.log("...esperando");
        const products = await getProducts();
            this.setState(
                {products}
            );
        const users = await getUsers();
            this.setState(
                {users}
            );
    }

    stateInterval = null;

    componentDidMount() {
        this.updateState();
        this.stateInterval = setInterval(
            this.updateState.bind(this),
            10 * 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.stateInterval);
    }

    render() {
        const productsCount = this.state.products.length;
        const usersCounts = this.state.users.length;
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">• Canilla Libre • Dashboard</h1>
                </div>
                    <div className="row">

                        <InfoCard 
                            title="Productos"
                            color="warning"
                            value={productsCount}
                            icon="fa-beer"
                        />
                        <InfoCard 
                            title="Haberes de Producto"
                            color="warning"
                            value="150"
                            icon="fa-dollar"
                        />
                        <InfoCard 
                            title="Usuarios"
                            color="warning"
                            value={usersCounts}
                            icon="fa-user"
                        />

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
                                            style={{ width: "30rem" }}
                                            src={Product}
                                            alt="product-image"
                                        />
                                    </div>
                                    <p className="p-3 text-justify">
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
                                                <div className="card-body"><i class="fas fa-beer"></i>  Bebidas
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-warning text-white shadow">
                                                <div className="card-body"><i class="fas fa-boxes"></i>  Insumos
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-warning text-white shadow">
                                                <div className="card-body"><i class="fab fa-discourse"></i>  Cursos
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-warning text-white shadow">
                                                <div className="card-body"><i class="fas fa-users"></i>  Vendedores
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Container;