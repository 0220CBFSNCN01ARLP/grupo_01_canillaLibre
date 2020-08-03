import React from "react";
import Product from "../../assets/images/asadoyquilmes.jpg";

const InfoLastProd = (props) => {
    return (
        <div className="row">
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            {props.value}
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: "30rem" }}
                                src={
                                    "http://localhost:3000/upload/" + props.img
                                }
                                alt="product-image"
                            />
                        </div>
                        <p className="p-3 text-justify">{props.desc}</p>
                        <a target="_blank" rel="nofollow" href="/">
                            Ver detalle del producto
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoLastProd;
