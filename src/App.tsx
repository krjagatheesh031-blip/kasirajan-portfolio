import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Primary Pages
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ExpertisePage } from './pages/Expertise';
import { ExperiencePage } from './pages/Experience';
import { AchievementsPage } from './pages/Achievements';
import { GalleryPage } from './pages/Gallery';
import { ContactPage } from './pages/Contact';

// 9 Dedicated Individual Company Experience Pages
import { MysticRootsPage } from './pages/experiences/MysticRoots';
import { AviagenIndiaPage } from './pages/experiences/AviagenIndia';
import { TawoosOmanPage } from './pages/experiences/TawoosOman';
import { AdityaBirlaPage } from './pages/experiences/AdityaBirla';
import { SPICPage } from './pages/experiences/SPIC';
import { LakshmiMillsPage } from './pages/experiences/LakshmiMills';
import { AlAnsariTradingPage } from './pages/experiences/AlAnsariTrading';
import { SICAFPage } from './pages/experiences/SICAF';
import { SterlingTreeMagnumPage } from './pages/experiences/SterlingTreeMagnum';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream-100/50 text-forest-900 font-sans selection:bg-leaf-300 selection:text-forest-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Primary Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 9 Individual Dedicated Company Experience Routes */}
            <Route path="/experience/mystic-roots" element={<MysticRootsPage />} />
            <Route path="/experience/aviagen-india" element={<AviagenIndiaPage />} />
            <Route path="/experience/tawoos-agricultural-systems" element={<TawoosOmanPage />} />
            <Route path="/experience/aditya-birla-retail" element={<AdityaBirlaPage />} />
            <Route path="/experience/spic" element={<SPICPage />} />
            <Route path="/experience/lakshmi-mills" element={<LakshmiMillsPage />} />
            <Route path="/experience/al-ansari-trading" element={<AlAnsariTradingPage />} />
            <Route path="/experience/sicaf" element={<SICAFPage />} />
            <Route path="/experience/sterling-tree-magnum" element={<SterlingTreeMagnumPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
