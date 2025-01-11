import React from 'react'
import iconCart from '../accets/iconCart.png';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addTocart } from './BazarReducer';
import Navbar from './Navbar';
function Menu(props) {
  const {id, name ,price , slug,image}= props.data;
  const dispatch =  useDispatch();
  const handleAddToCart = () =>{
    dispatch(addTocart({
      productId:id,
      image: image,
      name:name,
      quntity: 1,
      price: price,
    }))
  }
  
  return (

    <div class="product-container">
      <div class="product-card">
        <div class="product-image">
          <Link to={slug}>
            <img src={image} alt="Boîte Octogne en bois de Thuya" />
          </Link>
        </div>
        <div class="product-info">
          <h3 class="product-title">{name}</h3>
          <p class="product-price">{price} Dh</p>
          <button class="add-to-cart" onClick={handleAddToCart}> <img src={iconCart} alt="" className='w-5'/> Add To Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Menu