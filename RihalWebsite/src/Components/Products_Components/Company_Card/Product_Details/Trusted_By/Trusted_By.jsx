import React from 'react'
import Trusted_Text from './Trusted_Text/Trusted_Text'
import './Trusted_By.css'
import Trusted_Company_Logo from './Trusted_Company_Logo/Trusted_Company_Logo'

const Trusted_By = () => {
  return (
    <div className="trusted_by">
      <Trusted_Text />
      <Trusted_Company_Logo />
    </div>
  )
}

export default Trusted_By