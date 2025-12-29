import React from 'react'
import './Product_Media.css'

import Product_Image from '../../../../../public/Images/ProductComponenets/Company_Card_Image/Company_Media/source_Option4.5.png'
const Product_Media = () => {
  return (
    <div className="Product-media">
        <img className="Product-media-image" src={Product_Image} alt="Product Media" />
        
    </div>
  )
}

export default Product_Media