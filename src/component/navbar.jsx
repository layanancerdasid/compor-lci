import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    "Custom Development",
    "System Integration",
    "Digital Transformation",
    "Cloud Solutions",
  ];

  const company = ["About Us", "Career", "Contact", "Partnership"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="src\assets\LogoColor_165x50.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled || isMenuOpen ? "text-gray-700" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled || isMenuOpen ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#products"
              className={`nav-link transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Produk
            </a>
            <a
              href="#technology"
              className={`nav-link transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Teknologi
            </a>

            {/* Solution Dropdown */}
            <div className="dropdown">
              <button
                className={`nav-link transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Solution
              </button>
              <div className="dropdown-content">
                <div className="py-2">
                  {solutions.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
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
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Perusahaan
              </button>
              <div className="dropdown-content">
                <div className="py-2">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#products"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Produk
              </a>
              <a
                href="#technology"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Teknologi
              </a>

              {/* Mobile Solution Menu */}
              <div className="px-4">
                <div className="font-semibold text-gray-700 mb-2">Solution</div>
                <div className="ml-4 flex flex-col space-y-2">
                  {solutions.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Company Menu */}
              <div className="px-4">
                <div className="font-semibold text-gray-700 mb-2">
                  Perusahaan
                </div>
                <div className="ml-4 flex flex-col space-y-2">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
