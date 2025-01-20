import "./products.css";
import { Helmet } from "react-helmet";
const Teknologi = () => {
  return (
    <>
      <Helmet>
        <title>Technology | Layanan Cerdas Indonesia</title>
      </Helmet>
      <p>
        <div className="relative h-72 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl font-light text-white mb-4 poppins-semibold">
                Technology
              </h1>
              <p className="text-white/80 text-lg poppins-regular">Our Tech</p>
            </div>
          </div>
        </div>
        <section id="main-container">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col mb-5 mt-10">
              <p className="text-2xl text-justify poppins-regular">
                Dengan solusi IoT dan solusi AI yang Layanan Cerdas Indonesia
                tawarkan, dimungkinkan adanya integrasi teknologi yang mendorong
                inovasi dan meningkatkan efisiensi operasional bisnis anda.
                Hasil dari integrasi teknologi tersebut berupa teknologi end to
                end seperti berikut:
              </p>
              <img
                className="mx-auto mt-5"
                src="/teknologi1.png"
                alt="teknologi"
              />
              <p className="text-2xl tracking-wider text-justify mt-5 poppins-regular">
                Dari teknologi end to end berikut hasil yang diperoleh
                diantaranya data yang akurat dan presisi serta data yang telah
                diproses menjadi informasi yang diperlukan sesuai keperluan
                bisnis anda. Didukung dengan koneksi beragam yang digunakan
                dalam sistem IoT seperti LoRA, WiFi, GPRS, dan 4G/5G yang dapat
                menyesuaikan dengan kebutuhan di lapangan, juga dilengkapi
                dengan prosesor berbasis ARM serta packaging node yang kuat dan
                kokoh serta berstandar IP57 yang tahan akan kondisi cuaca di
                lapangan.
              </p>
              <img
                className="mx-auto w-full mt-5"
                src="/teknologi2.png"
                alt="teknologi"
              />
              <p className="text-2xl text-justify mt-5 poppins-regular">
                Berikut adalah proses kami dalam mengolah data yang diperoleh
                dari sistem IoT. Contohnya, big data yang diperoleh dapat
                digunakan sebagai pendukung predictive analytics untuk memangkas
                biaya maintenance. Dengan memonitor kondisi aset secara
                real-time, perusahaan dapat melihat kinerja perangkat dan
                memprediksi terjadinya kerusakan dengan akurat dan menghindari
                terjadinya malfungsi total.
              </p>
              {/* Add more content blocks here as needed */}
            </div>
          </div>
        </section>
      </p>
    </>
  );
};

export default Teknologi;
