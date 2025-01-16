import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";
import { FaCaretDown } from "react-icons/fa";

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
    "AI Solution",
    "IOT Solution",
  ];

  const company = ["Visi Misi", "Tim Kami", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 poppins-semibold">
        <div className="flex justify-between items-center h-16">
          {/* Logo with conditional source */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={isScrolled || isMenuOpen 
                  ? "src/assets/LogoColor_165x50.png"  // Colored logo
                  : "/LogoWhite_165x50.png"  // White logo
                }
                alt="Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Rest of the navbar code remains the same */}
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled || isMenuOpen ? "text-[#006666]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled || isMenuOpen ? "text-[#006666]" : "text-white"
                }`}
              />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/product"
              className={`nav-link transition-colors ${
                isScrolled
                  ? "text-[#006666] hover:text-[#009f9a]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Produk
            </a>
            <a
              href="/teknologi"
              className={`nav-link transition-colors ${
                isScrolled
                  ? "text-[#006666] hover:text-[#009f9a]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Technology
            </a>

            {/* Solution Dropdown */}
            <div className="dropdown">
              <button
                className={`nav-link transition-colors inline-flex items-center gap-1 ${
                  isScrolled
                    ? "text-[#006666] hover:text-[#009f9a]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                <span>Solution</span>
                <FaCaretDown className="text-sm" />
              </button>
              <div className="dropdown-content">
                <div className="py-2">
                  {solutions.map((item, index) => (
                    <a
                      key={index}
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm text-[#006666] hover:bg-[#009f9a]/10 hover:text-[#009f9a]"
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
                className={`nav-link transition-colors inline-flex items-center gap-1 ${
                  isScrolled
                    ? "text-[#006666] hover:text-[#009f9a]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                <span>Perusahaan</span>
                <FaCaretDown className="text-sm" />
              </button>
              <div className="dropdown-content">
                <div className="py-2">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm text-[#006666] hover:bg-[#009f9a]/10 hover:text-[#009f9a]"
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
                className="px-4 py-2 text-[#006666] hover:bg-[#009f9a]/10"
              >
                Produk
              </a>
              <a
                href="#technology"
                className="px-4 py-2 text-[#006666] hover:bg-[#009f9a]/10"
              >
                Teknologi
              </a>

              {/* Mobile Solution Menu */}
              <div className="px-4">
                <div className="font-semibold text-[#006666] mb-2 inline-flex items-center gap-1">
                  <span>Solution</span>
                  <FaCaretDown className="text-sm" />
                </div>
                <div className="ml-4 flex flex-col space-y-2">
                  {solutions.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[#006666] hover:text-[#009f9a]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Company Menu */}
              <div className="px-4">
                <div className="font-semibold text-[#006666] mb-2 inline-flex items-center gap-1">
                  <span>Perusahaan</span>
                  <FaCaretDown className="text-sm" />
                </div>
                <div className="ml-4 flex flex-col space-y-2">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[#006666] hover:text-[#009f9a]"
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