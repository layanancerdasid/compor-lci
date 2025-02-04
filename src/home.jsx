import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import "./assets/font.css";
import Bumper1 from "./assets/bumper1.mp4";
import { useNavigate } from "react-router-dom";

const PRODUCT_IMAGES = {
  Podex: "src/assets/podex_wide.png",
  Arvis: "src/assets/arvis_wide.png",
  "Smart Farming": "src/assets/smartbun_wide.png",
  "Smart Wastebin": "src/assets/wastebin_wide.png",
  Tripisia: "src/assets/tripisia_wide.png",
};

const PRODUCT_DESCRIPTIONS = {
  Podex:
    "PODEX merupakan sebuah platform yang menghubungkan berbagai stakeholder dalam ekosistem pendidikan untuk memudahkan Lembaga Pendidikan dalam penyediaan magang dan penempatan kerja, memudahkan calon tenaga kerja dalam mendapatkan pekerjaan, dan memudahkan industry dalam mencari tenaga kerja sesuai kebutuhan.",
  Arvis:
    "ARVIS adalah sebuah platform yang dapat digunakan sebagai sumber belajar yang variatif dengan menggunakan teknologi Augmented Reality. ARVIS dapat digunakan untuk menampilkan benda-benda berupa 3D yang tidak dapat dihadirkan secara langsung.",
  "Smart Farming":
    "Merupakan sebuah layanan yang menggunakan teknologi IoT dan dibuat untuk memudahkan dalam memantau tumbuhan. Smart Farming dapat memantau tumbuhan secara realtime dan otomatis.",
  "Smart Wastebin":
    "Merupakan sebuah layanan yang menggunakan teknologi IoT untuk memudahkan dalam hal pengelolaan sampah. Smart Waste dapat memantau kapasitas tempat sampah secara realtime dan otomatis.",
  Tripisia:
    "Platform untuk mengelola dan mengatur perjalanan bisnis (Business Trip) secara digital. Memudahkan perusahaan dalam mengatur perjalanan dan pengeluaran karyawan.",
};

const PRODUCT = [
  "Podex",
  "Arvis",
  "Smart Farming",
  "Smart Wastebin",
  "Tripisia",
];

const COMPANY_LOGOS = [
  { src: "/Roadbotics logo.png" },
  { src: "/src/assets/arvis_icon.png", alt: "Arvis" },
  { src: "src/assets/Logo full-hitam.png", alt: "Podex" },
  { src: "/src/assets/smart-farming.jpeg", alt: "Smart Farming" },
  { src: "/src/assets/swb.jpeg", alt: "Smart Waste Bin" },
  { src: "/src/assets/tamasia_icon_transparent.png", alt: "Tripisia" },
  // LOOP
  { src: "/Roadbotics logo.png" },
  { src: "/src/assets/arvis_icon.png", alt: "Arvis" },
  { src: "src/assets/Logo full-hitam.png", alt: "Podex" },
  { src: "/src/assets/smart-farming.jpeg", alt: "Smart Farming" },
  { src: "/src/assets/swb.jpeg", alt: "Smart Waste Bin" },
  { src: "/src/assets/tamasia_icon_transparent.png", alt: "Tripisia" },
];

const CAROUSEL_ITEMS = [
  {
    id: 1,
    link: "/berita#smart-wastebin",
    image: "src/assets/berita_foto-1.JPG",
    title: "Smart Wastebin",
    description:
      "Pemkot Madiun telah memasang sensor waste bin di tiap kontainer sampah di Kota Madiun untuk meningkatkan efisiensi pengelolaan sampah",
  },
  {
    id: 2,
    link: "/berita#itb-summit",
    image: "src/assets/ceo_summit2024_2.jpeg",
    title: "ITB CEO Summit 2024",
    description:
      "ITB CEO Summit 2024 menampilkan produk-produk yang bertujuan meningkatkan efisiensi dan kecerdasan kehidupan sehari-hari",
  },
  {
    id: 3,
    link: "/berita#iciss",
    image: "src/assets/iciss1.jpeg",
    title: "ICISS",
    description:
      "Acara ini mendiskusikan inovasi teknologi masa depan, terutama dalam integrasi data dan kecerdasan buatan (AI), untuk meningkatkan resiliensi dan keberlanjutan hidup.",
  },
];

