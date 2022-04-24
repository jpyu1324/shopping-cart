export type Product = {
  id: number;
  name: string;
  price: number;
  photo: string;
};

export type CartItem = Product & { quantity: number };
