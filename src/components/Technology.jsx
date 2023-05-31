import React, { useEffect, useState } from 'react';
import Sec1 from './tech/Sec1';
import Sec2 from './tech/Sec2';
import Sec3 from './tech/Sec3';
import mobilebg from './assets/technology/background-technology-mobile.jpg';
import tabbg from './assets/technology/background-technology-tablet.jpg';
import desktopbg from './assets/technology/background-technology-desktop.jpg';
import launchimg from './assets/technology/image-launch-vehicle-landscape.jpg';
import spaceimg from './assets/technology/image-space-capsule-landscape.jpg';
import spaceSportimg from './assets/technology/image-spaceport-landscape.jpg';
import Navbar from './Navbar';


const Technology = () => {
  const [activeSection, setActiveSection] = useState('sec1'); // Set initial active section to 1

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const [bgImageUrl, setBgImageUrl] = useState('');

  const handleWindowResize = () => {
    if (window.innerWidth < 768) {
      setBgImageUrl(mobilebg); // Mobile image
    } else if (window.innerWidth < 1024) {
      setBgImageUrl(tabbg); // Tablet image
    } else {
      setBgImageUrl(desktopbg); // Desktop image
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImageUrl})` }}>

        <Navbar/>
      {/* desktop View */}
      
      <div className=" hidden md:flex">
      <nav className="flex flex-col justify-center items-center bg-gray-200">
        <button
          className={`py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'sec1' ? 'bg-white text-black' : 'text-gray-500'
          }`}
          onClick={() => handleSectionChange('sec1')}
        >
          1
        </button>
        <button
          className={`py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'sec2' ? 'bg-white text-black' : 'text-gray-500'
          }`}
          onClick={() => handleSectionChange('sec2')}
        >
          2
        </button>
        <button
          className={`py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'sec3' ? 'bg-white text-black' : 'text-gray-500'
          }`}
          onClick={() => handleSectionChange('sec3')}
        >
          3
        </button>
      </nav>

        
      </div>
      {/* mobile/tab View */}
      <div className="md:hidden">

      <p className='flex text-white ml-[10%] font-barlow text-md tracking-[2.7px] my-[15%] sm:mx-[10%] sm:my-[20%]'> <p className='opacity-30 mx-[5%] sm:mx-[10%] text-md'>03</p> Space Launch 101</p>

        <div>
        {activeSection === 'sec1' && <img className=' ' src={launchimg} alt="" />}
        {activeSection === 'sec2' && <img className='' src={spaceimg} alt="" />}
        {activeSection === 'sec3' && <img className='' src={spaceSportimg} alt="" />}
        </div>
      <nav className="flex justify-center items-center mt-[5%] ">
      <button
        className={`mr-3 py-2 px-4 font-barlow text-xl tracking-[1px] rounded-full ${
          activeSection === 'sec1' ? 'bg-white text-black' : 'text-gray-500'
        }`}
        onClick={() => handleSectionChange('sec1')}
      >
        1
      </button>
      <button
        className={` mr-3 py-2 px-4 text-xl font-barlow tracking-[1px] rounded-full ${
          activeSection === 'sec2' ? 'bg-white text-black' : 'text-gray-500'
        }`}
        onClick={() => handleSectionChange('sec2')}
      >
        2
      </button>
      <button
        className={`mr-3 py-2 px-4 text-xl font-barlow tracking-[1px] rounded-full ${
          activeSection === 'sec3' ? 'bg-white text-black' : 'text-gray-500'
        }`}
        onClick={() => handleSectionChange('sec3')}
      >
        3
      </button>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {/* Content corresponding to the active section */}
        {activeSection === 'sec1' && <Sec1 />}
        {activeSection === 'sec2' && <Sec2 />}
        {activeSection === 'sec3' && <Sec3 />}
      </div>
          
      </div>
    </div>
  );
};

export default Technology;