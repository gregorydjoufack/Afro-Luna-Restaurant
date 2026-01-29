export type Category = 'entrées' | 'plats' | 'desserts' | 'cocktails';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  vegan?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}