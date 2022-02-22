import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (product) => {
  const { products } = endPoints;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
  };

  const response = await axios.post(products.addProducts, product, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const { products } = endPoints;
  const response = await axios.delete(`${products.deleteProduct(id)}`);
  return response.data;
};

const updateProduct = async (id, product) => {
  const { products } = endPoints;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
  };

  const response = await axios.put(products.updateProducts(id), product, config);
  return response.data;
};

export { addProduct, deleteProduct, updateProduct };
