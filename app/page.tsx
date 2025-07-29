import React from 'react';
import { Header } from '../components/header';
import { Hero } from '../components/sections/hero';
import { Features } from '../components/sections/features';
import { Pricing } from '../components/sections/pricing';
import { Contact } from '../components/sections/contact';
import { Footer } from '../components/footer';
import ParticleBackground from '../components/ui/particle-background';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground isDarkMode={true} />

      <main className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}