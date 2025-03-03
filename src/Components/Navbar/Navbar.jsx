import React from 'react'
import './Navbar.css'
import logo  from '../../Images/logo.png'


const Navbar = () => {
  return (
    <div className='mainnav'>

        <div className='nav'>

            <div className='logofont'>
              <div className='flexlogotext'>
               <div><img className='logo' src={logo} alt="logo" /></div>
               <div> <h4>Wastexpert</h4></div>
               </div>
            </div>

            <div className='navbutton'>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
                <button className="pribtn">Dashboard</button>
                </div>
        </div>

    </div>
  )
}

export  default Navbar