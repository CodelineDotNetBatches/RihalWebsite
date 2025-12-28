import React from 'react'
import './Card_Footer_Link.css'
import Arrow_Icon from '../../../../../../../public/Images/ProductComponenets/Product_Components_Icons/arrow-right.svg'

const Card_Footer_Link = () => {
  return (
    <div className='Card-Footer-Link-Container'>
        
        <div className='Card-Footer-Link-Text'>View Product Page
            



        </div>
        <img src={Arrow_Icon} alt='Arrow Icon' className='Card-Footer-Link-Icon'/>
    </div>
  )
}

export default Card_Footer_Link