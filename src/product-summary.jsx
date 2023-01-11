import React, { useEffect } from "react";

const ProductSummary = ({ product }) => {
    return (
        <div className="product-summary">
            <div>
                <h1>{product.fields.title}</h1>
                <h2>{product.fields.price}</h2>
                <h3>{product.fields.stock}</h3>
            </div>
            <img src={product.fields.image} />
        </div>
    );
};

export default ProductSummary;
