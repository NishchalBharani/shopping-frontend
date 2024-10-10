import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <CategoryList />
      <ProductList />
    </div>
  );
};

export default HomePage;
