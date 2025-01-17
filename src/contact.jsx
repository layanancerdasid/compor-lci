import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Layanan Cerdas Indonesia</title>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="relative h-64 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
                Contact Us
              </h1>
              <p className="text-white/80 text-base md:text-lg">
                Get in touch with our team
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Map Section */}
          <div className="w-full mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507345.31092045235!2d106.81306072118483!3d-6.567638143081727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b24ead2145%3A0xb7fffc749f61512d!2sPT.%20Layanan%20Cerdas%20Indonesia!5e0!3m2!1sen!2sid!4v1737014694239!5m2!1sen!2sid"
              className="w-full h-[400px] rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6 poppins-regular">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nama"
                      className="block text-sm text-gray-600 mb-1"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009f9a] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-600 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009f9a] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subjek"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subjek"
                    name="subjek"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009f9a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pesan"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009f9a] focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#009f9a] text-white rounded-md hover:bg-[#006666] transition-colors duration-300"
                  >
                    KIRIM PESAN
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-6 poppins-semibold">
                INFO KONTAK
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 poppins-regular">
                  <div className="w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#009f9a]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Jl. Tubagus Ismail XVI No. 7, Kel. Sekeloa, Kec. Coblong,
                    Bandung, Jawa Barat, 40134, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#009f9a]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:cs@layanancerdas.id"
                    className="text-gray-600 hover:text-[#009f9a]"
                  >
                    cs@layanancerdas.id
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#009f9a]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://www.layanancerdas.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#009f9a]"
                  >
                    www.layanancerdas.id
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#009f9a]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">(022) 2503761</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
