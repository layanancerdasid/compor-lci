import './products.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const ProductCard = ({ product, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(product.id)}
      className={`w-full flex items-center p-6 transition-all border-l-4 ${
        isActive
          ? 'bg-[#009f9a]/10 border-[#006666]'
          : 'border-transparent hover:bg-[#009f9a]/5'
      }`}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full  ${
          isActive ? 'bg-[#009f9a]/20' : 'bg-[#009f9a]/10'
        } mr-4`}
      >
        <img
          src={product.iconPath}
          alt={`${product.name} icon`}
          className="w-6 h-6 object-contain"
        />
      </div>
      <div className="text-left poppins-semibold">
        <h3
          className={`font-medium ${
            isActive ? 'text-[#006666]' : 'text-[#006666]/80'
          }`}
        >
          {product.name}
        </h3>
        {product.comingSoon && (
          <span className="text-xs font-medium text-red-500 mt-1 inline-block">
            COMING SOON
          </span>
        )}
      </div>
    </button>
  );
};

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <div className="p-12 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-light text-[#006666] mb-8 poppins-semibold">
          {product.name}
        </h1>

        {product.images && (
          <div className="mb-12 h-[45vh] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-lg">
              <p className="text-[#006666]/80 leading-relaxed poppins-regular">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h5 className="font-medium text-[#009f9a] uppercase tracking-wide text-sm mb-4">
                  Opsi Penjualan
                </h5>
                <ul className="space-y-3">
                  {product.salesOptions.map((option, idx) => (
                    <li key={idx} className="text-gray-800 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009f9a] mr-2" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-[#009f9a] uppercase tracking-wide text-sm mb-4">
                  Perangkat
                </h5>
                <ul className="space-y-3">
                  {product.platforms.map((platform, idx) => (
                    <li key={idx} className="text-gray-800 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009f9a] mr-2" />
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#006666]/5 p-8 rounded-2xl">
            <h5 className="font-medium text-[#009f9a] uppercase tracking-wide text-sm mb-4 poppins-semibold">
              Fitur
            </h5>
            <ul className="space-y-4">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-gray-800 flex items-start poppins-regular"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009f9a] mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-end poppins-semibold">
          <a
            href="/contact"
            className="px-8 py-3 bg-[#006666] text-white rounded-full hover:bg-[#009f9a] transition-colors text-sm font-medium shadow-sm hover:shadow-md"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 'arvis',
    name: 'Arvis',
    iconPath: '/produk_icon/arvis.png',
    description:
      'ARVIS (Artificial Intelligence & Video Analytics System) adalah Sistem pemantauan cerdas untuk situational awareness dan terintegrasi ke Dashboard.',
    salesOptions: [
      'Subscription (Berlangganan)',
      'One-Time Charge (Jual Putus)',
      'Sharing Profit',
    ],
    platforms: ['WEBSITE'],
    features: [
      'Traffic Analytic: License Plate Recognition, Illegal Parkir Detection, Android Sense',
      'Vehicles Counting And Classification',
      'Area Monitoring',
      'Face Recognition',
      'Crime Detection',
      'People Counting & Crowd Understanding',
    ],
    images: ['/src/assets/arvis_wide.png'],
  },
  {
    id: 'tripisia',
    name: 'Tripisia',
    iconPath: '/produk_icon/tripisia_icon.png',
    description:
      'Tripisia adalah sebuah aplikasi trip planner berbasis website dan mobile yang memudahkan pengguna untuk melakukan reservasi tiket transportasi, hotel, dan tiket pariwisata.',
    salesOptions: ['Subscription (Berlangganan)', 'Jual Putus'],
    platforms: ['WEBSITE', 'ANDROID'],
    features: [
      'Trip Planner Apps',
      'Itineracy Creator',
      'Flight, Bus, Ticket Sales',
      'Event/Tourism Ticket Sales',
      'Tourism Application',
      'Trip Packages',
    ],
    images: ['/src/assets/tripisia_wide.png'],
  },
  {
    id: 'smart-waste',
    name: 'Smart Waste Bin',
    iconPath: '/produk_icon/smart wastebin_icon.png',
    description:
      'Smart waste bin adalah tong sampah yang dilengkapi dengan teknologi sensor dan konektivitas internet untuk memantau dan mengelola pengumpulan sampah secara lebih efisien.',
    salesOptions: ['One-Time Charge (Jual Putus)'],
    platforms: ['WEBSITE'],
    features: [
      'Monitoring Kapasitas Tong Sampah',
      'Pemantauan volume sampah secara realtime',
      'Rute dan jadwal pengangkutan sampah otomatis',
    ],
    images: ['/src/assets/wastebin_wide.png'],
  },
  {
    id: 'pod-ex',
    name: 'POD-EX',
    iconPath: '/produk_icon/Logo-hitam.png',
    description:
      'POD-EX (Personalized On-Demand Exchange) adalah sistem kartu pengenal pintar, menggunakan teknologi NFC yang mengintergrasikan kartu pengenal dengan sistem.',
    salesOptions: ['Coming Soon'],
    platforms: ['Coming Soon'],
    features: ['Coming Soon'],
    images: ['/produk/pod-ex/podex-asset1.png'],
  },
  {
    id: 'smart-farming',
    name: 'Smart Farming',
    iconPath: '/produk_icon/smart farming_icon.png',
    description:
      'Smart Farming merupakan platform yang mendukung perkembangan perkebunan dengan sistem komprehensif hulu ke hilir untuk membantu mendata, mengontrol dan mengawasi perkebunan.',
    salesOptions: ['Subscription (Sewa)', 'One-Time Charge (Jual Putus)'],
    platforms: ['WEBSITE'],
    features: [
      'Monitoring Kelembaban Tanah',
      'Monitoring Kelembaban Udara',
      'Monitoring Suhu Udara',
      'Monitoring Suhu Tanah',
      'Monitoring Radiasi Matahari',
      'Monitoring Curah Hujan',
      'Monitoring Nitrogen',
      'Rekomendasi Pemupukan dan Penyiraman',
    ],
    images: ['/src/assets/smartbun_wide.png'],
  },
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <>
      <Helmet>
        <title>Products | Layanan Cerdas Indonesia</title>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-72 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl font-light text-white mb-4 poppins-semibold">
                Produk Kami
              </h1>
              <p className="text-white/80 text-lgpoppins-regular ">
                Solusi teknologi terdepan untuk kebutuhan bisnis Anda
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#009f9a]/10">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Product List */}
              <div className="border-r border-[#009f9a]/10 bg-[#006666]/5">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isActive={activeProduct.id === product.id}
                    onClick={() => setActiveProduct(product)}
                  />
                ))}
              </div>

              {/* Product Details */}
              <div className="md:col-span-3">
                <ProductDetail product={activeProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
