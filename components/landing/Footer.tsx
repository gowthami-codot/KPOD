import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-gray-600 mb-4">Get in touch</h4>
          </div>
          <div>
            <h4 className="text-gray-600 mb-4">Privacy Policy</h4>
          </div>
          <div>
            <h4 className="text-gray-600 mb-4">Terms and conditions</h4>
          </div>
          <div>
            <p className="text-gray-600 mb-4">interested in building India's AI cloud?</p>
            <Link href="/join" legacyBehavior>
              <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Join us →
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex items-center">
          <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-bold">OLA KRUTRIM</span> © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;