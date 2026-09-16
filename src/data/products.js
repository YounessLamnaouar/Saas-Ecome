import { images } from "../assets/images";

export const categories = [
  { id: "women", name: "Women", image: images.women },
  { id: "men", name: "Men", image: images.men },
  { id: "kids", name: "Kids", image: images.kids },
  { id: "shoes", name: "Shoes", image: images.shoes },
  { id: "pants", name: "Pants", image: images.pants },
  { id: "shirts", name: "Shirts", image: images.shirts },
];

export const products = [
  // Women
  { id: 1, name: "Summer Dress", price: 59.99, oldPrice: 79.99, category: "women", image: images.women1, rating: 4, colors: ["black", "blue", "brown"], description: "A breezy summer dress made from soft breathable fabric, perfect for warm days.", stock: 14 },
  { id: 2, name: "Elegant Blouse", price: 45.99, oldPrice: 65.99, category: "women", image: images.women2, rating: 5, colors: ["black", "blue", "brown"], description: "A refined blouse that pairs easily with both casual and formal outfits.", stock: 9 },
  { id: 3, name: "Denim Jacket", price: 80.99, oldPrice: 109.99, category: "women", image: images.women3, rating: 4, colors: ["black", "blue"], description: "Classic denim jacket with a modern relaxed fit.", stock: 6 },
  { id: 4, name: "Floral Skirt", price: 24.99, oldPrice: 34.99, category: "women", image: images.women4, rating: 3, colors: ["blue", "brown"], description: "Lightweight floral skirt for everyday wear.", stock: 20 },
  // Men
  { id: 5, name: "Casual Shirt", price: 59.99, oldPrice: 79.99, category: "men", image: images.men1, rating: 4, colors: ["black", "blue", "brown"], description: "A comfortable casual shirt suitable for everyday wear.", stock: 18 },
  { id: 6, name: "Slim Jeans", price: 45.99, oldPrice: 65.99, category: "men", image: images.men2, rating: 4, colors: ["black", "blue"], description: "Slim fit jeans with a modern silhouette and stretch comfort.", stock: 11 },
  { id: 7, name: "Blazer", price: 220.99, oldPrice: 280.99, category: "men", image: images.men3, rating: 5, colors: ["black", "brown"], description: "A tailored blazer for formal occasions.", stock: 4 },
  { id: 8, name: "T-shirt", price: 24.99, oldPrice: 34.99, category: "men", image: images.men4, rating: 3, colors: ["black", "blue", "brown"], description: "Soft cotton t-shirt, a wardrobe essential.", stock: 25 },
  // Kids
  { id: 9, name: "Kids Shirt", price: 29.99, oldPrice: 39.99, category: "kids", image: images.kids1, rating: 4, colors: ["blue", "brown"], description: "Durable and comfortable shirt for kids.", stock: 15 },
  { id: 10, name: "Kids Jeans", price: 35.99, oldPrice: 45.99, category: "kids", image: images.kids2, rating: 4, colors: ["black", "blue"], description: "Sturdy jeans built for active kids.", stock: 10 },
  { id: 11, name: "Kids Dress", price: 40.99, oldPrice: 55.99, category: "kids", image: images.kids3, rating: 5, colors: ["blue", "brown"], description: "A cute and comfortable dress for special days.", stock: 8 },
  { id: 12, name: "Kids Shoes", price: 26.99, oldPrice: 36.99, category: "kids", image: images.kids4, rating: 4, colors: ["black", "blue"], description: "Lightweight shoes designed for play.", stock: 13 },
  // Shoes
  { id: 13, name: "Running Shoes", price: 99.99, oldPrice: 139.99, category: "shoes", image: images.shoes1, rating: 5, colors: ["black", "blue"], description: "Engineered for comfort and performance on long runs.", stock: 7 },
  { id: 14, name: "Casual Sneakers", price: 75.99, oldPrice: 95.99, category: "shoes", image: images.shoes2, rating: 4, colors: ["black", "brown"], description: "Everyday sneakers that go with anything.", stock: 12 },
  { id: 15, name: "Formal Shoes", price: 80.99, oldPrice: 110.99, category: "shoes", image: images.shoes3, rating: 4, colors: ["black", "brown"], description: "Polished formal shoes for the office or events.", stock: 5 },
  { id: 16, name: "Sandals", price: 44.99, oldPrice: 59.99, category: "shoes", image: images.shoes4, rating: 3, colors: ["brown", "blue"], description: "Comfortable sandals for warm weather.", stock: 16 },
  // Pants
  { id: 17, name: "Denim Jeans", price: 59.99, oldPrice: 79.99, category: "pants", image: images.pants1, rating: 4, colors: ["black", "blue"], description: "Classic denim jeans built to last.", stock: 14 },
  { id: 18, name: "Chino Pants", price: 45.99, oldPrice: 60.99, category: "pants", image: images.pants2, rating: 4, colors: ["brown", "black"], description: "Versatile chinos for casual or smart-casual looks.", stock: 9 },
  { id: 19, name: "Joggers", price: 80.99, oldPrice: 100.99, category: "pants", image: images.pants3, rating: 5, colors: ["black", "blue"], description: "Soft joggers built for comfort and movement.", stock: 20 },
  { id: 20, name: "Cargo Pants", price: 24.99, oldPrice: 34.99, category: "pants", image: images.pants4, rating: 3, colors: ["brown", "black"], description: "Durable cargo pants with plenty of pockets.", stock: 11 },
  // Shirts
  { id: 21, name: "Cotton Shirt", price: 59.99, oldPrice: 79.99, category: "shirts", image: images.shirts1, rating: 4, colors: ["black", "blue"], description: "Breathable cotton shirt for everyday comfort.", stock: 17 },
  { id: 22, name: "Oxford Shirt", price: 45.99, oldPrice: 60.99, category: "shirts", image: images.shirts2, rating: 4, colors: ["blue", "brown"], description: "Classic Oxford weave shirt, smart and durable.", stock: 10 },
  { id: 23, name: "Linen Shirt", price: 80.99, oldPrice: 100.99, category: "shirts", image: images.shirts3, rating: 5, colors: ["black", "brown"], description: "Lightweight linen shirt, ideal for warm days.", stock: 6 },
  { id: 24, name: "Casual Shirt", price: 59.99, oldPrice: 79.99, category: "shirts", image: images.shirts4, rating: 3, colors: ["black", "blue", "brown"], description: "A relaxed fit shirt for everyday wear.", stock: 13 },
];

export const getProductById = (id) => products.find((p) => p.id === Number(id));
