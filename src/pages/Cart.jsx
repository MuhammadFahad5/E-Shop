import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import PaymentCard from '../components/PaymentCard'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../redux/productSlice/productSlice'
import trash from '../Assests/Trash.png'
import down from '../Assests/down-count.png'
import up from '../Assests/up-count.png'



const Cart = () => {
  const products = useSelector((state) => (state.product))
  const productLength = products.length
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <DashBoard>
        <section className='cart'>
          <div className='cart-row'>
            <div className='cart-col-1'>
              <NavLink to='/'> &lt; Countinue Shopping </NavLink>
              <hr className='cart-hr'/>
              <h2>Shoping Cart</h2>
              <p>You have {productLength} item in your cart</p>
              <div className='cart-product-wrapper'>
                {
                  products.map((item, key) => (
                    <div key={key} >
                      <div className="product-in-cart">
                        <div className='product-detail'>
                          <img src={item.image} alt="cart product" className='cart-Image' />
                          <div className='product-heading'>
                            <h3>{item.name}</h3>
                            <h4>Running</h4>
                          </div>
                        </div>
                        <div className='product-review'>
                          <div className='count'>
                            <span>{count}</span>
                            <div className='counter-arrow'>
                              <button onClick={increment}><img src={up} alt="Count" /></button>
                              <button onClick={decrement}><img src={down} alt="Count" /></button>
                            </div>
                          </div>
                          <h4> $ 65.00</h4>
                          <button
                            onClick={() => dispatch(deleteProduct(item.id))}
                            className='trash'
                          ><img src={trash} alt="delete"  /></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='cart-col-2'>
              <PaymentCard/>
            </div>
          </div>

        </section>
      </DashBoard>
    </>

  )
}

export default Cart