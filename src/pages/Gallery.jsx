// GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch images
    const fetchImages = async () => {
      try {
        // Example API endpoint
        const response = await axios.get('https://example.com/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-page">
      <h2 style={{ color: '#05F042' }}>Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
