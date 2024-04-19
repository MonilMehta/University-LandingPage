import React from 'react'
import Navbar from '../components/Navbar'
import Commitments from '../components/Commitments'
import Services from './Services'
import Enquire from './Enquire'
import MissionnVision from './MissionnVision'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className='home'>
      <Commitments/>
      <Services/> 
      <MissionnVision/>
      <Enquire/>
      <Testimonials/>
    </div>
  )
}

export default Home
