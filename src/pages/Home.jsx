import React from 'react'
import Navbar from '../components/Navbar'
import Commitments from '../components/Commitments'
import Services from './Services'
import Enquire from './Enquire'
import MissionnVision from './MissionnVision'
import Testimonials from './Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Commitments/>
      <Services/> 
      <MissionnVision/>
      <div id="inquire" className='enquire-container'>
        <Enquire/>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
