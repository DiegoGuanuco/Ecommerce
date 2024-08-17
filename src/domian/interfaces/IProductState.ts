import { IAllProducts } from "./IProduct";

export interface IProductState {
  products: IAllProducts
  loading: boolean;
  error: string | null;
}
