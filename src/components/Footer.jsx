import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
 import {FooterHolder, FooterHolder_wrapper } from './FooterStyle'
const Footer = () => {
  return (
    <FooterHolder >
      <FooterHolder_wrapper>
        <div className='Footer_holder'>
            <footer className='logo_p'>
                <h1>Venco<span></span></h1>

            </footer>
            <footer>
                <h4>Quick Links</h4>
                <p>About</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Download</p>
                <p>Reviews</p>
            </footer>
            <footer>
                <h4>Support</h4>
                <p>Report a bug</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Sitemap</p>
                <p>FAQs</p>
            </footer>
            <footer>
                <h4>Newsletter</h4>
                <p>Heaven fruitful doesn't over lesser in days. Appear</p>
                <div className='input_icon'>
                      <input type="text" placeholder='Email Address' />
                      <BsFillSendFill className='icon' />
                </div>
            </footer>
        </div> 
        <div className='footer_copy_reserve'>
             <p>Copyright ©2025 All rights reserved | This template is made with <span><IoMdHeartEmpty /></span> by <span>Colorlib</span></p>  
       </div> 
      </FooterHolder_wrapper>
    </FooterHolder>
  )
}

export default Footer