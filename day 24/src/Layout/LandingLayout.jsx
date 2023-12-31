// import "./App.css";
// import "./landing.css";
import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Testimonial from '../Components/Testimonial'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import feedback from '../pages/feedback';
const LandingLayout = () => {
  return (
    <>
    <div className="app">
        <Home />
         <About />
         <feedback />
         <Testimonial />
         <Contact />
         
        <Footer />
    </div>
    </>
  )
}

export default LandingLayout