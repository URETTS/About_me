import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Travels from './pages/Travels';
import CountryPage from './pages/CountryPage';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/travels" element={<Travels />} />
            <Route path="/travels/:id" element={<CountryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;