import { useState } from "react";
import { ArrowRight, Microchip, Terminal, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import "./assets/font.css";

const PRODUCT_IMAGES = {
  Podex: "src/assets/podex-asset2.png",
  Arvis: "src/assets/Dashboard1.png",
  "Smart Farming": "/produk/smartperkebunan/dashboard_smartbun.jpeg",
  "Smart Waster": "/produk/smartwastebin/ss_wastebin.png",
  Tripisia: "/produk/tripisia/picture.jpeg",
};

const PRODUCT_DESCRIPTIONS = {
  Podex:
    "PODEX merupakan sebuah platform yang menghubungkan berbagai stakeholder dalam ekosistem pendidikan untuk memudahkan Lembaga Pendidikan dalam penyediaan magang dan penempatan kerja, memudahkan calon tenaga kerja dalam mendapatkan pekerjaan, dan memudahkan industry dalam mencari tenaga kerja sesuai kebutuhan.",
  Arvis:
    "ARVIS adalah sebuah platform yang dapat digunakan sebagai sumber belajar yang variatif dengan menggunakan teknologi Augmented Reality. ARVIS dapat digunakan untuk menampilkan benda-benda berupa 3D yang tidak dapat dihadirkan secara langsung.",
  "Smart Farming":
    "Merupakan sebuah layanan yang menggunakan teknologi IoT dan dibuat untuk memudahkan dalam memantau tumbuhan. Smart Farming dapat memantau tumbuhan secara realtime dan otomatis.",
  "Smart Waster":
    "Merupakan sebuah layanan yang menggunakan teknologi IoT untuk memudahkan dalam hal pengelolaan sampah. Smart Waste dapat memantau kapasitas tempat sampah secara realtime dan otomatis.",
  Tripisia:
    "Platform untuk mengelola dan mengatur perjalanan bisnis (Business Trip) secara digital. Memudahkan perusahaan dalam mengatur perjalanan dan pengeluaran karyawan.",
};

const PRODUCT = ["Podex", "Arvis", "Smart Farming", "Smart Waster", "Tripisia"];

const COMPANY_LOGOS = [
  {src : "/Roadbotics logo.png"},
  { src: "/src/assets/arvis_icon.png", alt: "Arvis" },
  { src: "src/assets/Logo full-hitam.png", alt: "Podex" },
  { src: "/src/assets/smart-farming.jpeg", alt: "Smart Farming" },
  { src: "/src/assets/swb.jpeg", alt: "Smart Waste Bin" },
  { src: "/src/assets/tamasia_icon_transparent.png", alt: "Tripisia" },
  // LOOP
  {src : "/Roadbotics logo.png"},
  { src: "/src/assets/arvis_icon.png", alt: "Arvis" },
  { src: "src/assets/Logo full-hitam.png", alt: "Podex" },
  { src: "/src/assets/smart-farming.jpeg", alt: "Smart Farming" },
  { src: "/src/assets/swb.jpeg", alt: "Smart Waste Bin" },
  { src: "/src/assets/tamasia_icon_transparent.png", alt: "Tripisia" },
];

const CAROUSEL_ITEMS = [
  {
    id: 1,
    link: "placeholder/link",
    image: "src/assets/berita_foto-1.JPG",
    title: "Smart Wastebin",
    description:
      "Pemkot Madiun telah memasang sensor waste bin di tiap kontainer sampah di Kota Madiun untuk meningkatkan efisiensi pengelolaan sampah",
  },
  {
    id: 2,
    link: "placeholder/link",
    image: "src/assets/ceo_summit2024_2.jpeg",
    title: "ITB CEO Summit 2024",
    description:
      "ITB CEO Summit 2024 menampilkan produk-produk yang bertujuan meningkatkan efisiensi dan kecerdasan kehidupan sehari-hari",
  },
  {
    id: 3,
    link: "placeholder/link",
    image: "src/assets/iciss1.jpeg",
    title: "ICISS",
    description:
      "Acara ini mendiskusikan inovasi teknologi masa depan, terutama dalam integrasi data dan kecerdasan buatan (AI), untuk meningkatkan resiliensi dan keberlanjutan hidup.",
  },
];

const PREVIEW_VIDEOS = [
  {
    id: 1,
    src: "/src/assets/stereo-video-1.mp4",
    alt: "Warehouse View 1",
  },
  {
    id: 2,
    src: "/src/assets/stereo-video-2.mp4",
    alt: "Warehouse View 2",
  },
  {
    id: 3,
    src: "/src/assets/stereo-video-3.mp4",
    alt: "Warehouse View 3",
  },
  {
    id: 4,
    src: "/src/assets/stereo-video-4.mp4",
    alt: "Warehouse View 4",
  },
];
const THEME = {
  primary: "rgb(0, 77, 64)", // hijau tua
  white: "rgb(255, 255, 255)",
  light: "rgb(250, 250, 250)",
};

const Home = () => {
  const [open, setOpen] = useState("Podex");
  const [activeSlide, setActiveSlide] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? CAROUSEL_ITEMS.length - 1 : prev - 1
    );
  };

  return (
    <>
    <div className="min-h-screen">
      <section className="relative h-[75vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/bumper1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#006666] bg-opacity-60">
          <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold poppins-semibold">
              Layanan Cerdas Indonesia
            </h1>
            <p className="mt-4 text-xl max-w-3xl poppins-regular">
              "ACCELERATE YOUR BUSINESS" LAYANAN YANG AKAN MEMUDAHKAN DAN
              MENGEFISIENSI BISNIS ANDA
            </p>
          </div>
          <div className="absolute bottom-10 left-10 flex space-x-4 poppins-medium">
            <button className="bg-white text-[#006666] px-6 py-2 rounded-full shadow-md hover:bg-[#009f9a] hover:text-white transition-colors flex items-center gap-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-[#009f9a] text-white px-6 py-2 rounded-full shadow-md hover:bg-white hover:text-[#009f9a] transition-colors flex items-center gap-2">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-b border-[#009f9a]/10">
        <div className="container text-center mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2 text-[#006666] poppins-semibold">
              Layanan Yang Kami Sediakan
            </h2>
            <p className="text-base text-gray-800 poppins-regular">
              Tim yang berkualitas dan berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Microchip size={48} strokeWidth={1.25} className="text-[#006666]" />}
              title="IOT SERVICE"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, velit."
            />
            <ServiceCard
              icon={<Terminal size={48} strokeWidth={1.25} className="text-[#006666]" />}
              title="SOFTWARE SERVICE"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim laudantium."
            />
            <ServiceCard
              icon={<TrendingUp size={48} strokeWidth={1.25} className="text-[#006666]" />}
              title="PRODUCTIVITY"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#006666]/5 ">
        <h1 className="text-2xl text-center pb-8 text-[#006666] poppins-semibold">Our Product</h1>
        <div className="w-full inline-flex flex-nowrap overflow-hidden ">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {COMPANY_LOGOS.map((logo, index) => (
              <li key={index}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-none w-28 h-28 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            {COMPANY_LOGOS.map((logo, index) => (
              <li key={`clone-${index}`}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-none w-28 h-28 object-contain hover:opacity-80 transition-opacity "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative min-h-[500px] bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={PRODUCT_IMAGES[open]}
                alt={`${open}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-[#009f9a]/20">
              {PRODUCT.map((product) => (
                <Accordion key={product} open={open === product}>
                  <AccordionHeader 
                    onClick={() => handleOpen(product)}
                    className="text-[#006666] hover:text-[#009f9a] poppins-semibold"
                  >
                    {product}
                  </AccordionHeader>
                  <AccordionBody className="text-black font-medium poppins-regular">
                    {PRODUCT_DESCRIPTIONS[product]}
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#006666]/5">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-[#006666] poppins-semibold">Highlight</h2>
            <p className="text-xl mt-2 text-[#009f9a] poppins-regular">Our product.</p>
          </div>

          <div className="relative">

            <div className="aspect-[16/9] bg-white border-2 border-[#009f9a] rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/VID-20250116-WA0005.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#006666] poppins-semibold">News</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              {CAROUSEL_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                    index === activeSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#006666] bg-opacity-90 text-white p-4">
                    <h3 className="text-xl poppins-semibold">{item.title}</h3>
                    <p className="poppins-regular text-base mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#009f9a] text-[#006666] hover:text-white rounded-r-lg p-2 shadow-lg transition-all"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#009f9a] text-[#006666] hover:text-white rounded-l-lg p-2 shadow-lg transition-all"
            >
              →
            </button>

            <div className="flex justify-center mt-4 space-x-2">
              {CAROUSEL_ITEMS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSlide ? "bg-[#006666]" : "bg-[#009f9a]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-lg font-bold mb-4 text-[#006666] poppins-semibold">{title}</h3>
    <p className="text-gray-800 text-base poppins-regular">{description}</p>
  </div>
);

export default Home;
