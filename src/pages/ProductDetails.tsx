import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  imageUrl?: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching the product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
      {product ? (
        <>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg font-bold text-gray-600">
            <strong>Category:</strong> {product.category}
          </p>
          {product.imageUrl && (
            <div className="w-full h-64 bg-gray-200 border-2 border-dashed rounded-xl mb-4">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-900">Description:</h3>
          <p className="text-lg text-gray-600">{product.description}</p>
          <h3 className="text-2xl font-bold text-gray-900">Details:</h3>
          <ul>
            <li className="text-lg text-gray-600">
              <strong>Price:</strong> ${product.price}
            </li>
            <li className="text-lg text-gray-600">
              <strong>Stock:</strong> {product.stock}
            </li>
          </ul>
        </>
      ) : (
        <p className="text-lg font-bold text-gray-600">No product found</p>
      )}
    </div>
  );
};

export default ProductDetails;