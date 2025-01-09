import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const solutions = [
    "Custom Development",
    "System Integration",
    "Digital Transformation",
    "Cloud Solutions"
  ];

  const company = [
    "About Us",
    "Career",
    "Contact",
    "Partnership"
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="src/assets/LogoColor_165x50.png"
              alt="Logo"
              className="h- w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Regular Links */}
            <a 
              href="#products" 
              className={`nav-link transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200"
              }`}
            >
              Produk
            </a>
            <a 
              href="#technology" 
              className={`nav-link transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200"
              }`}
            >
              Teknologi
            </a>

            {/* Solution Dropdown */}
            <div className="dropdown">
              <button 
                className={`nav-link transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200"
                }`}
              >
                Solution
              </button>
              <div className="dropdown-content">
                <div className="py-2">
                  {solutions.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="dropdown">
              <button 
                className={`nav-link transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200"
                }`}
              >
                Perusahaan
              </button>
              <div className="dropdown-content">
                <div className="py-2">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;