import React from 'react';
import './footer.css';
import { FaHome, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome color='white' size={20} marginRight="2rem" />
                    </div>
                    <p>Plot-119 Seemant Nagar, Basera Mod, Kalyanpur, Lucknow, Uttar Pradesh</p>
                    <p>India.</p>
                </div>
                <div className='phone'>
                <FaPhone color='white' size={20} marginRight="2rem" />
                </div>
                <div className='right'></div>
            </div>
        </div>
    )
}

export default Footer;