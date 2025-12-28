import React from 'react'
import './Card_Footer_Button.css'
import presentationIcons from '../../../../../../../public/Images/ProductComponenets/Product_Components_Icons/Presentation.svg'

const Card_Footer_Button = () => {
  return (
    <div className='Card-Footer-Button-Container'>
        <button className='Demo-Button Demo-Button-Text'>Book A Demo

            <img src={presentationIcons} alt='Presentation Icon' className='Demo-Button-Icon'/>
        </button>


    </div>
  )
}

export default Card_Footer_Button