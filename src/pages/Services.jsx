import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import serviceImg from '../assets/services.png'; // Import the service image
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Lorem Ipsum 1',
      description: 'Lorem ipsum dolor sit ',
    },
    {
      id: 2,
      title: 'Lorem Ipsum 2',
      description: 'Ut enim ad ',
    },
    {
      id: 3,
      title: 'Lorem Ipsum 1',
      description: 'Lorem ipsum dolor sit ',
    },
    {
      id: 4,
      title: 'Lorem Ipsum 2',
      description: 'Ut enim ad ',
    },
    {
      id: 5,
      title: 'Lorem Ipsum 1',
      description: 'Lorem ipsum dolor sit ',
    },
    {
      id: 6,
      title: 'Lorem Ipsum 2',
      description: 'Ut enim ad ',
    },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className='mx-16 main'>
      <h3 className='head text-center mt-20 mb-10'>Explore Our Academic Offerings Chart Your Path to Success</h3>
      <p className='descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit. </p>

      <div className='services-container'>
        {services.map(service => (
          <motion.div
            key={service.id}
            className='service-card'
            ref={ref}
            initial={{ x: -100 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <img src={serviceImg} alt='Service' className='service-img' />
            <div className='service-content'>
              <h4 className='service-title'>{service.title}</h4>
              <p className='service-description'>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
