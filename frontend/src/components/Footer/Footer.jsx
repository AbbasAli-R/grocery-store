import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Thank you for choosing QuickCart! We are dedicated to bringing you the highest quality products and exceptional service. For any inquiries or assistance, feel free to reach out to our customer support team. Stay connected with us on social media for the latest updates, promotions, and exclusive offers. Your satisfaction is our priority, and we look forward to serving you again.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-123-456-7890</li>
                <li>contact@QuickCart.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © QuickCart.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer
