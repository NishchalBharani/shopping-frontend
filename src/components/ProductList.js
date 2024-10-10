import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, totalPages } = productList;

  useEffect(() => {
    if (currentPage <= totalPages || totalPages === 0) {
      setIsLoadingMore(true);
      dispatch(listProducts(currentPage, limit)).finally(() => {
        setIsLoadingMore(false);
      });
    }
  }, [dispatch, currentPage, limit, totalPages]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 50 && !loading && currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, loading, totalPages]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      {loading && currentPage === 1 ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>

          {isLoadingMore && (
            <div className="flex justify-center mt-4">
              <div className="loader"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;