import { IProduct } from "@/domian/interfaces/IProduct";
import { IAllProducts } from "@/domian/interfaces/IProduct";
import { getProducts } from "./productService";

const transformProduct = (productApi: any): IProduct => {
  return {
    id: productApi.id,
    name: productApi.nombre,
    price: productApi.precio,
    image: productApi.imagenURL,
    color: productApi.color,
    description: productApi.descripcion
  };
};

export const getAllProducts = async (): Promise<IAllProducts> => {
  try {
    const products = await getProducts();
    const hoodies = products.hoodies.map(transformProduct);
    const tshirts = products.tshirts.map(transformProduct);
    const accesories = products.accesories.map(transformProduct);
    const footwear = products.footwear.map(transformProduct);
    const pants = products.pants.map(transformProduct);
    return {hoodies, tshirts, accesories, footwear, pants };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Ocurrió un error inesperado";
    throw new Error(`Error desde getAllProducts: ${errorMessage}`);
  }
};
