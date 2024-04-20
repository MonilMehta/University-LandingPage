import React from 'react';
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-blue-600 text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Universal MBBS Heading with Description */}
          <div className="text-center md:text-left flex flex-col justify-content:center">
            <Typography variant="h5" className="mb-2">
              UNIVERSALMBBS
            </Typography>
            <p className="text-sm font-normal opacity-80 mb-4">
              At UNIVERSALMBBS, we are committed to providing the highest quality services to our clients. We maintain a strong network of partner universities across the globe, ensuring that our students have access to the best education and training opportunities. We also offer pre-departure and post-arrival support to ensure a smooth transition for our students.
            </p>
          </div>
          {/* Contact Us Section */}
          <div className="text-center md:text-right">
            <Typography variant="small" color="blue-gray" className="mb-3 font-medium opacity-40">
              Contact Us
            </Typography>
            <div className="mb-4">
              <Typography variant="small" className="mb-1">Address:</Typography>
              <Typography variant="small" className="mb-1">Sadhna bhavan L-3rd/83, Sector -D, Aliganj, Near Puraniya chouraha, Lucknow, Uttar Pradesh -226024, landmark - backside of UPPSC building</Typography>
              <Typography variant="small" className="mb-1">Mobile: +91-8210400672 / +91-8709001966</Typography>
              <Typography variant="small">Email: <a href="mailto:admission@universalmbbs.com">admission@universalmbbs.com</a>, <a href="mailto:info@universalmbbs.com">info@universalmbbs.com</a></Typography>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} UNIVERSALMBBS. All Rights Reserved.
          </Typography>
          {/* Social Media Icons */}
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Facebook Icon */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Facebook Icon SVG */}
              </svg>
            </Typography>
            {/* Twitter Icon */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Twitter Icon SVG */}
              </svg>
            </Typography>
            {/* LinkedIn Icon */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* LinkedIn Icon SVG */}
              </svg>
            </Typography>
            {/* Instagram Icon */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Instagram Icon SVG */}
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
