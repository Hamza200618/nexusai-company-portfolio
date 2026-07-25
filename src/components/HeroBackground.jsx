import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Main Particle System ──
    const particlesCount = 3000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    const color1 = new THREE.Color('#00d4ff');
    const color2 = new THREE.Color('#8b5cf6');
    const color3 = new THREE.Color('#22d3ee');

    for (let i = 0; i < particlesCount; i++) {
      const radius = 10 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = Math.random() > 0.5 ? color1 : Math.random() > 0.5 ? color2 : color3;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = 0.02 + Math.random() * 0.04;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // ── Glow Orbs ──
    const orbCount = 5;
    const orbs = [];

    for (let i = 0; i < orbCount; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.5, 16, 16);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: [color1, color2, color3][i % 3],
        transparent: true,
        opacity: 0.15 + Math.random() * 0.15,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);

      orb.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8 - 2
      );

      orb.userData = {
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        axis: Math.random() > 0.5 ? 'x' : 'y',
      };

      scene.add(orb);
      orbs.push(orb);
    }

    // ── Grid Floor ──
    const gridHelper = new THREE.GridHelper(20, 40, 0x00d4ff, 0x8b5cf6);
    gridHelper.position.y = -4;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);

    camera.position.z = 8;

    // ── Mouse Tracking ──
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // ── Animation Loop ──
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += Math.sin(elapsed * 0.1) * 0.0002;

      // Mouse parallax on particles
      particlesMesh.rotation.y += targetX * 0.0008;
      particlesMesh.rotation.x += targetY * 0.0004;

      // Animate orbs
      orbs.forEach((orb, i) => {
        const { speed, offset, axis } = orb.userData;
        const float = Math.sin(elapsed * speed + offset) * 0.5;

        if (axis === 'x') {
          orb.position.x += Math.sin(elapsed * speed + offset) * 0.002;
        } else {
          orb.position.y += Math.sin(elapsed * speed + offset) * 0.002;
        }

        orb.position.y += Math.sin(elapsed * 0.5 + offset) * 0.001;
        orb.scale.setScalar(1 + Math.sin(elapsed * speed + offset) * 0.1);
      });

      // Camera subtle movement
      camera.position.x += (targetX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (targetY * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="hero-background" />;
};

export default HeroBackground;