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

  return (
    <>
    {/* First row for listing categories and flash sales */}
    <div className="row">
        <div className='col-md-3'>
        <CategoryList categories={categories} />
        </div>
        <div className='col-md-3'>
        <FlashSaleProducts products={products.flashSaleProducts} />
        </div>
    </div>
    {/* second row  top Selling Products */}
    {/* First row for listing categories and flash sales */}
    <div className="row">
        <div className='col-md-3'>
        <TopSellingProducts products={products.topSellingProducts} />
        </div>
       {/* third,forth and fifty rows for products */}
    </div>
      {/* <CategoryProducts categories={categories} products={products.categoryProducts} /> */}
      {categories.map((categories) =>(
        <div key={categories.id} className='row'>
          <CategoryProducts category={categories} products={products.categoryProducts.filter((product) => product.categoryId === categories.id)} />
        </div>  /////////////////////////////////////
      ))}
    </>
  );
};

export default HomePage;
