import React from "react";

// Definir las propiedades del componente para mostrar un producto de licorería
interface ProductCardProps {
  product: {
    name: string;           // Nombre del producto
    category: string;       // Categoría (ej. Vino, Cerveza, etc.)
    price: number;          // Precio del producto
    stock: number;          // Cantidad disponible
    description: string;    // Descripción del producto
    imageUrl?: string;      // URL de la imagen del producto (opcional)
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, category, price, stock, description, imageUrl } = product;

  return (
    <div className="product-card">
      {/* Imagen del producto, mostrando una imagen predeterminada si no está disponible */}
      <img src={imageUrl || 'default.jpg'} alt={name} />
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p><strong>Stock:</strong> {stock} available</p>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
