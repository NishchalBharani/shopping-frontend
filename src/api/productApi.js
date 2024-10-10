import axiosInstance from './axiosConfig';

export const getProducts = async (page = 1, limit = 10) => {
  try {
    const { data } = await axiosInstance.get(`/products?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductId = async (id) => {
  try {
    const {data} = await axiosInstance.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw (error)
  }
}

export const addProduct = async (product) => {
  try {
    const { data } = await axiosInstance.post('/products', product);
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchProducts = async (page = 1, limit = 10, query) => {
  try {
    const { data } = await axiosInstance.get(`/products?page=${page}&limit=${limit}` , {
      params: { search: query }
    });
    return data
  } catch (error) {
    throw error
  }
}
