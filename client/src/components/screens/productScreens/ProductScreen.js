import React, { useEffect, useState} from 'react';
import {useDispatch,  useSelector} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productDetails } from '../../../reduxComponent/Actions/productActions';
import LoadingBox from '../../box/LoadingBox';
import MessageBox from '../../box/MessageBox';
import Rating from '../../Rating';
import './styles.css';


export default function ProductScreen(props) {
const [qty, setQty] = useState(1);
const dispatch = useDispatch();
const productDetail = useSelector(state => state.productDetail)
const {product, error, loading} = productDetail
const {id} = useParams()
const navigate = useNavigate();
const productId = id
  useEffect(() => {
    dispatch(productDetails(productId))
  },[dispatch, productId]);
  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`)
  }

return (
<div>
{loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReview={product.numReview}
                  ></Rating>
                </li>
                <li>Pirce : N{product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">N{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {
                    product.countInStock > 0 && (
                  <>
                  <li>
                        <div className='row'>
                            <div>QTY</div>
                            <div>
                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map(x => 
                                            <option value={x+1} key={x+1}>{x+1}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                  </li>
                  <li>
                    <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                  </li>
                  </>
                    )  
                  }
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}