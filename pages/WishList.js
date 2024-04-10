import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

export default function WishList() {
  const wishLists = useSelector((state) => state.wishList)
  console.log(wishLists)
  return (
    <div className="products-container">
      {wishLists.map(({ id, title, rating, price, imageUrl }) => (
        <Product
          key={id}
          productId = {id}
          title={title}
          rating={rating}
          price={price}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  )
}