import { useEffect, useState } from 'react';
import moonImage from './assets/destination/image-moon.png';
import marsImage from './assets/destination/image-mars.png';
import europaImage from './assets/destination/image-europa.png';
import titanImage from './assets/destination/image-titan.png';
import Navbar from './Navbar';
import MoonSection from './Destination/MoonSection.jsx';
import MarsSection from './Destination/MarsSection.jsx';
import EuropaSection from './Destination/EuropaSection.jsx';
import TitanSection from './Destination/TitanSection.jsx';
import mobilebg from './assets/destination/background-destination-mobile.jpg';
import tabbg from './assets/destination/background-destination-tablet.jpg';
import desktopbg from './assets/destination/background-destination-desktop.jpg';
import Logo from './assets/shared/logo.svg';


const Destination = () => {
  const [activeSection, setActiveSection] = useState('moon');

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
      <div className='sm:flex '>
      <div>
      <p className='flex text-white ml-[10%] font-barlow text-md tracking-[2.7px] my-[5%] sm:mx-[30%] sm:my-[20%]'> <p className='opacity-30 mx-[5%] text-md'>01</p> PICK YOUR DESTINATION</p>
      
      {/* Image section */}
      <div className="flex items-center justify-center h-[250px] w-[250px] ml-[20%] sm:h-[350px] sm:w-[350px] sm:ml-[50%]">
        {/* Image corresponding to the active section */}
        {activeSection === 'moon' && <img src={moonImage} alt="Moon" />}
        {activeSection === 'mars' && <img src={marsImage} alt="Mars" />}
        {activeSection === 'europa' && <img src={europaImage} alt="Europa" />}
        {activeSection === 'titan' && <img src={titanImage} alt="Titan" />}
      </div>
      </div>
      {/* Small Navbar */}
      <div className='sm:ml-[30%] sm:my-[2%]'>
      <nav className="flex justify-center items-center  pt-2 bg-white bg-opacity-0 mt-[10%]">
        <button
          className={`mr-2 py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'moon' ? 'bg-white text-white bg-opacity-0 border-b-2 border-white' : 'bg-white text-white bg-opacity-0 opacity-70'
          }`}
          onClick={() => handleSectionChange('moon')}
        >
          MOON
        </button>
        <button
          className={`mr-2 py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'mars' ? 'bg-white text-white bg-opacity-0 border-b-2 border-white' : 'bg-white text-white bg-opacity-0 opacity-70'
          }`}
          onClick={() => handleSectionChange('mars')}
        >
          MARS
        </button>
        <button
          className={`mr-2 py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'europa' ? 'bg-white text-white bg-opacity-0 border-b-2 border-white' : 'bg-white text-white bg-opacity-0 opacity-70'
          }`}
          onClick={() => handleSectionChange('europa')}
        >
          EUROPA
        </button>
        <button
          className={`mr-2 py-2 px-4 font-barlow tracking-[1px] ${
            activeSection === 'titan' ? 'bg-white text-white bg-opacity-0 border-b-2 border-white' : 'bg-white text-white bg-opacity-0 opacity-70'
          }`}
          onClick={() => handleSectionChange('titan')}
        >
          TITAN
        </button>
      </nav>

      {/* Section content */}
      <div className="container mx-auto px-4 py-8">
        {/* Content corresponding to the active section */}
        {activeSection === 'moon' && <MoonSection />}
        {activeSection === 'mars' && <MarsSection />}
        {activeSection === 'europa' && <EuropaSection />}
        {activeSection === 'titan' && <TitanSection />}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Destination;
