import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  imageUrl?: string;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((product) => product._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    // Aquí puedes implementar el proceso de pago o enviar la orden al backend.
    alert('Your order has been placed successfully!');
    // Limpiar carrito
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((product) => (
              <div key={product._id} className="cart-item border p-4 rounded">
                <img
                  src={product.imageUrl || 'default.jpg'}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4"
                />
                <h3 className="font-bold">{product.name}</h3>
                <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
          <div className="total-price mt-4">
            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
          <div className="checkout-btn mt-4">
            <button
              onClick={handleCheckout}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-600">Your cart is empty. Start adding products!</p>
          <Link to="/favorites" className="text-blue-500">Go to Favorites</Link> or <Link to="/" className="text-blue-500">Shop now</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;