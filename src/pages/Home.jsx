import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import DashBoared from '../components/DashBoared'
import cart from '../Assests/cart_icon.png'
import ProductsCard from '../components/ProductsCard'
import Shoes2 from '../Assests/Shoe_2.png'
import Shoes3 from '../Assests/shoe3.png'
import Shoes4 from '../Assests/shoe4.png'
import Shoes5 from '../Assests/shoe5.png'
import main_banner from '../Assests/main_banner.png'
import small_banner from '../Assests/side_banner.png'



const Home = () => {

  const productData = [
    {
      id: '1',
      title: 'sneaker',
      image: Shoes2
    },
    {
      id: '2',
      title: 'sneaker',
      image: Shoes3
    },
    {
      id: '3',
      title: 'sneaker',
      image: Shoes4
    },
    {
      id: '4',
      title: 'sneaker',
      image: Shoes5
    },
    {
      id: '5',
      title: 'sneaker',
      image: Shoes3
    },
  ]

  return (
    <>
      <DashBoared>
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
              <img src={main_banner} alt="main banner" />
            </div>
            <div className='small-banner'>
              <img src={small_banner} alt="side banner" />
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

      </DashBoared>


    </>
  )
}

export default Home