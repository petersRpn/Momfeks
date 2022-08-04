import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({product}) {
  return (
    <div>
        <div key={product.id} className='card'>
              <Link to={`/product/${product.id}`}>
                <img className="medium" src={product.image} alt={product.description} />
              </Link>
              <div className=' card-body'>
                <Link className='description' to={`/product/${product.id}`}>
                  <h2>{product.description}</h2>
                </Link>
                <div className='rating'>
                  <Rating rating={product.rating} numReview={product.numReview}/>
                </div>
                <div className='price'>
                  {product.price}
                </div>
              </div>
            </div>
    </div>
  )
}

export default Product