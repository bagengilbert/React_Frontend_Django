import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingProducts = ({ products }) => {
    // Check if products is undefined or not an array
    if (!Array.isArray(products)) {
        return <p>Loading products...</p>;
    }

    const topSellingProducts = products
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 10);

    return (
        <>
            <h3>Top Selling Products</h3>
            <div className='row'>
                {topSellingProducts.length > 0 ? (
                    topSellingProducts.map((product) => (
                        <div key={product.id} className='col-md-3'>
                            <Link to={`/products/${product.slug}`}>
                                <img 
                                    src={product.image || '/path/to/fallback-image.jpg'} 
                                    alt={product.name || 'Product image'} 
                                    className="img-fluid" 
                                />
                                <h5>{product.name}</h5>
                                <p>Price: ${product.price}</p>
                                <p>Sales: {product.sales}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No top selling products available</p>
                )}
            </div>
        </>
    );
};

export default TopSellingProducts;
