import "./iotsolution.css";
import { ImBin } from "react-icons/im";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiRoadHorizonFill } from "react-icons/pi";
import { IoBoatSharp } from "react-icons/io5";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import { GiFertilizerBag, GiPlantWatering } from "react-icons/gi";
import { Helmet } from "react-helmet";

const IOT = () => {
  const iconComponents = {
    ImBin: ImBin,
    TiWeatherPartlySunny: TiWeatherPartlySunny,
    PiRoadHorizonFill: PiRoadHorizonFill,
    IoBoatSharp: IoBoatSharp,
    TbEaseInOutControlPoints: TbEaseInOutControlPoints,
    GiPlantWatering: GiPlantWatering,
    GiFertilizerBag: GiFertilizerBag,
  };

  const kasus = [
    {
      icon: "ImBin",
      title: "Smart Wastebin",
      desc: "Tempat sampah berbasis IoT dilengkapi dengan sensor dan koneksi internet ",
    },
    {
      icon: "TiWeatherPartlySunny",
      title: "Automatic Weather Station",
      desc: "Sistem pemantauan kondisi cuaca untuk bebagai kebutuhan",
    },
    {
      icon: "PiRoadHorizonFill",
      title: "Survey Pengkerasan Jalan",
      desc: "Survey Kondisi Perkerasan Jalan merupakan kegiatan yang dituju untuk menilai fungsional jalan secara fisik",
    },
    {
      icon: "IoBoatSharp",
      title: "Smart Maritime",
      desc: "teknik pengolahan gambar untuk mengenali dan mengidentifikasi ikan di perairan",
    },
    {
      icon: "TbEaseInOutControlPoints",
      title: "Air Quality Monitoring",
      desc: "Sistem pemantauan kondisi kualitas udara untuk perlindungan lingkungan",
    },
    {
      icon: "GiPlantWatering",
      title: "Smart Watering System",
      desc: "Perangkat yang dirancang untuk mengelola irigasi di perkebunan. ",
    },
    {
      icon: "GiFertilizerBag",
      title: "Automatic Nutrition Dosing System",
      desc: "menjaga keseimbangan nutrisi dan pH dalam air yang mengalir di dalam sistem hidroponik,",
    },
  ];

  return (
    <>
      <Helmet>
        <title>IoT Technology | Layanan Cerdas Indonesia</title>
      </Helmet>
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
          Solusi IoT yang Layanan Cerdas Indonesia tawarkan dapat membantu
          membangun layanan Internet of Things berbasis solusi Smart City
          Multisektoral dengan implementasi perangkat IoT, mengurangi
          kompleksitas, memastikan efisiensi perangkat, dan mendorong inovasi di
          seluruh industri yang mencari peluang pertumbuhan dan efisiensi
          operasional. Kini teknologi IoT telah dapat diaplikasikan ke berbagai
          industri. Tidak hanya meningkatkan efisiensi operasional suatu
          perusahaan, teknologi IoT juga berfungsi memberi kemudahan dalam
          menjalankan bisnis dengan automasi, manajemen aset bisnis, kontrol
          biaya, dan masih banyak lagi. Berikut keseluruhan komponen dalam
          solusi IoT kami yang saling berkaitan satu sama lain untuk
          meningkatkan efisiensi operasional.
        </p>
      </section>

      <img className="mx-auto w-90 mt-5" src="/IoT_flow.png" alt="IOT" />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 poppins-semibold">
            STUDI KASUS IOT
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
                  <p className="text-base font-medium mt-2 text-gray-600 poppins-regular">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default IOT;
