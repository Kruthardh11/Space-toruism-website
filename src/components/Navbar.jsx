import React, { useEffect, useState } from 'react';
import { BsJustify } from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    handleSetActivePage();
  }, []);

  // Function to set the active page
  const handleSetActivePage = () => {
    const dummy = window.location.pathname;
    const currentPage = dummy.substring(1);

    setActivePage(currentPage);
  };
  return (
    
    <div>
        
     <nav className="fixed right-0 left-0 top-0">
      <div className={`bg-white ${isOpen ? 'bg-opacity-80 ml-[40%]' : 'bg-opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-1 sm:px-6">
          <div className="flex justify-start items-start py-3 md:justify-start md:space-x-1">
            <div className="flex justify-start lg:w-0 lg:flex-1"></div>
            <div className="">
              <button
                onClick={toggleNavbar}
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              >
                <BsJustify className={`${isOpen ? 'hidden' : 'sm:hidden'}`} />
                <AiOutlineClose className={`${isOpen ? 'bg-black' : 'hidden'}`} />
              </button>
            </div>
            <div
              className={`md:flex items-center justify-end md:flex-1 lg:w-auto pb-[100%] sm:pb-[50%] ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-10 mr-10 mb-20 sm:bg-white sm:bg-opacity-50 sm:mr-0">
                <li><Link
                    to="/"
                    className={`flex font-bellefair text-lg tracking-[4.75px] ${
                      activePage === '' ? 'text-black border-b-2 border-white' : 'text-black'
                    }`}
                    
                  >
                    <p className="mr-2 font-bold">00</p> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destination"
                    className={`flex font-bellefair text-lg tracking-[4.75px] ${
                      activePage === 'destination' ? 'text-black  border-b-2 border-white' : 'text-black'
                    }`}
                    
                  >
                    <p className="mr-2 font-bold">01</p> Destination
                  </Link>
                </li>
                <li>
                  <Link to="/crew"
                    className={`flex font-bellefair text-lg tracking-[4px] ${
                      activePage === 'crew' ? 'text-black  border-b-2 border-white' : 'text-black'
                    }`}
                    
                  >
                    <p className="mr-2 font-bold">02</p> Crew
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    className={`flex font-bellefair text-lg tracking-[4.75px] ${
                      activePage === 'technology' ? 'text-black  border-b-2 border-white' : 'text-black'
                    }`}
                  >
                    <p className="mr-2 font-bold">03</p> Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar