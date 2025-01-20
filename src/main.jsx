import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AI from './aisolution.jsx';
import Teknologi from './teknologi.jsx';
import Products from './products.jsx';
import Home from './home.jsx';
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IOT from './iotsolution.jsx';
import Visi from './visi.jsx';
import Team from './team.jsx';
import Contact from './contact.jsx';
import Berita from './berita.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/berita" element={<Berita />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tim-kami" element={<Team />} />
        <Route path="/visi-misi" element={<Visi />} />
        <Route path="/iot-solution" element={<IOT />} />
        <Route path="/ai-solution" element={<AI />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/product" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
