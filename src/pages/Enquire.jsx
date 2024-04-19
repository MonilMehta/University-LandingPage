import React, { useState } from 'react';
import enqui from '../assets/enquiry.png';
import '../styles/Enquire.css'; // Import custom CSS for styling

const Enquire = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [neetScore, setNeetScore] = useState('');
  const [country, setCountry] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send it to the server)
    console.log('Form submitted:', { name, email, phone, neetScore, country });
  };

  return (
    <div className='enquire-container'>
      <div className='enquire-content'>
        <h3 className='head'>Enquire now to secure your future</h3>
        <p className='descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit.</p>
      </div>
      <div className='enquire-form'>
        <div className='form-image'>
          <img src={enqui} alt='Enquiry' />
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='tel'
              id='phone'
              placeholder='Enter your phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='neetScore'>NEET Score:</label>
            <input
              type='text'
              id='neetScore'
              placeholder='Enter your NEET score'
              value={neetScore}
              onChange={(e) => setNeetScore(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='country'>Country:</label>
            <input
              type='text'
              id='country'
              placeholder='Enter your country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Enquire;
