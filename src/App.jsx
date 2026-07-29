import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroBackground from './components/HeroBackground';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import DemoPage from './pages/DemoPage';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/global.scss';
import './App.scss';

const AppContent = () => {
  const location = useLocation();
  // HashRouter: pathname is always '/', check hash instead
  const hash = location.hash;
  // Show HeroBackground ONLY on the exact home page — hide on ALL other pages including demos
  const isHome = hash === '#/' || hash === '';
  useScrollAnimation();

  useEffect(() => {
    let lenis = null;
    let rafId = null;

    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        const raf = (time) => {
          if (lenis) {
            lenis.raf(time);
          }
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis not available:', e);
      }
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);

  return (
    <div className="app">
      {isHome && <HeroBackground />}
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
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;