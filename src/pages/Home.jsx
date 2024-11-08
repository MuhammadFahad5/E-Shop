import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import DashBoard from '../components/DashBoard'
import MainBanner from '../components/MainBanner'
import cart from '../Assests/cart_icon.png'
import ProductsCard from '../components/ProductsCard'
import Shoe1 from '../Assests/shoe1.png'
import Shoe2 from '../Assests/shoe2.png'
import Shoe3 from '../Assests/shoe3.png'
import Shoe4 from '../Assests/shoe4.png'
import Shoe5 from '../Assests/shoe5.png'
import small_banner from '../Assests/side_banner.png'



const Home = () => {

  const productData = [
    {
      id: '1',
      title: 'sneaker',
      image: Shoe1
    },
    {
      id: '2',
      title: 'sneaker',
      image: Shoe2
    },
    {
      id: '3',
      title: 'sneaker',
      image: Shoe3
    },
    {
      id: '4',
      title: 'sneaker',
      image: Shoe4
    },
   
    {
      id: '5',
      title: 'sneaker',
      image: Shoe5
    },
  ]

  return (
    <>
      <DashBoard>
        <section className='home'>
          <div className='mycart'>
            <NavLink to='/cart'>
              <button>
                <img src={cart} alt="Cart" />
                My cart
              </button>
            </NavLink>
          </div>
          <div className='banner'>
            <div className='main-banner'>
              <MainBanner Image={productData[4].image} id={productData[4].id} title={productData[4].title}/>
            </div>
            <div className='small-banner'>
              <img src={small_banner} alt="side banner" className='small-banner-image' />
              </div>
          </div>
          <div className='products'>
            {
              productData.map((item) => (
                <ProductsCard key={item.id} Image={item.image} id={item.id} title={item.title}/>
              ))
            }

          </div>
        </section>

      </DashBoard>


    </>
  )
}

export default Home