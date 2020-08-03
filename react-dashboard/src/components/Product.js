import React from "react";

import dummyProductImg from "../assets/images/product_dummy.svg";

const Product = (props) => {
    const { movie } = props;
    if (movie == null) {
        return (
            <div className="card-body">
                <p style={{ textAlign: "center" }}>
                    <i className="fas fa-circle-notch fa-spin"></i>
                </p>
            </div>
        );
    }
    return (
        <div className="card-body">
            <h2>{movie.title}</h2>
            <div className="text-center">
                <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "25rem" }}
                    src={movie.coverArt}
                    alt="image dummy"
                />
            </div>
            <ul>
                {movie.actors.map((actor) => {
                    return (
                        <li
                            key={actor.id}
                        >{`${actor.firstName} ${actor.lastName}`}</li>
                    );
                })}
            </ul>
            <p></p>
            <a target="_blank" href={`localhost:3000/movies/${movie.id}`}>
                View product detail
            </a>
        </div>
    );
};

export default Product;
