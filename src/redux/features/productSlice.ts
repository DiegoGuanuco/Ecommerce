import { IAllProducts } from "@/domian/interfaces/IProduct";
import { IProductState } from "@/domian/interfaces/IProductState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProductState = {
  products: {
    tshirts: [],
    hoodies: [],
    footwear: [],
    accesories: [],
    pants: []
  },
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IAllProducts>) {
      state.products.tshirts = action.payload.tshirts
      state.products.hoodies = action.payload.hoodies
      state.products.footwear = action.payload.footwear
      state.products.accesories = action.payload.accesories
      state.products.pants = action.payload.pants
    },
    setLoading(state){
      state.loading = !state.loading
    },
    setError(state){
      state.error = "Ocurrió un error. Intentalo en breve"
    }
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
