import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
import Navbar from './component/navbar.jsx'
import Footer from './component/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <Footer/>
  </StrictMode>,
)
