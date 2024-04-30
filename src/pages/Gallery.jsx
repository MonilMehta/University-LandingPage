import React from 'react';
import Masonry from 'react-masonry-css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/imae10.jpeg';
import image11 from '../assets/image11.jpeg';
import Image2 from '../assets/img2.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/gallery.css'; // Import CSS file for styling

const StaticImageGallery = () => {
  // Array of static image paths
  const images = [image1, image2, image3, image4, image5, image6, image7, image8,image9,image10,image11];

  return (
    <div>
      <Navbar />
      <div className="static-image-gallery-container mb-20">
        <h2 className="gallery-heading">Image Gallery</h2>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Image ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </Masonry>
      </div>
      <Footer />
    </div>
  );
};

export default StaticImageGallery;
