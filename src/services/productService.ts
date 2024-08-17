//import axios from "axios";
import { allClothes } from "@/clothes/dataBaseAll";

export const getProducts = () => {
return allClothes 
}

// const ENDPOINT = "https://fakestoreapi.com/products";

// export const getProducts = async () => {
//   try {
//     const { data } = await axios(ENDPOINT);
//     return data;
//   } catch (error) {
//     const errorMessage =
//       axios.isAxiosError(error) && error.message
//         ? error.message
//         : "Ocurrió un error inesperado";
//     throw new Error(`Error desde getProducts: ${errorMessage}`);
//   }
// };
