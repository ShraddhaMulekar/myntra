import React from 'react'
import Link from "react-router-dom"

const ProductCard = ({product}) => {
  return (
    <div>
        <img src={product.images} alt={product.title} />
        <h3>{product.title}</h3>
        <p>₹{product.price}</p>
        <Link to={`/products/${product._id}`}>View</Link>
    </div>
  )
}

export default ProductCard