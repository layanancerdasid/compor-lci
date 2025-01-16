import "./footer.css";
import { FaInstagram, FaLinkedin, FaDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 poppins-semibold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Tentang LCI</h3>
              <p className="text-gray-600 leading-relaxed poppins-regular">
                Layanan Cerdas Indonesia atau LCI adalah perusahaan yang menyediakan 
                produk-produk yang memudahkan, mengefisiensi, dan meningkatkan 
                kualitas hidup.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Alamat</h3>
              <p className="text-gray-600 leading-relaxed poppins-regular">
                Jl. Tubagus Ismail XVI No. 7, Kel. Sekeloa, Kec. Coblong, 
                Bandung, Jawa Barat, 40134, Indonesia
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a 
                href="mailto:cs@layanancerdas.id" 
                className="text-gray-600 hover:text-blue-600 footer-link poppins-regular"
              >
                cs@layanancerdas.id
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <a 
                href="tel:+62222503761" 
                className="text-gray-600 hover:text-blue-600 footer-link poppins-regular"
              >
                (022) 2503761
              </a>
            </div>
            {/* Social Media & Download */}
            <div className="pt-4">
              <div className="flex items-center space-x-4 mb-6">
                <a 
                  href="#instagram" 
                  className="text-gray-600 hover:text-blue-600 social-icon"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="#linkedin" 
                  className="text-gray-600 hover:text-blue-600 social-icon"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <a 
                href="#download-company-profile" 
                className="inline-flex items-left gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors h-fit w-full"
              >
                <FaDownload size={20} />
                Download Company Profile
              </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 poppins-regular">
            © {new Date().getFullYear()} Layanan Cerdas Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;