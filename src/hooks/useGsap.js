import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsap = (animations, deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animations(gsap, ScrollTrigger);
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, deps);

  return ref;
};

export default useGsap;