import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProducts = ({ products, category }) => {
    // Filter products based on the given category ID
    const categoryProducts = products.filter(
        (product) => product.category.id === category.id
    );

    return (
        <>
            {/* Category title */}
            <h3>{category.name}</h3>

            {/* Bootstrap carousel setup */}
            <div className="carousel slide" id={`category-${category.id}`} data-ride="carousel">
                <div className="carousel-inner">
                    {/* Loop through filtered products */}
                    {categoryProducts.map((product, index) => (
                        // Each product should have a unique key
                        <div
                            key={product.id}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            {/* Product image */}
                            <img src={product.image} alt={product.name} className="d-block w-100" />

                            {/* Product details */}
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Description: {product.description}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <p className="card-text">Stock: {product.stock}</p>

                                {/* Link to product details */}
                                <Link to={`/products/${product.slug}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                <a 
                className="carousel-control-prev" 
                href={`#category-${category.id}`}  // Corrected the href with backticks and correct syntax
                role="button" 
                data-slide="prev"
                    >
            {/* The icon for the previous control */}
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
                 </a>

                </div>
            </div>
        </>
    );
};

export default CategoryProducts;
