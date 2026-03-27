export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  description: string;
  category: string;
  brand: string;
  colors: string[];
  image: string;
  images?: string[];
  videoUrl?: string;
  rating: {
    rate: number;
    count: number;
  };
  reviews?: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address?: string;
  avatar?: string;
}

export interface DeliveryOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
  description: string;
}
