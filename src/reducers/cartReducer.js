import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY } from '../actions/cartActions';

// Load cart items from local storage
const loadCartItemsFromLocalStorage = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

const initialState = {
  items: loadCartItemsFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        // Update local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const newItems = [...state.items, { ...action.payload, quantity: 1 }];
        // Update local storage
        localStorage.setItem('cartItems', JSON.stringify(newItems));
        return {
          ...state,
          items: newItems,
        };
      }

    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(item => item._id !== action.payload);
      // Update local storage
      localStorage.setItem('cartItems', JSON.stringify(filteredItems));
      return {
        ...state,
        items: filteredItems,
      };

    case INCREMENT_ITEM_QUANTITY:
      const incrementedItems = state.items.map(item =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      // Update local storage
      localStorage.setItem('cartItems', JSON.stringify(incrementedItems));
      return {
        ...state,
        items: incrementedItems,
      };

    case DECREMENT_ITEM_QUANTITY:
      const decrementedItems = state.items.map(item =>
        item._id === action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) } 
          : item
      );
      // Update local storage
      localStorage.setItem('cartItems', JSON.stringify(decrementedItems));
      return {
        ...state,
        items: decrementedItems,
      };

    case 'SET_CART_ITEMS':
      // Update local storage when setting cart items
      localStorage.setItem('cartItems', JSON.stringify(action.payload));
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
