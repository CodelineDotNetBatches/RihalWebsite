import React from 'react'

import './Product_Header_Top.css'
import Product_Logo from './Product_Logo/Product_Logo'
import Product_Name from './Product_Name/Product_Name'
const Product_Header_Top = () => {
  return (
   <div className='Product-Header-Top'>
            <div className='Product-Logo-name'>
                <Product_Logo />

            </div>
            <div className='product-name'>
                <Product_Name />
            </div>
            
            

        </div>
    
  )
}

export default Product_Header_Top