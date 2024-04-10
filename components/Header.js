import React from 'react'
import CartIcon from '../assets/cart-icon.svg'
import WishListIcon from '../assets/wishlist.png'

export default function Header() {
  return (
    <div className='header'>
      <div className="brandName">
        <h1>Tanvir Shop</h1>
      </div>
      <div className='logo'>
        <div className='wishlist'>
          <h2>0</h2>
          <img src={CartIcon} alt="cart-icon" />
        </div>
        <div className='cartlist'>
          <h2>0</h2>
          <img src={WishListIcon} alt="wishlist-icon" />
        </div>
      </div>
    </div>
  )
}
