import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav(){
        return (
             
                <div className="flex justify-between font-bold bg-white  items-center  py-8 ">
                    <NavLink to ='/portfolio'  className="text-3xl px-10  " > Portfolio</NavLink>
                    
                      <div className=" text-xl  font-medium text-black mr-8 space-x-4  ">
                        <NavLink to ='/' className= 'hover:text-gray-300' > Home</NavLink>
                        <NavLink to ='/about' className= 'hover:text-gray-300' > About</NavLink>
                        <NavLink to = '/projects' className= 'hover:text-gray-300'> Projects </NavLink>
                        <NavLink to ='/contact' className= 'hover:text-gray-300'> Contact </NavLink>
                       </div>
                    
                </div> 
        )
}








