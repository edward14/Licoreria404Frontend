import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#3B3F54] p-4 flex justify-around items-center text-white">
      <button
        className="bg-[#3B3F54] hover:bg-[#2B2F3E] text-white font-bold py-2 px-4 rounded"
        onClick={handleToggle}
      >
        Menu
      </button>
      {isOpen && (
        <ul className="bg-[#3B3F54] absolute mt-4 p-4 rounded">
          <li className="py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2">
            <Link to="/add-product">Añadir</Link>
          </li>
          <li className="py-2">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="py-2">
            <Link to="/client-list">Users</Link>
          </li>
          <li className="py-2">
            <Link to="/register-client">Register User</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;