import React from 'react'
import './Product_Header.css'

import Product_Header_Top from './Product_Header_Top/Product_Header_Top'
import Product_Industries from './Product_Industries/Product_Industries'

const Product_Header = () => {
    return (
        <div className='Product-Header'>
            <Product_Header_Top />

            <Product_Industries />
            

        </div>
    
  )
}

export default Product_Header
