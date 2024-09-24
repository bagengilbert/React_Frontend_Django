import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoriesActions';
import { fetchProducts } from '../redux/actions/productsActions';
import CategoryList from '../components/CategoryList';
import FlashSaleProducts from '../components/FlashSaleProducts';
import CategoryProducts from '../components/CategoryProducts';
import TopSellingProducts from '../components/TopSellingProducts'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!categories || !products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* First row for listing categories and flash sales */}
      <div className="row">
        <div className="col-md-3">
          <CategoryList categories={categories} />
        </div>
        <div className="col-md-9">
          <FlashSaleProducts products={products.flashSaleProducts} />
        </div>
      </div>

      {/* Second row for Top Selling Products */}
      <div className="row">
        <div className="col-md-12">
          <TopSellingProducts products={products.topSellingProducts} />
        </div>
      </div>

      {/* Dynamically render rows for each category and its products */}
      {categories.map((category) => (
        <div key={category.id} className="row">
          <div className="col-md-12">
            <CategoryProducts
              category={category}
              products={products.categoryProducts.filter((product) => product.categoryId === category.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePage;
