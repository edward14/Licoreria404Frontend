import React from "react";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  imageUrl?: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
  onBuy: (product: Product) => void;
  addToFavorites: (product: Product) => void; // Propiedad para agregar a favoritos
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, onBuy, addToFavorites }) => {
  const { name, category, price, stock, description, imageUrl } = product;

  return (
    <div className="product-card border p-4 rounded shadow-md">
      <img 
        src={imageUrl || 'default.jpg'} 
        alt={name} 
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700"><strong>Category:</strong> {category}</p>
      <p className="text-gray-700"><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p className="text-gray-700"><strong>Stock:</strong> {stock > 0 ? `${stock} available` : "Out of stock"}</p>
      <h4 className="text-gray-800 font-semibold mt-2">Description:</h4>
      <p className="text-gray-600">{description}</p>

      <div className="mt-4 flex flex-col space-y-2">
        {/* Botón para agregar al carrito */}
        <button
          onClick={() => addToCart(product)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
        
        {/* Botón para comprar directamente */}
        <button
          onClick={() => onBuy(product)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Buy Now
        </button>

        {/* Botón para agregar a favoritos */}
        <button
          onClick={() => addToFavorites(product)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default ProductCard;