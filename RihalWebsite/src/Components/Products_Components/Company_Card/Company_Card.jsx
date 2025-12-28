import React from 'react'
import './Company_Card.css'
import Product_Media from './Product_Media/Product_Media'
import Product_Details from './Product_Details/Product_Details'

const Company_Card = () => {
  return (
    <div className='Company-Card'>
        <div className='Company-Container'>
            <Product_Details />

            <Product_Media />
         </div>


    </div>
  )
}

export default Company_Card