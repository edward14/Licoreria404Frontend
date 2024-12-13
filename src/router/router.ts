import React from "react";
import Home from "../pages/home";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import Favorites from "../pages/Favorites";
import registerClient from "../pages/registerClient";
import clientList from "../pages/clientList";
import Cart from "../pages/Cart";  // Asegúrate de importar tu página de carrito

interface Route {
    path: string;
    component: React.FC;
}

const routes: Route[] = [
    { path: "/", component: Home },
    { path: "/add-product", component: AddProduct },
    { path: "/product/:id", component: ProductDetails },
    { path: "/favorites", component: Favorites },
    { path: "/register-client", component: registerClient },
    { path: "/clients", component: clientList },
    { path: "/cart", component: Cart },  // Ruta para el carrito
];

export default routes;
