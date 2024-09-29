import React from 'react'
import './UserAuthUI.css'
import '../App.css'
import auth_image from '../Assests/auth_image.png'
import pager from '../Assests/pager.png'
const UserAuthUI = ({ children }) => {
  return (
    <>
      <section className='authui'>
        <div className='container'>
          <div className='row'>
            <div className='auth-col-1'>
              <div className='box'>
                <img src={auth_image} alt="Main Shop" className='image' />
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

export default UserAuthUI