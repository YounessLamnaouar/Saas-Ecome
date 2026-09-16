import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <section className="py-24 text-center min-h-screen">
        <p className="text-gray-600 text-lg mb-4">Product not found.</p>
        <Link to="/shop" className="text-gray-900 font-semibold underline">
          Back to Shop
        </Link>
      </section>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const colorClasses = { black: "bg-black", blue: "bg-blue-300", brown: "bg-orange-300" };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center h-96 md:h-[500px]">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-8" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 stroke-yellow-400" : "fill-none stroke-yellow-400"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {product.colors && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Color</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`h-8 w-8 rounded-full ${colorClasses[color]} border-2 ${selectedColor === color ? "border-gray-900" : "border-gray-300"} transition-all`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 border rounded-lg hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                  className="w-9 h-9 border rounded-lg hover:bg-gray-100 font-bold"
                >
                  +
                </button>
                <span className="text-gray-500 text-sm ml-2">{product.stock} in stock</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => addToCart({ ...product, color: selectedColor }, qty)}
                className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-gray-800 transition-all"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className="p-3 border rounded-lg hover:bg-gray-100 transition-all"
              >
                <Heart size={20} className={liked ? "fill-red-500 stroke-red-500" : "stroke-gray-700"} />
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
