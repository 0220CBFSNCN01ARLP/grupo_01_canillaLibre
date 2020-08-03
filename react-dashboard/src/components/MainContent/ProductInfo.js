import React from "react";

const ProductInfo = (props) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-warning text-white shadow">
                <div className="card-body">
                    <i class="fas fa-beer"></i> {props.title}: {props.number}
                </div>
            </div>
        </div>
    );    
};

export default ProductInfo;
