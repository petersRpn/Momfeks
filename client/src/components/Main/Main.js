import React, { useEffect } from 'react';
import LoadingBox from '../box/LoadingBox';
import MessageBox from '../box/MessageBox';
import Product from '../Product';
import {useDispatch, useSelector} from 'react-redux';
import './Main.css'
import { listProduct } from '../../reduxComponent/Actions/productActions';

export default function Main() {
  const productList = useSelector(state => state.productList)
  const {error, products, loading} = productList
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct())
  },[dispatch]);
  return (
    <main>
        <div>
          <div className='row center'>
          {loading ? (
            <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
           <div className="row center">
            {products.map((product) => (
            <Product key={product.id} product={product}></Product>
             ))}
        </div>
      )}
          </div>
        </div>
        
      </main>
  )
}
