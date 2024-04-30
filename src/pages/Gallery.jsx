import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Function to fetch images from Unsplash API
    const fetchImages = async () => {
      try {
        // Example API endpoint to fetch Unsplash images related to universities
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'university',
            per_page: 9, // Fetch 9 images (3x3 grid)
            orientation: 'landscape', // Prefer landscape images
            client_id: 'YOUR_UNSPLASH_ACCESS_KEY', // Replace with your Unsplash access key
          },
        });
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-page">
      <Navbar isHomePage={false} />
      <h2 style={{ color: '#05F042', textAlign: 'center', margin: '20px 0' }}>Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.urls.regular} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
