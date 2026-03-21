export type AdminProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  createdAt: string;
};

export type ProductOverride = {
  id: string;
  title: string;
  image: string;
  price: number;
  updatedAt: string;
};

export type AdminData = {
  products: AdminProduct[];
  overrides: ProductOverride[];
};
