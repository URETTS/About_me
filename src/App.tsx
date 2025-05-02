import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Travels from './pages/Travels';
import CountryPage from './pages/CountryPage';
import CityPage from './pages/CityPage';
import Header from './components/Header';
import Footer from './components/Footer';

useEffect(() => {
  const ua = navigator.userAgent || navigator.vendor;

  if (ua.includes('Telegram')) {
    window.location.href = 'https://about-me-three-peach.vercel.app';
  }
}, []);

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`${isHome ? '' : 'container mx-auto p-4'} flex-grow`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/travels/:countryId" element={<CountryPage />} />
          <Route path="/travels/:countryId/:cityId" element={<CityPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
