import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import './DashBoard.css'
import profile_pic from '../Assests/profile_pic.png'
import home from '../Assests/Icons_home.png'
import products from '../Assests/Icons_products.png'
import notification from '../Assests/Icons_notification.png'
import inventory from '../Assests/Icons_inventory.png'
import analysis from '../Assests/Icons_analysis.png'
import logout from '../Assests/Icons_logout.png'
import menu_btn from '../Assests/hameburger.png'
import close from '../Assests/close.png'


const DashBoard = ({children}) => {
  const [mobileMenu,setMobileMenu] = useState(false)
  const loggedinEmail = localStorage.getItem('loggedinEmail');
  const loggedinUsername = localStorage.getItem('loggedinUsername');
  const navigate = useNavigate()
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("loggedin")
    localStorage.removeItem("loggedinEmail")
    localStorage.removeItem("loggedinUsername")
    navigate('/login')
  }

  const asideList = [
    {
      id: '1',
      title: 'Dashboard',
      active: true,
      image: home
    },
    {
      id: '2',
      title: 'Products',
      active: false,
      image: products
    },
    {
      id: '3',
      title: 'Notification',
      active: false,
      image: notification
    },
    {
      id: '4',
      title: 'analysis',
      active: false,
      image: analysis
    },
    {
      id: '5',
      title: 'Inventory',
      active: false,
      image: inventory
    },
  ]
  return (
    <>
      <section className='dashboard'>
        <button className='Menu-Button' onClick={()=>setMobileMenu(true)}>Menu<img src={menu_btn} alt="Click to Open Menu " /></button>
        <div className='dashboard-container'>
          <div className='row'>
            <aside className={`${mobileMenu?'mobile-menu-active':''}`}>
              <button className='close-menu' onClick={()=>setMobileMenu(false)}> <img src={close} alt="Close Menu" /> </button>
              <div className='profile'>
                <img src={profile_pic} alt="Profile Pic" />
                <div className='profile-content'>
                  <h3>{loggedinUsername}</h3>
                  <h4>{loggedinEmail}</h4>
                </div>

              </div>
              <div className='aside-list'>
                <ul>
                  {
                    asideList.map((item) => (
                      <li key={item.id} className={`${item.active ? 'active' : ''}`}>
                        <img src={item.image} alt={item.title} />
                        <NavLink to='/'>{item.title}</NavLink>
                        {/* <a href="#"></a> */}
                      </li>
                    ))
                  }

                </ul>
              </div>
              <button onClick={handleLogout} className='logout'>
                <img src={logout} alt="Logout" />
                Logout
              </button>
            </aside>
            <main>
                {children}
            </main>
          </div>
        </div>
      </section>

    </>
  )
}

export default DashBoard