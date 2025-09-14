import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Cloth Rental</h1>
          <p className="text-gray-400 text-sm">
            Rent your favorite clothes easily and quickly. Sustainable fashion at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-2">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-2">
            Subscribe to get latest updates and offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social & Contact */}
        <div>
          <h2 className="text-white font-semibold mb-2">Follow & Contact</h2>
          <div className="flex space-x-4 mb-2">
            <a href="#" className="text-blue-400 hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Email: <a href="mailto:info@clothrental.com" className="hover:text-blue-400">info@clothrental.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 234 567 890</a>
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; 2024 Cloth Rental. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
