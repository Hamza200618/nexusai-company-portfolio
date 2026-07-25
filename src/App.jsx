import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroBackground from './components/HeroBackground';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import DemoPage from './pages/DemoPage';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/global.scss';
import './App.scss';

const App = () => {
  useScrollAnimation();

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
      return lenis;
    };

    const lenisPromise = initLenis();

    return () => {
      lenisPromise.then((lenis) => lenis.destroy());
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <HeroBackground />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/demo/:slug" element={<DemoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;