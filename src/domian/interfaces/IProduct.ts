export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  description: string;
  onFavoriteClick?: () => void
}

export interface IAllProducts {
  accesories: IProduct[];
  hoodies: IProduct[];
  footwear: IProduct[];
  pants: IProduct[];
  tshirts: IProduct[];
}
