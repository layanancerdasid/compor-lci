import "./aisolution.css";
import {
  FaArrowsAlt,
  FaCarAlt,
  FaRegLaugh,
  FaRoad,
  FaTemperatureHigh,
  FaTrademark,
} from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";
import { RiEBikeLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const AI = () => {
  // Define iconComponents object to map icon names to their components
  const iconComponents = {
    FaArrowsAlt: FaArrowsAlt,
    FaRegLaugh: FaRegLaugh,
    ImHammer2: ImHammer2,
    IoIosPeople: IoIosPeople,
    FaTemperatureHigh: FaTemperatureHigh,
    FaCarAlt: FaCarAlt,
    RiEBikeLine: RiEBikeLine,
    MdOutlinePets: MdOutlinePets,
    FaRoad: FaRoad,
    FaTrademark: FaTrademark,
  };

  const kasus = [
    { icon: "FaArrowsAlt", title: "Area Monitoring" },
    { icon: "FaRegLaugh", title: "Face Recognition" },
    { icon: "ImHammer2", title: "Crime Detection" },
    { icon: "IoIosPeople", title: "People Counting And Crowd Understanding" },
    { icon: "FaTemperatureHigh", title: "Thermal Detection" },
    { icon: "FaCarAlt", title: "Traffic Analytic" },
    { icon: "RiEBikeLine", title: "Vehicle Counting And Classification" },
    { icon: "MdOutlinePets", title: "Animals And Species Recognition" },
    { icon: "FaRoad", title: "Road Analytic" },
    { icon: "FaTrademark", title: "Number And Logo Recognition" },
  ];

  return (
    <>
      <div className="relative h-72 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-5xl font-light text-white mb-4">AI</h1>
            <p className="text-white/80 text-lg">Our Tech</p>
          </div>
        </div>
      </div>
      
      <section className="container mx-auto my-8 px-4">
        <p className="text-gray-700 leading-relaxed poppins-regular">
          Solusi AI dari Layanan Cerdas Indonesia menawarkan platform canggih
          untuk integrasi kecerdasan buatan di berbagai sektor, memungkinkan
          pengembangan layanan yang cerdas, skalabel, dan efisien. Solusi AI
          kami mempermudah proses yang kompleks, meningkatkan efisiensi
          perangkat dan sistem, serta mendorong inovasi di industri yang
          berkeinginan untuk meraih pertumbuhan dan keunggulan operasional.
          Teknologi AI saat ini sangat vital di berbagai industri, tidak hanya
          untuk meningkatkan efisiensi operasional tetapi juga untuk
          memperlancar operasi bisnis melalui automasi cerdas, manajemen aset
          yang lebih maju, dan kontrol biaya. Dengan solusi AI terdepan kami,
          perusahaan dapat memanfaatkan kekuatan transformasi kecerdasan buatan
          untuk mengoptimalkan operasi mereka dan mencapai keunggulan kompetitif
          yang signifikan.
        </p>
      </section>

      <img
              className="mx-auto w-90 mt-5"
              src="/ai_solution.png"
              alt="AI"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 poppins-semibold">
            STUDI KASUS AI
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {kasus.map((item, index) => {
              const IconComponent = iconComponents[item.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 text-center group hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-teal-600 p-4 rounded-lg mb-4 text-white w-16 h-16 flex items-center justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-2 text-gray-800 poppins-semibold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AI;