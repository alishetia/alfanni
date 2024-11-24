import React, { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wrench className="h-8 w-8 text-yellow-500" />
            <span className="mr-2 text-2xl font-bold text-gray-800">الفني</span>
          </div>

          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-yellow-500">الرئيسية</a>
            <a href="#services" className="text-gray-700 hover:text-yellow-500">خدماتنا</a>
            <a href="#stats" className="text-gray-700 hover:text-yellow-500">إنجازاتنا</a>
            <a href="#testimonials" className="text-gray-700 hover:text-yellow-500">آراء العملاء</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500">اتصل بنا</a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">الرئيسية</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">خدماتنا</a>
              <a href="#stats" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">إنجازاتنا</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">آراء العملاء</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">اتصل بنا</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;