import React from "react";
import Home from "../pages/home";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import Favorites from "../pages/Favorites";
import registerClient from "../pages/registerClient";
import clientList from "../pages/clientList";

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
    ];
    
    export default routes;