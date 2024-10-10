
import axiosInstance from './axiosConfig'; 


export const loginApi = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials); 
  return response.data; 
};

export const registerApi = async (details) => {
  const response = await axiosInstance.post('/auth/register', details); 
  return response.data;
};


export const getUserInfoApi = async () => {
  const response = await axiosInstance.get('/users/profile'); 
  return response.data; 
};


export const updateAddressApi = async (address, index) => {
  
  const response = await axiosInstance.put(`/users/address/${index}`, address); 
  return response.data; 
};


export const addAddressApi = async (newAddress, userId) => {
  const response = await axiosInstance.post(`/users/address/${userId}`, newAddress); 
  return response.data; 
};
