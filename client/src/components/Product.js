import React from 'react'
import Rating from './Rating'

function Product({product}) {
  return (
    <div>
        <div key={product.id} className='card'>
              <a href='product.html'>
                <img className="medium" src={product.image} alt={product.description} />
              </a>
              <div className=' card-body'>
                <a className='description' href='product.html'>
                  <h2>{product.description}</h2>
                </a>
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