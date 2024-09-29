import React from 'react'
import { NavLink } from 'react-router-dom'
import DashBoared from '../components/DashBoared'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../redux/productSlice/productSlice'
import trash from '../Assests/Trash.png'
import counter from '../Assests/counter.png'
import card_detail from '../Assests/card_detail.png'

const Cart = () => {
  const products = useSelector((state) => (state.product))
  const productLength = products.length
  const dispatch = useDispatch()
  // const handleRemoveProduct = (productId)=>{
  //   console.log('delete')
  //   dispatch(deleteProduct(productId))
    
  // }
  return (
    <>
      <DashBoared>
        <section className='cart'>
          <div className='cart-row'>
            <div className='cart-col-1'>
              <NavLink to='/'> &lt; Countinue Shopping </NavLink>
              <hr />
              <h2>Shoping Cart</h2>
              <p>You have {productLength} item in your cart</p>
             <div className='cart-product-wrapper'>
             {
                products.map((item, key) => (
                  <div key={key} >
                    <div className="product-in-cart">
                      <div className='product-detail'>
                        <img src={item.image} alt="cart product" className='card-Image'/>
                        <div className='product-heading'>
                          <h3>{item.name}</h3>
                          <h4>Running</h4>
                        </div>
                      </div>
                      <div className='product-review'>
                        <div className='count'>
                          <span>1</span>
                          <button ><img src={counter} alt="Count" /></button>
                        </div>
                        <h4> $ 65.00</h4>
                        <button
                        // onClick={handleRemoveProduct(item.id)}
                        onClick={ () => dispatch(deleteProduct(item.id))}
                        ><img src={trash} alt="delete" /></button>


                      </div>

                    </div>

                  </div>

                ))
              }
             </div>




            </div>
            <div className='cart-col-2'>
<img src={card_detail} alt="" className='card-Image'/>
            </div>
          </div>

        </section>
      </DashBoared>
    </>

  )
}

export default Cart