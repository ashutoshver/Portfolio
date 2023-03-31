import React from 'react'
import './Heroimg.css'
import IntroImg from '../Images/hero.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt= "heroimg"/>
        </div>
        <div className='content'>
            <p>HI, I'M A FRONTEND DEVELOPER</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn" >Projects</Link>
                <Link to="/contact" className="btn btn-light" >Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg