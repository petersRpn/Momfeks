import React from 'react';
import data from '../../data';
import Product from '../Product';
import './Main.css'

export default function Main() {
  return (
    <main>
        <div>
          <div className='row center'>
          {data.products.map(product => (
              <Product key={product.id} product={product}/>
              ))}
            
          </div>
        </div>
      </main>
  )
}
