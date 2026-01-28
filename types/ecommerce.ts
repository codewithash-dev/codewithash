export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    stock: number;
    created_at: string;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export interface Order {
    id: string;
    user_id: string;
    stripe_session_id: string;
    total: number;
    status: string;
    created_at: string;
  }
  
  export interface OrderItem {
    id: string;
    order_id: string;
    product_id: string;
    quantity: number;
    price: number;
  }