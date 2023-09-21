import React from "react";
import { useState } from "react";



const Header = ()=> {
    const
     Links = [
     { name : "Home" },
      {name : "About"},
      {name : "Contact" },
      {name : "Service"},
  
    ]
  
    const [isOpen, setIsOpen] = useState(false);
  
   
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-red-500 font-bold text-xl">Prak<span className="text-white">ash</span></span>
          <div className="hidden  md:block">
            <ul className="flex space-x-4">
              {
                Links.map((link)=><li>
                <a href="#" className="text-white hover:text-gray-400">
                  {link.name}
                </a>
              </li>)
              }     
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-400"
              onClick={toggleNavbar}
            >
              {isOpen ? "❌" : "🔽"}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="mt-4 flex flex-col space-y-2">
            {
                Links.map((link)=><li>
                <a href="#" className="text-white hover:text-gray-400">
                  {link.name}
                </a>
              </li>)
              }
            </ul>
          </div>
        )}
      </nav>
    );
  }
  
  export default Header;