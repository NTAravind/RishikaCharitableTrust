import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import logo from'../images/logo.png';
const scrollToFormAndDonate = () => {
  const formSection = document.querySelector('.f'); // the form container class
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new Event('openDonateTab'));
  }
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav flex justify-between items-center text-[1.2rem] w-full px-6 py-4 pb-3 max-sm:px-2">
      <div className="brand font-bold w-[15rem]">
      <div className='flex flex-row '>
      <img src={logo} className='h-15 w-15 mx-1' />
      <a href="/">Rishika Charitable Trust</a>
      </div>
      </div>
      
      {/* Desktop Navigation - Preserved exactly as original */}
      <div className="links hidden md:flex flex-row gap-20">
      <link to ='/Gallery'>Gallery</link>
        <HashLink smooth to="/#stry">About Us</HashLink>
        <HashLink smooth to="/#prog">Initiatives</HashLink>
      </div>
      
      <div className="hidden md:block">
     
          <button className="dtn bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2" onClick={scrollToFormAndDonate}>
            Donate
          </button>
     
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-800"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a href="/gallery" className="block py-2">Gallery</a>
            <HashLink smooth to="/#about">About Us</HashLink>
            <HashLink smooth to="/#prog">Initiatives</HashLink>
            
              <button className="dtn bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 w-full" onClick={scrollToFormAndDonate}>
                Donate
              </button>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;