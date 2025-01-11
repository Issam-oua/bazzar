import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updatequntity } from './BazarReducer'; // Add your reducer actions
import Navbar from '../compentes/Navbar'
const CartTab = () => {
  const carts = useSelector(store => store.bazar.items);  
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handlequntityChange = (productId, increment) => {
    dispatch(updatequntity({ productId, increment }));
  };

  const totalPrice = carts.reduce((acc, item) => acc + item.quntity * item.price, 0).toFixed(2);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Votre panier</h1>
      {carts.length === 0 ? (
        <div className="text-center">
          <p className="text-xl">Votre panier est vide</p>
          <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Continuer les achats
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-3 gap-4 border-b-2 pb-4">
            <span className="font-semibold">Produit</span>
            <span className="font-semibold">Quantité</span>
            <span className="font-semibold">Total</span>
          </div>
          {carts.map((item) => (
            <div key={item.id} className="grid grid-cols-3 gap-4 items-center py-4 border-b">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <p>{item.name}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handlequntityChange(item.productId, -1)}
                  disabled={item.quntity <= 1}
                >
                  -
                </button>
                <span>{item.quntity}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handlequntityChange(item.productId, 1)}
                >
                  +
                </button>
                <button
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => handleRemove(item.productId)}
                >
                  🗑️
                </button>
              </div>
              <span>{(item.quntity * item.price).toFixed(2)} Dh</span>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-xl font-semibold">Total estimé: {totalPrice} Dh</p>
            <Link
              to="/checkout"
              className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Procéder au paiement
            </Link>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CartTab;
