import React from 'react';

// Functional component FlashSaleProducts that accepts a 'products' prop
const FlashSaleProducts = ({ products }) => {
    const flashSaleProducts = products.filter((product) => product.isFlashSale);

    return (
        <div>
            <h3>Flash Sales</h3>
            <div className='row'>
                {/* Check if there are any flash sale products available */}
                {flashSaleProducts.length > 0 ? (
                    // If there are flash sale products, map over them and display each product
                    flashSaleProducts.map((product) => (
                        // Key is required for uniquely identifying each product in the list
                        <div key={product.id} className='col-md-3'>
                            {/* Product image */}
                            <img src={product.image} alt={product.name} />
                            {/* Product name */}
                            <h5>{product.name}</h5>
                            {/* Product price */}
                            <p>Price: ${product.price}</p>
                            {/* Product discount, assuming 'discount' is a property in the product */}
                            <p>Discount: {product.discount}%</p>
                        </div>
                    ))
                ) : (
                    // If no flash sale products, display a message
                    <p>No flash sale products available</p>
                )}
            </div>
        </div>
    );
};

export default FlashSaleProducts;
