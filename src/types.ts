export interface Specs {
  display: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  os: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Google Pixel' | 'OnePlus' | 'Xiaomi' | 'Sony' | 'Motorola' | 'Nothing';
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  images: string[]; // CSS gradient classes representing images
  tags: string[];
  specs: Specs;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
  password?: string;
}
