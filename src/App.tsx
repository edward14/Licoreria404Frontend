import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import router from "./router/router";

const Header = () => {
  return (
    <header className="relative text-white p-4 text-center shadow-md mb-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
      <h1 className="text-4xl font-bold uppercase tracking-wide relative z-20">
        Licoreria 404
      </h1>
      <p className="text-lg font-medium relative z-20">
        Tu tienda de bebidas favorita
      </p>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <div className="container mx-auto p-4 pt-6 pb-12 md:p-6 lg:p-12 xl:p-24 h-screen flex flex-col justify-between">
        <Routes>
          {router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;