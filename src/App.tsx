import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Travels from './pages/Travels';
import CountryPage from './pages/CountryPage';
import CityPage from './pages/CityPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Murchyk from './components/Murchyk';
import NotFound from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop'



function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTravels = location.pathname.startsWith('/travels');
  const isNotFound = location.pathname === '/404' || location.pathname === '*';
  
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Header />
      <ScrollToTop />
       <main className={`mt-16 ${
          isNotFound
            ? ''
            : isHome || isTravels
            ? 'flex-grow'
            : 'container mx-auto p-4 flex-grow'
        }`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/travels/:countryId" element={<CountryPage />} />
          <Route path="/travels/:countryId/:cityId" element={<CityPage />} />
          <Route path="/murchyk" element={<Murchyk />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CookieBanner />
    <Footer />
    </div>
  );
}


export default App;