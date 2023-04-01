import React from 'react';
import './footer.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: 'white', marginRight: "2rem" }} />
                        <div>
                            <p>Plot-119 Seemant Nagar, Basera Mod, Kalyanpur, Lucknow, UP</p>
                            <p>India.</p>
                        </div>
                    </div>




                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: 'white', marginRight: "2rem" }} />
                            +91-6307007248
                        </h4>
                    </div>

                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: 'white', marginRight: "2rem" }} />
                            ashutoshrock24@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Myself</h4>
                    <p>This is me Ashutosh Verma. I am a frontend Developer.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: 'white', marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: 'white', marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: 'white', marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;