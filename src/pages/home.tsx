import React from "react";
import RecipeCard from "../components/ProductCard";
import useFetchProducts from "../hooks/userFetchProduct";

const Home: React.FC = () => {
    const { products, loading } = useFetchProducts();

    if (loading) return <p>Loading product...</p>;

    return (
        <div className="home">
            {products.map((product) => (
                <RecipeCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default Home;