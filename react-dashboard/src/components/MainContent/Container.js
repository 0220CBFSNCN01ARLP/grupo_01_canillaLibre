import React, { Component } from "react";
import Product from "../../assets/images/asadoyquilmes.jpg";
import InfoCard from "./InfoCard";
import InfoLastProd from "./InfoLastProduct";

import { getProducts, getUsers, getLastProduct } from "../../getDataFromServer";

class Container extends Component {
  state = {
    products: [],
    users: [],
    ultimoProduct: [],
  };

  async updateState() {
    console.log("...esperando");
    const products = await getProducts();
    this.setState({ products });
    const users = await getUsers();
    this.setState({ users });
    const ultimoProduct = await getLastProduct();
    this.setState({ ultimoProduct });
  }

  stateInterval = null;

  componentDidMount() {
    this.updateState();
    this.stateInterval = setInterval(this.updateState.bind(this), 10 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.stateInterval);
  }

  render() {
    const productsCount = this.state.products.length;
    const usersCounts = this.state.users.length;
    const lastProd = this.state.ultimoProduct;
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
          <InfoLastProd
            value={lastProd.nombre}
            img={lastProd.imagen}
            desc={lastProd.descripcion}
          />
        </div>
        <div className="row">
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
                      <i class="fas fa-beer"></i> Bebidas
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-warning text-white shadow">
                    <div className="card-body">
                      <i class="fas fa-boxes"></i> Insumos
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-warning text-white shadow">
                    <div className="card-body">
                      <i class="fab fa-discourse"></i> Cursos
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-warning text-white shadow">
                    <div className="card-body">
                      <i class="fas fa-users"></i> Vendedores
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
}

export default Container;
