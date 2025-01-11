import React, { useEffect, useState } from 'react';
import { bazarLists } from '../bazar';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from './BazarReducer';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
const Order = () => {
    const { slug } = useParams();
    const navgate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [detail, setDetail] = useState([]);
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => {
        if(quantity >1){
            setQuantity(prev => prev - 1);
        }else{
            navgate('/')
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
            const findDetail = bazarLists.filter(product => product.slug === slug);
            if(findDetail.length > 0){
                setDetail(findDetail[0]);
            }else{
                window.location.href = '/';
            }
        }, [slug])
        const handleAddToCart = () => {
            dispatch(addTocart({
              productId:detail.slug,
              image: detail.image,
              name: detail.name,
              price: detail.price,
              slug: detail.slug,
             quntity: quantity
            }));
        }
  return (
    <>
    <Navbar/><br />
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-full md:w-1/2">
          <img src={detail.image}  alt="Présentoir à Oeufs" className="rounded-lg shadow-lg" />
        </div>       
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{detail.name}</h1>
          <p className="text-lg font-semibold text-gray-600"><strong>{detail.price} Dh</strong></p>
          <p className="text-sm text-gray-500">
            Taxes incluses. <a href="#" className="underline">Frais d'expédition</a> calculés à l'étape de paiement.
          </p>

          <div className="flex items-center space-x-2">
            <button onClick={decrementQuantity} className="bg-gray-200 text-gray-800 rounded px-2 py-1 hover:bg-gray-300">
             -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button onClick={incrementQuantity} className="bg-gray-200 text-gray-800 rounded px-2 py-1 hover:bg-gray-300">
                +
            </button>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={handleAddToCart}>
              Ajouter au panier
            </button>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
              Acheter maintenant
            </button>
          </div>
          <p className="text-sm text-gray-700 mt-4">
            Ce <strong><u>{detail.name}</u></strong>, peint à la main, est une pièce authentique qui reflète l'héritage
            artisanal du Maroc. Avec son design floral complexe et ses motifs géométriques traditionnels,
            il ajoute une touche de charme oriental à votre table. Parfait pour votre petit-déjeuner,
            ce plat incarne la fusion de l'art et de la fonctionnalité.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Order;
