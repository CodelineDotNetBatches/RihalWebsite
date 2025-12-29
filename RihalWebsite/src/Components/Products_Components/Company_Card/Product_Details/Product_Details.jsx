import React from 'react'
import Product_Header from './Product_Header/Product_Header'
import './Product_Details.css'
import Feature_List from './Feature_List/Feature_List'
import State_Highlight from './State_Highlight/State_Highlight'
import Trusted_By from './Trusted_By/Trusted_By'
import Card_Footer from './Card_Footer/Card_Footer'
const Product_Details = () => {
    return (
        <div className="Product-detailes">
            <div className="Product-detailes-Left">
                <Product_Header />
                <Feature_List />
                <State_Highlight />
                <Trusted_By />
            </div>


            <div className="Product-detailes-second-gap">
                <Card_Footer />
            </div>



        </div>
    )
}

export default Product_Details