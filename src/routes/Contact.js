import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import { FaLinkedin, FaMailBulk, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Lets have a chat." />
      <div className='contact-flex'>

        <div className='left-con'>
          <div className='social'>
            <FaLinkedin size={30} style={{ color: 'white', marginRight: "1rem" }} />
            <Link target="blank" to="https://www.linkedin.com/in/ashutosh-verma-69a685235/">https://www.linkedin.com/in/ashutosh-verma-69a685235/</Link>
          </div>
          <div className='social'>
            <FaMailBulk size={30} style={{ color: 'white', marginRight: "1rem" }} />
            <p>ashutoshrock24@gmail.com</p>
          </div>
          <div className='social'>
            <FaWhatsapp size={30} style={{ color: 'white', marginRight: "1rem" }} />
            <p>+91 6307007248</p>
          </div>
        </div>
        <div className='right-con'>
          <div className='social'>
            <FaGithub size={30} style={{ color: 'white', marginRight: "1rem" }} />
            <Link target="blank" to="https://github.com/ashutoshver">https://github.com/ashutoshver</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact