import React from 'react';
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="hidden md:flex flex-col justify-center">
            <Typography variant="h2" className="mb-4 font-bold">
              UNIVERSALMBBS
            </Typography>
            <p className="text-base mb-4">
              At UNIVERSALMBBS, we are committed to providing the highest quality services to our clients. We maintain a strong network of partner universities across the globe, ensuring that our students have access to the best education and training opportunities. We also offer pre-departure and post-arrival support to ensure a smooth transition for our students.
            </p>
          </div>
          <div>
            <Typography variant="h4" color="blue-gray" className="mb-4 font-bold">
              Contact Us
            </Typography>
            <div className="mb-4">
              <Typography variant="body" className="mb-2">Address:</Typography>
              <Typography variant="body" className="mb-2">Sadhna bhavan L-3rd/83, Sector -D, Aliganj, Near Puraniya chouraha, Lucknow, Uttar Pradesh -226024, landmark - backside of UPPSC building</Typography>
              <Typography variant="body" className="mb-2 text-white">Mobile: +91-8210400672 / +91-8709001966</Typography>
              <Typography variant="body" className="text-white">Email:<a href="mailto:admission@universalmbbs.com" className="text-white">admission@universalmbbs.com</a></Typography>
              <Typography variant="body" className="text-white">- <a href="mailto:info@universalmbbs.com" className="text-white">info@universalmbbs.com</a></Typography>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex items-center justify-between border-t border-blue-gray-50 py-4">
          <Typography variant="body" className="text-blue-gray-900">
            &copy; {currentYear} UNIVERSALMBBS. All Rights Reserved.
          </Typography>
          <div className="hidden md:flex gap-4 text-blue-gray-900">
            <a href="#" className="opacity-80 hover:opacity-100 text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
