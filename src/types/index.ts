export interface User {
  id: string;
  email: string;
  name: string;
  role: 'tenant' | 'landlord' | 'admin';
  phone?: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'tenant' | 'landlord' | 'admin') => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'tenant' | 'landlord' | 'admin';
}

export interface BoardingHouse {
  id: string;
  name: string;
  address: string;
  price: number;
  images: string[];
  amenities: string[];
  rating: number;
  available: boolean;
  landlordId: string;
}