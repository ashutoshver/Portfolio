import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading= "ABOUT." text= "I am a Front-end Developer."/>
      <Footer />
    </div>
  )
}

export default About