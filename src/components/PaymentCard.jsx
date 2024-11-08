import React from 'react'
import './PaymentCard.css'
import profile_pic from '../Assests/profile_pic.png'
// import master_card from '../Assests/master_card.png'
import master_card from '../Assests/master_card.svg'
import Visa_card from '../Assests/Visa_card.png'
import ruPay_card from '../Assests/ruPay_card.png'
import right from '../Assests/Right.png'


const Paymentard = () => {
  return (
    <>
      <div className='card-detail'>
        <div className='card-profile'>
          <h3>Card Details</h3>
          <img src={profile_pic} alt="Profile Pic" />
        </div>
        <div className='card-type'>
          <label htmlFor="payment-card" >Card type</label>
          <div id='payment-card'>
            <button><img src={master_card} alt="Matser Card" /></button>
            <button><img src={Visa_card} alt="Visa Card" /></button>
            <button><img src={ruPay_card} alt="RuPay Card" /></button>
          </div>
        </div>
        <form className='payment-form'>
          <div className='card-form-input'>
            <label htmlFor="name">Name on Card</label>
            <input
              type="text"
              placeholder='Name'
              name="name"
              id='name'
              required
            />
          </div>
          <div className='card-form-input'>
            <label htmlFor="card-number">card Number</label>
            <input
              type="text"
              placeholder='1111 2222 3333 4444'
              name="card-number"
              id='card-number'
            />
          </div>
          <div className='double-card-form-input'>
            <div className='card-form-input'>
              <label htmlFor="expire-date">Expiration date</label>
              <input
                type="text"
                placeholder='mm/yy'
                name="expire-date"
                id='expire-date'
              />
            </div>
            <div className='card-form-input'>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                placeholder='123'
                name="cvv"
                id='cvv'
              />
            </div>
          </div>
          <hr className='payment-form-hr'/>
        </form>
        <div className='total-bill'>
          <div>
            <span>Subtotal</span>
            <span>$1,600</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>$4</span>
          </div>
          <div>
            <span>Total (Tax incl.)</span>
            <span>$1,604</span>
          </div>
        </div>
        <div className='checkout-button'>
          <button>
            <span>$1,672</span>
            <span>Checkout <img src={right} alt="Right Arrow" /></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Paymentard