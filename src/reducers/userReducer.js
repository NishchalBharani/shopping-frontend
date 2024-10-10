
import { USER_LOGIN, USER_LOGOUT, USER_REGISTER, USER_UPDATE_ADDRESS, USER_GET_INFO } from '../constants/userConstants';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')) 
      : null,
  userData: null, 
};


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case USER_LOGIN:
      case USER_REGISTER: 
          return { ...state, userInfo: action.payload }; 
      case USER_LOGOUT:
          return { ...state, userInfo: null, userData: null }; 
      case USER_UPDATE_ADDRESS:
          return { 
              ...state, 
              userInfo: { 
                  ...state.userInfo, 
                  addresses: action.payload 
              } 
          };
      case USER_GET_INFO:
          return { 
              ...state, 
              userData: action.payload 
          };
      default:
          return state; 
  }
};
