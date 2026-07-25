import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 50,
      disable: 'mobile',
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useScrollAnimation;