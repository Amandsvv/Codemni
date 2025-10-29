import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <img src="logo.svg" alt="logo" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-light text-lg">
            <a href="#home" className="hover:text-gray-900 transition">Home</a>
            <a href="#resources" className=" hover:text-gray-900 transition">Resources</a>
            <a href="#docs" className="hover:text-gray-900 transition">Docs</a>
            <a href="#pricing" className=" hover:text-gray-900 transition">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 border rounded-3xl hover:bg-gray-50 transition">
              Request Demo
            </button>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-3xl hover:bg-gray-800 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900">Docs</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-left">
                Request Demo
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

}