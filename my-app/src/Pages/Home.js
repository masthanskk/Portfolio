

import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-col justify-center w-1/2 p-16 bg-white">
        <h1 className="text-5xl font-bold mb-4">HI THERE!</h1>
        <h2 className="text-6xl font-bold mb-4">
            I'M <span className="text-yellow-500">Mastan Shaik</span>
        </h2>
        <h3 className="text-lg font-medium mb-4">Front-End React | Developer </h3>
        <p className="text-gray-600 mb-4">
           <img className='h-8 w-8 mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0q7TUjRJA2HaN22zBrgzAwYVvnIIwn1pIw&usqp=CAU' alt="Developer Logo" />        
             A passionate Front-end React <br /> Developer based in
        </p>        
        
        <a href="/about" className="hover:underline">
           <button className="bg-yellow-500 w-full text-white py-2 px-4 rounded">MORE ABOUT ME</button>
        </a>
        
      </div> 
      <div className="relative w-1/2 bg-gray-200"> 
     
      < img className="object-cover w-full h-full" src="https://i.ibb.co/Wf6nSJx/My-Image.jpg" alt="" border="0" />

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4 bg-yellow-500 rounded-full">
          <a href="https://www.linkedin.com/in/sk-masthan/" className="text-white"><IoLogoLinkedin className="h-6 w-6" /></a>
          <a href='/about' className='text-white'> <IoPerson className='h-6 w-6'/> </a>
          <a href="https://github.com/masthanskk" className="text-white"><FaGithub className="h-6 w-6" /></a>
          
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
}
