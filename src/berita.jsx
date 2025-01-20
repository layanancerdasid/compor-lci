import React, { useEffect } from "react";
import { Calendar } from "lucide-react";

const NewsCard = ({ title, description, image, date = new Date().toLocaleDateString(), id }) => (
    <div id={id} className="group bg-white shadow-md rounded-xl overflow-hidden scroll-mt-24">
        <div className="aspect-video overflow-hidden">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
            />
        </div>

        <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#006666] mb-4 poppins-semibold">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed poppins-regular">
                {description}
            </p>
        </div>
    </div>
);

const Berita = () => {
    const berita = [
        {
            id: 1,
            slug: "smart-wastebin",
            title: "Smart Wastebin",
            description:
                "Pemkot Madiun telah memasang sensor waste bin di tiap kontainer sampah di Kota Madiun untuk meningkatkan efisiensi pengelolaan sampah. Sistem ini memungkinkan pemantauan real-time terhadap tingkat kapasitas sampah di setiap kontainer, membantu petugas kebersihan dalam mengoptimalkan rute pengambilan sampah dan meningkatkan efisiensi pengelolaan sampah kota. Inovasi ini merupakan bagian dari inisiatif smart city yang bertujuan untuk memodernisasi layanan publik dan meningkatkan kualitas hidup warga kota.",
            image: "src/assets/berita_foto-1.JPG",
            date: "16 Jan 2024",
        },
        {
            id: 2,
            slug: "itb-summit",
            title: "ITB CEO Summit 2024",
            description:
                "ITB CEO Summit 2024 menampilkan produk-produk yang bertujuan meningkatkan efisiensi dan kecerdasan kehidupan sehari-hari. Event bergengsi ini menghadirkan berbagai inovasi teknologi terkini yang dikembangkan oleh para ahli dan peneliti dari Institut Teknologi Bandung. Para CEO dan pemimpin industri berkumpul untuk membahas transformasi digital dan peluang kolaborasi dalam mengembangkan solusi teknologi untuk masa depan Indonesia.",
            image: "src/assets/ceo_summit2024_2.jpeg",
            date: "15 Jan 2024",
        },
        {
            id: 3,
            slug: "iciss",
            title: "ICISS",
            description:
                "Acara ini mendiskusikan inovasi teknologi masa depan, terutama dalam integrasi data dan kecerdasan buatan (AI), untuk meningkatkan resiliensi dan keberlanjutan hidup. International Conference on Information Systems and Software (ICISS) menghadirkan pembicara internasional dan pakar teknologi untuk berbagi wawasan tentang perkembangan terbaru dalam dunia teknologi informasi. Fokus khusus diberikan pada pengembangan solusi AI yang dapat membantu mengatasi tantangan global dalam berbagai sektor.",
            image: "src/assets/iciss1.jpeg",
            date: "14 Jan 2024",
        },
    ];

    useEffect(() => {
        // Handle smooth scrolling when page loads with hash
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                // Add a small delay to ensure proper scrolling after page load
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <>
            <div className="relative h-64 bg-gradient-to-r from-[#009f9a] from-10% to-[#006666]">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-2xl px-4">
                        <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
                            Recent News & Events
                        </h1>
                        <p className="text-white/80 text-base md:text-lg">
                            Discover our latest updates, achievements, and
                            contributions in technology innovation
                        </p>
                    </div>
                </div>
            </div>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-12">
                        {berita.map((item) => (
                            <NewsCard
                                key={item.id}
                                id={item.slug}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Berita;