import React from 'react'
import './Trusted_Company_Logo.css'
import Trusted_Company_Logo_Image from '../../../../../../../public/Images/ProductComponenets/Company_Card_Image/Company_Logo/image11.png'
import Trusted_Company_Logo_Image1 from '../../../../../../../public/Images/ProductComponenets/Company_Card_Image/Company_Logo/image14.png'
import Trusted_Company_Logo_Image2 from '../../../../../../../public/Images/ProductComponenets/Company_Card_Image/Company_Logo/image12.png'

const Trusted_Company_Logo = () => {
  return (
    <div className="trusted-company-logo-container">
        <img src={Trusted_Company_Logo_Image} alt="Trusted Company Logo" />
        <img src={Trusted_Company_Logo_Image1} alt="Trusted Company Logo" />
        <img src={Trusted_Company_Logo_Image2} alt="Trusted Company Logo" />
        
    </div>
  )
}

export default Trusted_Company_Logo