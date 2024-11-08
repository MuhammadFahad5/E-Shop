import React from 'react'
import './MainBanner.css'
import banner_text_upper from '../Assests/banner-text-up.png'
import banner_text_down from '../Assests/banner-text-down.png'
import banner_pink from '../Assests/banner-pink.png'
import banner_shoe from '../Assests/banner_shoe.png'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/productSlice/productSlice'

const MainBanner = ({ Image,id,title }) => {
    const dispatch = useDispatch()
    const handleAddProduct = ()=>{
        dispatch(addProduct({ name: title, image: Image, id:id }))
        alert("Product Added to cart")
    }
    return (
        <>
            <div className='banner-container'>
                <img src={banner_text_upper} alt="banner" className='banner-upper'/>
                <img src={banner_text_down} alt="banner" className='banner-down'/>
                <div className='banner-row'>
                    <div className='banner-col-1'>
                        <img src={banner_pink} alt="banner" className='banner-pink'/>
                        <img src={banner_shoe} alt="banner" className='banner-shoe'/>

                    </div>
                    <div className='banner-col-2'>
                        <h1>ESSENTIAL <br />
                        ITEMS FOR</h1>
                        <h2>$99</h2>
                        <p>Nulla accumsan malesuada egestas nam <br /> dignissim. Quis vulputate blandit duis</p>
                        <button  onClick={handleAddProduct}>Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner