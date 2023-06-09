import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutcontent from '../components/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading= "ABOUT." text= "I am a Front-end Developer."/>
      <Aboutcontent/>
      <Footer />
    </div>
  )
}

export default About