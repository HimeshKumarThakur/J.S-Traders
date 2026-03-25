export type AdminProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  soldOut: boolean;
  createdAt: string;
};

export type ProductOverride = {
  id: string;
  title: string;
  image: string;
  price: number;
  soldOut: boolean;
  updatedAt: string;
};

export type AdminData = {
  products: AdminProduct[];
  overrides: ProductOverride[];
};
