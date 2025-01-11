import { Link } from 'react-router-dom';
import iconCart from '../accets/iconCart.png';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.bazar.items);
  useEffect(() => {
    let total = 0;
    carts.forEach(item => (total += item.quntity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <header className="bg-white text-gray-800 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-500 transition duration-300">
            BAZAR.ISS
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link to="/contact" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            Contact
          </Link>
          <Link to="/about" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            About
          </Link>
        </nav>
        <div
          className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex justify-center items-center relative cursor-pointer hover:bg-gray-200 transition duration-300"
        >
          <Link to='/cart'>
          <img src={iconCart} alt="Cart" className="w-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center border-2 border-white">
            {totalQuantity}
          </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
