import React from 'react'
import './Card_Footer.css'
import Card_Footer_Button from './Card_Footer_Button/Card_Footer_Button'
import Card_Footer_Link from './Card_Footer_Link/Card_Footer_Link'

const Card_Footer = () => {
  return (
    <div className='Card-Footer'>
        <Card_Footer_Button />
        <Card_Footer_Link />
    </div>
  )
}

export default Card_Footer