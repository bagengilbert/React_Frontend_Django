import React from 'react';

const FlashSaleProducts = ({ products }) => {
    // Check if products is undefined or not an array
    if (!Array.isArray(products)) {
        return <p>Loading products...</p>;
    }

    const flashSaleProducts = products.filter((product) => product.isFlashSale);

    return (
        <div>
            <h3>Flash Sales</h3>
            <div className="row">
                {flashSaleProducts.length > 0 ? (
                    flashSaleProducts.map((product) => (
                        <div key={product.id} className="col-md-3">
                            <img 
                                src={product.image || '/path/to/fallback-image.jpg'} 
                                alt={product.name || 'Product image'} 
                                className="img-fluid" 
                            />
                            <h5>{product.name}</h5>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>Discount: {product.discount}%</p>
                        </div>
                    ))
                ) : (
                    <p>No flash sale products available</p>
                )}
            </div>
        </div>
    );
};

export default FlashSaleProducts;
