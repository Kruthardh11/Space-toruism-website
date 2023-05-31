import React, { useEffect, useState } from 'react';
import mobilebg from './assets/crew/background-crew-mobile.jpg';
import tabbg from './assets/crew/background-crew-tablet.jpg';
import desktopbg from './assets/crew/background-crew-desktop.jpg';
import Navbar from './Navbar';
import Logo from './assets/shared/logo.svg';
import ansariimg from './assets/crew/image-anousheh-ansari.png';
import douglasimg from './assets/crew/image-douglas-hurley.png';
import markimg from './assets/crew/image-mark-shuttleworth.png';
import victorimg from './assets/crew/image-victor-glover.png';
import Douglas from './Crew/Douglas';
import Victor from './Crew/Victor';
import Ansari from './Crew/Ansari';
import Mark from './Crew/Mark';


const Crew = () => {
  const [activeSection, setActiveSection] = useState('douglas');

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
    <div className="flex flex-col min-h-screen min-w-screen bg-cover bg-center overflow-hidden   "
      style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <img src={Logo} className="h-7 w-7 ml-10 mt-2 sm:h-12 sm:w-12 sm:mt-10" />
      {/* Main Navbar */}
      <Navbar/>

      <div className='sm:flex'>
      <div>
      <p className='flex text-white ml-[10%] font-barlow text-md tracking-[2.7px] my-[15%] sm:mx-[10%] sm:my-[20%]'> <p className='opacity-30 mx-[5%] sm:mx-[10%] text-md'>02</p> PICK YOUR CREW</p>

      <div className="flex items-center justify-center h-[250px] w-[250px] ml-[20%] sm:h-[400px] sm:w-[400px] sm:ml-[50%] ">
        {/* Image corresponding to the active section */}
        {activeSection === 'douglas' && <img className=' p-[4%] sm:border-0 border-b-2  border-white' src={douglasimg} alt="douglas" />}
        {activeSection === 'mark' && <img className='p-[6%] sm:border-0 border-b-2 border-white' src={markimg} alt="Mark" />}
        {activeSection === 'victor' && <img className=' p-[4%] sm:border-0 border-b-2 border-white' src={victorimg} alt="victor" />}
        {activeSection === 'ansari' && <img className= ' p-[4%] sm:border-0 border-b-2 border-white' src={ansariimg} alt="ansari" />}
      </div>
      </div>
      <div className='sm:ml-[15%] sm:my-[2%]'>
      <nav className="flex justify-center items-center pt-2 bg-white bg-opacity-0 mt-[15%] ">
    <button
    className={`mr-4 py-1 px-1 rounded-full ${
      activeSection === 'douglas' ? 'bg-white border-white' : 'bg-white opacity-70'
    }`}
    onClick={() => handleSectionChange('douglas')}
  ></button>
  <button
    className={`mr-4 py-1 px-1 rounded-full ${
      activeSection === 'mark' ? 'bg-white border-white' : 'bg-white opacity-70'
    }`}
    onClick={() => handleSectionChange('mark')}
  ></button>
  <button
    className={`mr-4 py-1 px-1 rounded-full ${
      activeSection === 'victor' ? 'bg-white border-white' : 'bg-white opacity-70'
    }`}
    onClick={() => handleSectionChange('victor')}
  ></button>
  <button
    className={`mr-2 py-1 px-1 rounded-full ${
      activeSection === 'ansari' ? 'bg-white border-white' : 'bg-white opacity-60'
    }`}
    onClick={() => handleSectionChange('ansari')}
  ></button>
</nav>
    <div className="container mx-auto px-4 py-8">
        {/* Content corresponding to the active section */}
        {activeSection === 'douglas' && <Douglas />}
        {activeSection === 'mark' && <Mark />}
        {activeSection === 'victor' && <Victor />}
        {activeSection === 'ansari' && <Ansari />}
      </div>

      </div>
      </div>
    </div>
  )
}

export default Crew