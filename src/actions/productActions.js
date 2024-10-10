
import { 
  GET_PRODUCTS_REQUEST, 
  GET_PRODUCTS_SUCCESS, 
  GET_PRODUCTS_FAILURE, 
  GET_PRODUCT_DETAILS_REQUEST, 
  GET_PRODUCT_DETAILS_SUCCESS, 
  GET_PRODUCT_DETAILS_FAILURE 
} from '../constants/productConstants';
import { getProductId, getProducts, searchProducts } from '../api/productApi';

export const listProducts = (page = 1, limit = 10) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const data = await getProducts(page, limit);
    dispatch({ 
      type: GET_PRODUCTS_SUCCESS,
      payload: data 
    });
  } catch (error) {
    dispatch({ 
      type: GET_PRODUCTS_FAILURE, 
      payload: error.message 
    });
  }
};

export const searchProd = (page = 1, limit = 10, query) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const data = await searchProducts(page, limit, query);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};


export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const data = await getProductId(id);
    dispatch({ 
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: data 
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAILURE,
      payload: error.message
    });
  }
};
