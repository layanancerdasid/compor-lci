const Visi = () => {
  return (
    <>
      <div className="relative h-72 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-5xl font-light text-white mb-4">Visi Misi</h1>
            <p className="text-white/80 text-lg">Our Vision And Mission</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 poppins-semibold">VISI PERUSAHAAN</h2>
            <p className="text-gray-600 text-lg poppins-regular">
              Menjadi salah satu perusahaan yang berperan aktif dalam menciptakan dunia yang lebih cerdas, terhubung, efisien, dan berkelanjutan melalui solusi inovatif yang memanfaatkan AI dan IoT.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 poppins-semibold">MISI PERUSAHAAN</h2>
            <p className="text-gray-600 text-lg poppins-regular">
              Membentuk masa depan yang lebih cerdas melalui inovasi berkelanjutan dalam teknologi AI dan IoT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visi;