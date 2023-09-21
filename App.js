import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
//import Header from "./src/components/Header";


    
       


const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-red-500 font-bold text-xl">Prak<span className="text-white">ash</span></span>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
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
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


const AppLayout = ()=>{
    return(
        <div>
            <Header/>
        </div>
    );
};



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);