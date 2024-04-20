import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import '../styles/Commitments.css';
import Card2 from './Card2';
import Card from './Card';

const Commitments = () => {
  const [counts, setCounts] = useState([
    { count: 0, limit: 500 },
    { count: 0, limit: 100 },
    { count: 0, limit: 100 },
    { count: 0, limit: 100 }
  ]);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px', 
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
      // Start counting up to the target number for each card
      const intervals = counts.map((card, index) => {
        return setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            if (newCounts[index].count < card.limit) {
              newCounts[index].count += 1;
            } else {
              clearInterval(intervals[index]);
              newCounts[index].count = card.limit; // Limit the count to the specified limit
            }
            return newCounts;
          });
        }, 1); // Adjust the interval for speed
      });
      return () => intervals.forEach(clearInterval);
    }
  }, [controls, inView, counts]);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row title'>
        <h3 className='excellence'>Universal MBBS commitment to excellence</h3>
        <p className='excellence-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique, tortor nec consequat vulputate.</p>
      </div>
      <div className='flex flex-row desc'>
        <img src={img1} alt='Image 1' className='img1'/>
        <Card2 heading={`${counts[0].count}`} desc='students'/>
        <img src={img2} alt='Image 1' className='img2'/>
        <div className='flex flex-col' ref={ref}>
          <motion.div className='card-container'>
            {counts.map((card, index) => (
              <Card
                key={index}
                heading={`${card.count}`}
                desc='abcd3'
                initial={{ opacity: 0, x: 100 }} // Initial state (hidden and off-screen to the right)
                animate={controls} // Pass the animation controls to animate prop
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Commitments;
