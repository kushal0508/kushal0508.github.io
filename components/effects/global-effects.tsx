"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import * as THREE from "three";

function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const animate = useCallback(() => {
    if (!cursorRef.current) return;
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.1;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.1;
    cursorRef.current.style.transform = `translate3d(${posRef.current.x - 12}px, ${posRef.current.y - 12}px, 0)`;
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [data-cursor]");
      setHovering(!!isInteractive);
    };
    window.addEventListener("mousemove", handleMouse);
    const raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(raf);
    };
  }, [animate]);

  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
    >
      <div
        className={`rounded-full border transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
          hovering
            ? "w-10 h-10 border-violet-400/50 bg-violet-500/10 backdrop-blur-sm"
            : "w-6 h-6 border-violet-500/40 bg-violet-500/5 backdrop-blur-sm"
        }`}
      />
    </div>
  );
}

function Starfield() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouch ? 1 : 2));
    mount.appendChild(renderer.domElement);

    const starCount = isTouch ? 800 : 3000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0x3b82f6),
      new THREE.Color(0x06b6d4),
      new THREE.Color(0xa78bfa),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = 10 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const layerGeom = new THREE.BufferGeometry();
    const layerCount = 200;
    const layerPos = new Float32Array(layerCount * 3);
    for (let i = 0; i < layerCount; i++) {
      layerPos[i * 3] = (Math.random() - 0.5) * 60;
      layerPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      layerPos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10;
    }
    layerGeom.setAttribute("position", new THREE.BufferAttribute(layerPos, 3));
    const layerMat = new THREE.PointsMaterial({
      size: 0.15,
      color: new THREE.Color(0x8b5cf6),
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const layerStars = new THREE.Points(layerGeom, layerMat);
    scene.add(layerStars);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!isTouch) window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      stars.rotation.y += isTouch ? 0.0001 : 0.0002;
      stars.rotation.x += isTouch ? 0.00004 : 0.00008;
      layerStars.rotation.y += isTouch ? 0.0002 : 0.0004;
      layerStars.rotation.x += isTouch ? 0.00008 : 0.00015;
      if (!isTouch) {
        camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (!isTouch) window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      starGeometry.dispose();
      starMaterial.dispose();
      layerGeom.dispose();
      layerMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-40" />
  );
}

function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10),transparent_70%)] blur-3xl animate-pulse-soft" />
      <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.05),transparent_70%)] blur-3xl" />
      <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04),transparent_70%)] blur-3xl" />
    </div>
  );
}

function FloatingOrbs() {
  const orbs = [
    { size: 350, top: "15%", left: "10%", delay: 0, color: "rgba(139,92,246,0.04)" },
    { size: 250, top: "55%", left: "85%", delay: 2, color: "rgba(59,130,246,0.03)" },
    { size: 300, top: "85%", left: "10%", delay: 1, color: "rgba(6,182,212,0.03)" },
    { size: 200, top: "30%", left: "75%", delay: 3, color: "rgba(168,85,247,0.03)" },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl animate-float-slow"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: orb.top,
            left: orb.left,
            backgroundColor: orb.color,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${6 + index * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

function GrainTexture() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-overlay">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

function LenisScroll() {
  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let lenisInstance: { destroy: () => void } | null = null;
    let rafId: number;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }) as { destroy: () => void; raf: (time: number) => void };
      lenisInstance = instance;

      const raf = (time: number) => {
        instance.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return null;
}

export function GlobalEffects() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none" style={{ transform: "translateZ(0)" }}>
      <LenisScroll />
      <AuroraBackground />
      <FloatingOrbs />
      <Starfield />
      <GrainTexture />
      <CursorFollower />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </div>
  );
}
