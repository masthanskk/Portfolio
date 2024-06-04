
import React from 'react';


const Contact = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="bg-yellow-500 p-6 flex flex-col items-center text-white w-1/4">
        <img src="path_to_image" alt="Profile" className="rounded-full w-24 h-24 mb-4" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Me</a>
          <a href="/resume" className="hover:underline">Resume</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">CONTACT</h1>
        <p className="mb-4">Feel free to contact me!</p>
        <p className="mb-8 text-gray-600">
          If you have any questions, suggestions, or just want to say hello, do not hesitate to reach out.
          I'll try to respond as soon as possible.
        </p>
        <div className="flex space-x-8">
          <div className="text-center">
            <img src="path_to_computer_icon" alt="Computer" className="w-16 h-16 mx-auto mb-2" />
            <p>Web Design</p>
          </div>
          <div className="text-center">
            <img src="path_to_phone_icon" alt="Phone" className="w-16 h-16 mx-auto mb-2" />
            <p>+91-8897692954</p>
          </div>
          <div className="text-center">
            <img src="path_to_email_icon" alt="Email" className="w-16 h-16 mx-auto mb-2" />
            <p>Skmasthan.1999@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>THANKS FOR PATIENCE!</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center space-y-4 w-12 bg-yellow-500 text-white">
        <a href="#link1" className="hover:underline">A</a>
        <a href="#link2" className="hover:underline">B</a>
        <a href="#link3" className="hover:underline">C</a>
        <a href="#link4" className="hover:underline">D</a>
      </div>
    </div>
  );
};

export default Contact;
