import { useState, useEffect } from 'react';
import apiClient from '../utils/api';

// Define la estructura de los productos
interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image?: string;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Función para obtener los productos desde la API de la licorería
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('http://localhost:5000/api/products');
        setProducts(response.data); // Guardar los productos en el estado
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };

    fetchProducts();
  }, []); // Se ejecuta solo al cargar el componente

  return { products, loading };
};

export default useFetchProducts;
