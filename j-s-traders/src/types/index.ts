export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  mission: string;
  values: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}