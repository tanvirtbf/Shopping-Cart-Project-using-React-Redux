import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useSelector } from 'react-redux'



export default function Header() {
  const cartItems = useSelector((state) => state.cartItems)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Tanvir Shop</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{cartItems.reduce((prev,curr) => prev+curr.quantity , 0)}</div>
        </Link>
      </div>
    </header>
  )
}
