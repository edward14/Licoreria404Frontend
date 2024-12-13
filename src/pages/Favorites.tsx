import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom'; // Usar para redirigir al carrito o página de compra

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  imageUrl?: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate(); // Usar para redirigir

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((product) => product._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const addToCart = (product: Product) => {
    // Verificar si el producto ya está en el carrito
    const isProductInCart = cart.some((item) => item._id === product._id);
    if (isProductInCart) {
      alert(`${product.name} is already in the cart.`);
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`${product.name} has been added to your cart.`);
    }
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((product) => product._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuy = (product: Product) => {
    addToCart(product); // Primero agregar al carrito
    navigate('/cart'); // Redirigir a la página de carrito
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Favorite Products</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((product) => (
            <div key={product._id} className="favorite-item">
              <ProductCard
                product={product}
                addToCart={addToCart} // Asegúrate de que el componente ProductCard maneje esto
                onBuy={handleBuy} // Enviar la función de compra
                addToFavorites={() => {}} // No es necesario pasar la función addToFavorites
              />
              <button
                onClick={() => removeFromFavorites(product._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No favorite products yet. Start adding some!</p>
      )}
    </div>
  );
};

export default Favorites;