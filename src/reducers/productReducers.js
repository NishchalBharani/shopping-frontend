import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE
} from "../constants/productConstants";
const initialState = {
  loading: false,
  products: [],
  totalPages: 0,
  error: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        
        products: action.isSearch ? [] : state.products,
      };

    case GET_PRODUCTS_SUCCESS:
      
      const existingProductIds = new Set(state.products.map(product => product.product_id));
      const newProducts = action.payload.products.filter(product => !existingProductIds.has(product.product_id));
      
      return {
        ...state,
        loading: false,
        
        products: action.isSearch ? newProducts : [...state.products, ...newProducts],
        totalPages: action.payload.totalPages,
      };

    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state
      };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };

    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
