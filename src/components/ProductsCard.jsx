import React from 'react'
import './ProductsCard.css'
import stars from '../Assests/star.png'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/productSlice/productSlice'


const ProductsCard = ({ Image,id,title }) => {
    
    const dispatch = useDispatch()
    const handleAddProduct = ()=>{
        dispatch(addProduct({ name: title, image: Image, id:id }))
        alert("Product Added to cart")
    }

    return (
        <div className='product-card'>
            <div className='product-box'>
                <div className='product-image'>
                    <img src={Image} alt="Product Image" />
                </div>
                <div className='Product-content'>
                    <div className='product-btn'>
                        <button
                            onClick={handleAddProduct}
                        >
                            Add to Cart
                        </button>
                        <button>Quick View</button>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-price'>
                            <h4>Sneakers</h4>
                            <h4>$65</h4>

                        </div>
                        <hr />
                        <div className='product-rating'>
                            <h5>Running</h5>
                            <img src={stars} alt="Star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard