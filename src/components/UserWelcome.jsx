import React from 'react'
import './UserWelcome.css'
import '../global.css'
import shop_image from '../Assests/shop_image.png'
import pager from '../Assests/pager.png'
const UserWelcome = ({ children }) => {
  return (
    <>
      <section className='authui'>
        <div className='welcome-container'>
          <div className='row'>
            <div className='auth-col-1'>
              <div className='box'>
                <img src={shop_image} alt="Main Shop" className='shop-image' />
                <div className='content'>
                  <h1 >Welcome to our shop</h1>
                  <span>Purchase imported shoes</span>
                  <img src={pager} alt="pager" className='' />
                </div>
              </div>
            </div>
            <div className='auth-col-2'> {children}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserWelcome