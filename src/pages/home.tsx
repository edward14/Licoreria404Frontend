import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetchProducts from "../hooks/userFetchProduct";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { products, loading } = useFetchProducts();
  const [cart, setCart] = useState<any[]>([]); // Estado para el carrito
  const [favorites, setFavorites] = useState<any[]>([]); // Estado para los productos favoritos
  const navigate = useNavigate(); // Para redirigir a otras páginas

  if (loading) return <p>Loading products...</p>;

  // Función para agregar un producto al carrito
  const addToCart = (product: any) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en el localStorage
    alert(`${product.name} ha sido agregado al carrito.`);
  };

  // Función para manejar la compra directa
  const onBuy = (product: any) => {
    addToCart(product); // Primero agregar al carrito
    navigate("/cart"); // Redirigir a la página del carrito
  };

  // Función para agregar a favoritos
  const addToFavorites = (product: any) => {
    if (favorites.some((fav) => fav._id === product._id)) {
      alert(`${product.name} ya está en tus favoritos.`);
      return;
    }
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Guardar en el localStorage
    alert(`${product.name} ha sido agregado a tus favoritos.`);
  };

  return (
    <div className="home">
      <h2>Carrito: {cart.length} productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id} // Usar _id como key si está disponible
            product={product}
            addToCart={addToCart} // Pasar la función addToCart
            onBuy={onBuy} // Pasar la función onBuy
            addToFavorites={addToFavorites} // Pasar la función addToFavorites
          />
        ))}
      </div>
    </div>
  );
};

export default Home;