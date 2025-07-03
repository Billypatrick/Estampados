import React, { useState } from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigationClick = (pageId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const section = document.getElementById(pageId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false); 
  };

  return (
    <header className="bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Polos <span className="text-indigo-600">Chidos</span>
        </h1>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => setCurrentPage('home')} className={`text-lg font-medium transition-colors duration-300 ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('catalog')} className={`text-lg font-medium transition-colors duration-300 ${currentPage === 'catalog' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
                Catálogo
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigationClick('opiniones')} className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-colors duration-300">
                Opiniones
              </button>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <button onClick={() => { setCurrentPage('home'); toggleMenu(); }} className="block text-gray-700 hover:text-indigo-600 text-lg font-medium transition-colors duration-300 py-2">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentPage('catalog'); toggleMenu(); }} className="block text-gray-700 hover:text-indigo-600 text-lg font-medium transition-colors duration-300 py-2">
                Catálogo
              </button>
            </li>
            <li>
              <button onClick={() => { handleNavigationClick('opiniones'); toggleMenu(); }} className="block text-gray-700 hover:text-indigo-600 text-lg font-medium transition-colors duration-300 py-2">
                Opiniones
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;