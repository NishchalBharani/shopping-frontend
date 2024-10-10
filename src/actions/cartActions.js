
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY'
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY'
export const SET_CART_ITEMS = 'SET_CART_ITEMS'

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});


export const incrementItemQuantity = (productId) => ({
    type: INCREMENT_ITEM_QUANTITY,
    payload: productId,
  });
  
  export const decrementItemQuantity = (productId) => ({
    type: DECREMENT_ITEM_QUANTITY,
    payload: productId,
  });

  export const setCartItems = (items) => {
    return {
      type: SET_CART_ITEMS,
      payload: items,
    };
  };
  
