export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  export interface IAllProducts {
    tshirts: IProduct[]
    hoodies: IProduct[]
  }