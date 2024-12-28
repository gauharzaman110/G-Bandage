import 'tailwindcss/tailwind.css';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        <div className="px-2 sm:px-4">
          <h4 className="font-semibold mb-2 text-base md:text-lg">Company Info</h4>
          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
        <li className="hover:text-gray-800 cursor-pointer">About Us</li>
        <li className="hover:text-gray-800 cursor-pointer">Career</li>
        <li className="hover:text-gray-800 cursor-pointer">We are hiring</li>
        <li className="hover:text-gray-800 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="px-2 sm:px-4">
          <h4 className="font-semibold mb-2 text-base md:text-lg">Legal</h4>
          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
        <li className="hover:text-gray-800 cursor-pointer">About Us</li>
        <li className="hover:text-gray-800 cursor-pointer">Career</li>
        <li className="hover:text-gray-800 cursor-pointer">We are hiring</li>
        <li className="hover:text-gray-800 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="px-2 sm:px-4">
          <h4 className="font-semibold mb-2 text-base md:text-lg">Features</h4>
          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
        <li className="hover:text-gray-800 cursor-pointer">Business Marketing</li>
        <li className="hover:text-gray-800 cursor-pointer">User Analytics</li>
        <li className="hover:text-gray-800 cursor-pointer">Live Chat</li>
        <li className="hover:text-gray-800 cursor-pointer">Unlimited Support</li>
          </ul>
        </div>
        <div className="px-2 sm:px-4">
          <h4 className="font-semibold mb-2 text-base md:text-lg">Resources</h4>
          <ul className="text-xs md:text-sm text-gray-600 space-y-1">
        <li className="hover:text-gray-800 cursor-pointer">iOS & Android</li>
        <li className="hover:text-gray-800 cursor-pointer">Watch a Demo</li>
        <li className="hover:text-gray-800 cursor-pointer">Customers</li>
        <li className="hover:text-gray-800 cursor-pointer">API</li>
          </ul>
        </div>
        <div className="px-2 sm:px-4">
          <h4 className="font-semibold mb-2 text-base md:text-lg">Get in Touch</h4>
          <form className="space-y-2">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-3 py-2 text-xs md:text-sm"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-xs md:text-sm">
          Subscribe
        </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">Lorem ipsum dolor amet.</p>
        </div>
      </div>
        <div>
          <h4 className="font-semibold mb-2">Company Info</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>About Us</li>
            <li>Career</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>About Us</li>
            <li>Career</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Features</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Business Marketing</li>
            <li>User Analytics</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>iOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get in Touch</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 text-sm"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">Lorem ipsum dolor amet.</p>
        </div>
      </div> */}
      <p className="text-center text-xs text-gray-400 mt-8">
        Made With Love By Finand All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
