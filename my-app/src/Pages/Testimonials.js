import React from "react";

export default function Testimonials(){
        return(
                <div className="flex h-screen bg-gray-200">
                <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
                  <img src="https://i.ibb.co/4FKbFsq/IMG-0185-1.jpg" alt="Profile" className="rounded-full w-24 h-24 mb-4" />
                  <nav className="flex flex-col space-y-4">
                    <a href="/" className="text-white text-xl">Home</a>
                    <a href="/about" className="text-white text-xl">About Me</a>
                    <a href="/resume" className="text-white text-xl">Resume</a>
                    <a href="/portfolio" className="text-white text-xl">Portfolio</a>
                    <a href="/testimonials" className="text-white text-xl">Testimonials</a>
                    <a href="/contact" className=" text-white text-xl">Contact</a>
                  </nav>
                </div>
                </div>
        )
}