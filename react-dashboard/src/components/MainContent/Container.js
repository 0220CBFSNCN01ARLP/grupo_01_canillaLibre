import React, { Component } from "react";
import InfoCard from "./InfoCard";
import InfoLastProd from "./InfoLastProduct";
import BigCard from "./BigCard";
import ProductInfo from "./ProductInfo";

import {
    getProducts,
    getUsers,
    getLastProduct,
    getBebidas,
    getInsumos,
    getCursos,
    getVendedores,
} from "../../getDataFromServer";

class Container extends Component {
    state = {
        products: [],
        users: [],
        ultimoProduct: [],
        getBebidas: [],
        getInsumos: [],
        getCursos: [],
        getVendedores: [],
    };

    async updateState() {
        console.log("...esperando");

        const products = await getProducts();
        this.setState({ products });

        const users = await getUsers();
        this.setState({ users });

        const ultimoProduct = await getLastProduct();
        this.setState({ ultimoProduct });

        const bebidas = await getBebidas();
        this.setState({ bebidas });

        const insumos = await getInsumos();
        this.setState({ insumos });

        const cursos = await getCursos();
        this.setState({ cursos });
        const usuarios = await getVendedores();
        this.setState({ usuarios });
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
        const lastProd = this.state.ultimoProduct;
        const totalDeBebidas = this.state.bebidas;
        const totalDeInsumos = this.state.insumos;
        const totalDeCursos = this.state.cursos;
        const totalDeVendedores = this.state.usuarios;

        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">
                        • Canilla Libre • Dashboard
                    </h1>
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
                        icon="fa-dollar-sign"
                    />
                    <InfoCard
                        title="Usuarios"
                        color="warning"
                        value={usersCounts}
                        icon="fa-user"
                    />
                </div>
                <div className="row">
                    <BigCard title="Última Publicación">
                        <InfoLastProd
                            value={lastProd.nombre}
                            img={lastProd.imagen}
                            desc={lastProd.descripcion}
                        />
                    </BigCard>
                    <BigCard title="Info Resumen">
                        <div className="row">
                            <ProductInfo
                                title="Bebidas"
                                icon="fa-beer"
                                number={totalDeBebidas}
                            />
                            <ProductInfo
                                title="Insumos"
                                icon="fa-boxes"
                                number={totalDeInsumos}
                            />
                            <ProductInfo
                                title="Cursos"
                                icon="fa-graduation-cap"
                                number={totalDeCursos}
                            />
                            <ProductInfo
                                title="Vendedores"
                                icon="fa-users"
                                number={totalDeVendedores}
                            />
                        </div>
                    </BigCard>
                </div>
            </div>
        );
    }
}

export default Container;
