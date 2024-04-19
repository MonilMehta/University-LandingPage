import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import '../styles/Commitments.css';
import Card2 from './Card2';
import Card from './Card';

const Commitments = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px', // Adjust the negative margin to fit your layout
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row title'>
        <h3 className='excellence'>Universal MBBS commitment to excellence</h3>
        <p className='excellence-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique, tortor nec consequat vulputate.</p>
      </div>
      <div className='flex flex-row desc'>
        <img src={img1} alt='Image 1' className='img1'/>
        <Card2 heading='1000+' desc='students'/>
        <img src={img2} alt='Image 1' className='img2'/>
        <div className='flex flex-col' ref={ref}>
          <motion.div className='card-container'>
            <Card heading='650' desc='abcd3' 
              initial={{ opacity: 0, x: 100 }} // Initial state (hidden and off-screen to the right)
              animate={controls} // Pass the animation controls to animate prop
              transition={{ duration: 0.5 }}
            />
            <Card heading='abcd' desc='abcd3' 
              initial={{ opacity: 0, x: 100 }} 
              animate={controls} 
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <Card heading='abcd' desc='abcd3' 
              initial={{ opacity: 0, x: 100 }} 
              animate={controls} 
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <Card heading='abcd' desc='abcd3' 
              initial={{ opacity: 0, x: 100 }} 
              animate={controls} 
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Commitments;
