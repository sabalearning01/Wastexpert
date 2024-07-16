import React from 'react'
import './Services.css'
import IMG from '../../Images/IMG.png'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import underline from '../../Images/underline.png'

 const Services = () => {
  return (
    <div>
      <Navbar2/>
      <div className='foster'>
        <div className='lside'>
          <h2>Pick Up</h2>
          <img src = {underline} alt="line"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.</p>
        </div>

        <div className='rside'>
        <img src = {IMG} alt="truck"/>
        </div>
      </div>

    </div>
  )
}

export default Services