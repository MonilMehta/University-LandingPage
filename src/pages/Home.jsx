import React from 'react'
import Commitments from '../components/Commitments'
import Services from './Services'
import Enquire from './Enquire'
import MissionnVision from './MissionnVision'
import Testimonials from './Testimonials'
import Footer from '../components/Footer'
import QuesList from '../components/QuesList'
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
      <QuesList/>
      <Footer/>
    </div>
  )
}

export default Home
