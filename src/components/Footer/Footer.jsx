import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src = "" alt="" width={120}/>
                <span className='secondaryText'>We provide the best<br /> service in the industry.</span>

            </div>
            <div className=" flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className='secondaryText'>Address</span>

                <div className='flexCenter f-menu'>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Our Values</span>
                    <span>Contact Us</span>
                </div>
               

            </div>
            
        </div>
        <div className='flexCenter primaryText copyright'>
                    Copyright Belong to StoreWell Infra Pvt.LTD
                </div>
    </section>
  )
}

export default Footer