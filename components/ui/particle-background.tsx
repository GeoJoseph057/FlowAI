'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ParticleBackgroundProps {
  isDarkMode?: boolean;
}

export default function ParticleBackground({ isDarkMode = true }: ParticleBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse tracking for particle effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking for dynamic backgrounds
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic Gradient Background */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(
              circle at ${50 + (mousePosition.x / window.innerWidth) * 20}% ${30 + progress * 40}%,
              rgba(102, 126, 234, ${0.4 + progress * 0.3}) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at ${80 - progress * 30}% ${70 - progress * 20}%,
              rgba(168, 85, 247, ${0.3 + progress * 0.4}) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at ${20 + progress * 25}% ${40 + progress * 30}%,
              rgba(59, 130, 246, ${0.2 + progress * 0.3}) 0%,
              transparent 50%
            ),
            linear-gradient(
              ${135 + progress * 45}deg,
              ${isDarkMode
                ? `rgba(15, 23, 42, ${0.95 - progress * 0.1}) 0%, rgba(30, 27, 75, ${0.98 - progress * 0.05}) 50%, rgba(15, 23, 42, ${0.95 - progress * 0.1}) 100%`
                : `rgba(248, 250, 252, ${0.95 - progress * 0.1}) 0%, rgba(241, 245, 249, ${0.98 - progress * 0.05}) 50%, rgba(248, 250, 252, ${0.95 - progress * 0.1}) 100%`
              }
            )
          `
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10 transition-all duration-1000"
          style={{
            left: `${10 + (i * 15) + Math.sin(progress * Math.PI + i) * 20}%`,
            top: `${20 + (i * 10) + Math.cos(progress * Math.PI + i) * 15}%`,
            transform: `
              rotate(${progress * 360 + i * 45}deg)
              scale(${0.5 + Math.sin(progress * Math.PI + i) * 0.3})
              translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)
            `,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background: i % 2 === 0
              ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))'
              : 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))',
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '0%',
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Animated Particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.sin(progress * Math.PI * 2 + i) * 0.2,
            transform: `
              translate(
                ${Math.sin(progress * Math.PI * 2 + i) * 50 + (mousePosition.x - window.innerWidth / 2) * 0.01}px,
                ${Math.cos(progress * Math.PI * 2 + i) * 30 + (mousePosition.y - window.innerHeight / 2) * 0.01}px
              )
              scale(${0.5 + Math.sin(progress * Math.PI + i) * 0.5})
            `,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ filter: 'blur(0.5px)' }}>
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M ${-100 + progress * 200} ${100 + i * 200} Q ${window.innerWidth / 2 + Math.sin(progress * Math.PI + i) * 200} ${200 + i * 150 + Math.cos(progress * Math.PI + i) * 100} ${window.innerWidth + 100 - progress * 200} ${300 + i * 180}`}
            stroke={`url(#gradient${i})`}
            strokeWidth="2"
            fill="none"
            className="transition-all duration-1000"
          />
        ))}
        <defs>
          {[...Array(5)].map((_, i) => (
            <linearGradient key={i} id={`gradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}