const PREVIEW_VIDEOS = [
  {
    id: 1,
    src: "/src/assets/arvis_vid.mp4",
    alt: "Warehouse View 1",
  },
  {
    id: 2,
    src: "/src/assets/tripisia_vid.mp4",
    alt: "Warehouse View 2",
  },
  {
    id: 3,
    src: "/src/assets/smartbun_vid.mp4",
    alt: "Warehouse View 3",
  },
  {
    id: 4,
    src: "/src/assets/wastebin_vid.mp4",
    alt: "Warehouse View 4",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState("Podex");
  const [activeSlide, setActiveSlide] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === CAROUSEL_ITEMS.length - 1 ? 0 : prevSlide + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === CAROUSEL_ITEMS.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? CAROUSEL_ITEMS.length - 1 : prevSlide - 1,
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };
  return (
    <>
      <div className="min-h-screen">
        <section className="relative h-[80vh]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Bumper1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[#044640] bg-opacity-60">
            <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold poppins-semibold">
                Layanan Cerdas Indonesia
              </h1>
              <p className="mt-2 text-2xl max-w-3xl poppins-regular italic">
                &quot;ACCELERATE YOUR BUSINESS&quot;
              </p>
              <p className="mt-2 text-xl max-w-3xl poppins-regular">
                LAYANAN YANG AKAN MEMUDAHKAN DAN MENGEFISIENSI BISNIS ANDA
              </p>
            </div>
          </div>
          <div className="absolute top-[70vh] left-8 flex space-x-4 poppins-medium">
            <a href="#services">
              <button className="bg-white text-[#006666] px-6 py-2 rounded-full shadow-md hover:bg-[#009f9a] hover:text-white transition-colors flex items-center gap-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#009f9a] text-white px-6 py-2 rounded-full shadow-md hover:bg-white hover:text-[#009f9a] transition-colors flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        <section
          id="services"
          className=" py-16 bg-white border-t border-b border-[#009f9a]/10"
        >
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
                icon={
                  <img
                    src={"/IoT service icon2.png"}
                    alt={"Tempat Buat Icon IOT"}
                    className="max-w-none w-24 h-24 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert"
                  />
                }
                title="IOT SERVICE"
                description="Membuka Pintu ke Era Konektivitas: Solusi IoT Terkemuka untuk Bisnis Anda"
              />
              <ServiceCard
                icon={
                  <img
                    src={"/softaware service icon1.png"}
                    alt={"Tempat Buat Icon Software"}
                    className="max-w-none w-24 h-24 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert"
                  />
                }
                title="SOFTWARE SERVICE"
                description="Mengoptimalkan Operasi, Meningkatkan Kinerja: Layanan Perangkat Lunak yang Membawa Efisiensi ke Bisnis Anda"
              />
              <ServiceCard
                icon={
                  <img
                    src={"/Productivity icon1.png"}
                    alt={"Tempat Buat Icon Productivity"}
                    className="max-w-none w-24 h-24 object-contain hover:opacity-80 transition-opacity filter brightness-0 invert"                  />
                }
                title="PRODUCTIVITY"
                description="Menyediakan platform dan jasa untuk pengelolaan komunitas, asosiasi, dan organisasi untuk peningkatan kualitas hidup dari membernya."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#006666]/5 ">
          <h1 className="text-2xl text-center pb-8 text-[#006666] poppins-semibold">
            Our Product
          </h1>
          <div className="w-full inline-flex flex-nowrap overflow-hidden ">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              {COMPANY_LOGOS.map((logo, index) => (
                <li key={index}>
                  <a
                    href={`/product?id=${logo.alt?.toLowerCase()}`}
                    target="_self"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href={`/product?id=${logo.alt?.toLowerCase()}`}
                    target="_self"
                    rel="noopener noreferrer"
                  >
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
              <h2 className="text-4xl font-bold text-[#006666] poppins-semibold">
                Our Technologies
              </h2>
              <p className="text-xl mt-2 text-[#009f9a] poppins-regular">
                Kami memperpadukan Teknologi Internet of Things dan Artificial
                Intelligence sebagai solusi pada produk kami
              </p>
            </div>

            <div className="relative flex gap-2 mb-4">
              {PREVIEW_VIDEOS.map((items, index) => {
                return (
                  <>
                    <div
                      id={index}
                      className="aspect-[16/9] w-[25%] bg-white border-2 border-[#009f9a] rounded-lg overflow-hidden shadow-lg"
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={items.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="relative flex gap-2">
              <div className="aspect-[16/9] w-[50%] bg-white border-2 border-[#009f9a] rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/wastebin_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="aspect-[16/9] w-[50%] bg-white border-2 border-[#009f9a] rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/wastebin_2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>bg-[#009f9a]
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-8">
              <button
                onClick={() => {
                  navigate("/ai-solution");
                }}
                className="bg-white text-xl text-[#006666] px-6 py-2 rounded-full shadow-md hover:bg-[#009f9a] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>AI Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  navigate("/iot-solution");
                }}
                className="bg-white text-xl text-[#006666] px-6 py-2 rounded-full shadow-md hover:bg-[#009f9a] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>IoT Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#006666] poppins-semibold">
              News
            </h2>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-96 overflow-hidden rounded-xl">
                {CAROUSEL_ITEMS.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                      index === activeSlide
                        ? "opacity-100 translate-x-0"
                        : index < activeSlide
                          ? "opacity-0 -translate-x-full"
                          : "opacity-0 translate-x-full"
                    }`}
                  >
                    <a href={item.link} className="block h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="absolute bottom-0 left-0 right-0 bg-[#006666] bg-opacity-90 text-white p-4 transform transition-transform duration-500">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-base mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#009f9a] text-[#006666] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
                aria-label="Previous slide"
              >
                <span className="sr-only">Previous</span>←
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#009f9a] text-[#006666] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
                aria-label="Next slide"
              >
                <span className="sr-only">Next</span>→
              </button>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex justify-center space-x-2">
                {CAROUSEL_ITEMS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSlide ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
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
    <div className="mb-4 flex justify-center">
      <div className="w-40 h-40 bg-[#009f9a]  rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-bold mb-4 text-[#006666] poppins-semibold">
      {title}
    </h3>
    <p className="text-gray-800 text-base poppins-regular">{description}</p>
  </div>
);

export default Home;
