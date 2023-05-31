import React, { useEffect, useState } from 'react'
import desktopbg from './assets/home/desktopbg.jpg';
import mobilebg from './assets/home/background-home-mobile.jpg';
import tabbg from './assets/home/background-home-tablet.jpg';
import Navbar from './Navbar.jsx'

import Logo from './assets/shared/logo.svg';

const Home = () => {
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
   
    <Navbar/>
   <div className='sm:flex sm:flex-cols-2 sm:mt-[5%]'>
     <div className="text-white  mb-[40%] mt-[20%] sm:mt-[5%] sm:pr-[10%] sm:ml-[10%] ">
     <p className='font-barlow text-md tracking-[2px] mx-[15%] sm:mx-[1%] '>SO, YOU WANT TO TRAVEL TO</p>
      <p className='font-bellefair text-8xl tracking-[4px] my-5 mx-[12%]'>SPACE</p>
      <p className="text-base font-barlow ml-[8%] sm:text-sm sm:ml-[1%] whitespace-nowrap sm:whitespace-normal">
  Let’s face it, if you want to go to space, you might
</p>
<p className="text-base font-barlow ml-[8%] sm:text-sm sm:ml-[1%] whitespace-nowrap sm:whitespace-normal">
  as well genuinely go to outer space and not hover
</p>
<p className="text-base font-barlow ml-[8%] sm:ml-[1%] sm:text-sm whitespace-nowrap sm:whitespace-normal">
  kind of on the edge of it. Well sit back, and relax
</p>
<p className="text-base font-barlow ml-[8%] sm:ml-[1%] sm:text-sm whitespace-nowrap sm:whitespace-normal">
  because we’ll give you a truly out of this world
</p>
<p className="text-base font-barlow ml-[40%] sm:ml-[1%] sm:text-sm whitespace-nowrap sm:whitespace-normal">
  experience!
</p>
     </div>
     <div className="flex justify-center items-center sm:ml-[20%] sm:mb-[25%]">
       <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center sm:w-48 sm:h-48">
         <span className="text-black font-bellefair text-lg tracking-[2px] sm:text-2xl">EXPLORE</span>
       </div>
     </div>
     </div>
   </div>
  )
}

export default Home