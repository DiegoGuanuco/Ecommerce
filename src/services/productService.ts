import axios from "axios";

const ENDPOINT = "https://fakestoreapi.com/products";

export const getProductsService = async () => {
  try {
    const { data } = await axios(ENDPOINT);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
