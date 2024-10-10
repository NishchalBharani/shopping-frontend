
import { loginApi, registerApi, getUserInfoApi, updateAddressApi, addAddressApi } from '../api/userApi';
import { USER_LOGIN, USER_REGISTER, USER_GET_INFO, USER_UPDATE_ADDRESS, USER_ADD_ADDRESS } from '../constants/userConstants';


export const loginUser = (credentials) => async (dispatch) => {
  try {
      const data = await loginApi(credentials); 

      dispatch({ type: USER_LOGIN, payload: data }); 
      
      localStorage.setItem('userInfo', JSON.stringify({
          token: data.token,
          username: data.username,
          phone: data.phone,
          userId: data.userId,
      })); 
      return { payload: data }; 
  } catch (error) {
      console.error('Login error:', error);
      throw error; 
  }
};


export const registerUser = (details) => async (dispatch) => {
  try {
    const data = await registerApi(details); 
    dispatch({ type: USER_REGISTER, payload: data });
    
    
    localStorage.setItem('userInfo', JSON.stringify({
        token: data.token,
        username: data.username,
        phone: data.phone,
        userId: data.userId,
    })); 
  } catch (error) {
    console.error('Registration error:', error.response.data.message || error.message);
    
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const data = await getUserInfoApi(); 
    dispatch({ type: USER_GET_INFO, payload: data }); 
    return { payload: data }; 
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error; 
  }
};


export const addAddress = (newAddress, userId) => async (dispatch, getState) => {
  
  try {
    const updatedUser = await addAddressApi(newAddress, userId); 
    dispatch({ type: USER_ADD_ADDRESS, payload: updatedUser}); 
    return { payload: updatedUser }; 
  } catch (error) {
    console.error('Error adding address:', error);
    throw error; 
  }
};


export const updateAddress = (address, index) => async (dispatch, getState) => {
  
  try {
    const data = await updateAddressApi(address, index); 
    dispatch({ type: USER_UPDATE_ADDRESS, payload: data }); 

    
    

    return { payload: data }; 
  } catch (error) {
    console.error('Error updating address:', error);
    throw error; 
  }
};
