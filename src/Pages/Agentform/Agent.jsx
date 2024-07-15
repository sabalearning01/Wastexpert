import React from 'react'
import './Agent.css'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import GCR from '../../Images/GCR.png'
import AGENTIMAGE from '../../Images/AGENTIMAGE.png'

 const Agent = () => {
  return (
    <div className='mo'>
      <Navbar2/>
       <img  className ="bgimg" src={GCR} alt="backgroundgimage"/> 
        <div className='maincontainer'>
            <div className='lft'>
             <h2>Love to Chill with the ‘BIG’ boys?</h2>
             <p>Then sign up, Get screened to be our Agent. We will provide you with all the neccessary equipment to work with, as well as Customers to transact with. Start earn immediately!</p>
             <button className='agt'><a href="#">Become an agent</a></button>
            </div> 
            <div className='rth'>
                <img src={AGENTIMAGE} alt=""/> 
            </div>
        </div>








    </div>
  )
}

export default Agent