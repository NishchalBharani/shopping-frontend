import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProd } from '../actions/productActions'; // Make sure this action exists
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query'); // Get the query parameter from the URL

  // Selector to get the product list from the Redux store
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    if (query) {
      dispatch(searchProd(1, 10, query)); // Dispatch the search action with the query
    }
  }, [dispatch, query]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
