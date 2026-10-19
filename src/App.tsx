/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderTicker } from './components/HeaderTicker';
import { HeroSection } from './components/HeroSection';
import { QuizSection } from './components/QuizSection';
import { VideoSection } from './components/VideoSection';
import { AboutSection } from './components/AboutSection';
import { ResultsGallery } from './components/ResultsGallery';
import { HeartTestimonials } from './components/HeartTestimonials';
import { DifferentialsSection } from './components/DifferentialsSection';
import { CtaIntermediate } from './components/CtaIntermediate';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BehindTheScenesSection } from './components/BehindTheScenesSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  // Lightbox modal state for full-screen image inspection
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    title?: string;
    tag?: string;
  }>({
    isOpen: false,
    imageUrl: null,
  });

  const handleOpenLightbox = (url: string, title?: string, tag?: string) => {
    setLightboxData({
      isOpen: true,
      imageUrl: url,
      title,
      tag,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#381423] via-[#43182B] to-[#2A0D1A] text-[#FDF8FA] selection:bg-[#D4AF37]/30 selection:text-white relative">
      
      {/* Sticky Header with Slow Directional Ticker ("Logradouro") */}
      <HeaderTicker />

      {/* Main Content Area */}
      <main className="relative">
        {/* 1. Hero Section (Primeira Dobra) */}
        <HeroSection />

        {/* Avaliação Personalizada (Quiz Integrado no Site) */}
        <QuizSection />

        {/* Video Presentation Section (Deixe bem no começo se destacando) */}
        <VideoSection />

        {/* 2. Quem Sou Eu (Autoridade Pessoal) */}
        <AboutSection />

        {/* 3. Resultados Reais (Prova Visual Forte - Antes e Depois) */}
        <ResultsGallery onSelectImage={handleOpenLightbox} />

        {/* Provas de 💚 (Depoimentos e Feedbacks de Pacientes) */}
        <HeartTestimonials onSelectImage={handleOpenLightbox} />

        {/* 4. Por Que Confiar Em Mim (Diferenciais) */}
        <DifferentialsSection />

        {/* 5. CTA Intermediário (Quebra de Objeções) */}
        <CtaIntermediate />

        {/* 6. Como Funciona a Primeira Consulta (3 Passos) */}
        <HowItWorksSection />

        {/* 7. Mais Provas (Expert & Bastidores) */}
        <BehindTheScenesSection onSelectImage={handleOpenLightbox} />

        {/* Extra: Mapa do Endereço da Clínica em Goiânia */}
        <LocationSection />

        {/* 8. CTA Final (Decisão) */}
        <FinalCtaSection />
      </main>

      {/* 9. Rodapé Simples com Assinatura Manual */}
      <Footer />

      {/* Floating 1-tap WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Fullscreen Image Lightbox */}
      <LightboxModal
        isOpen={lightboxData.isOpen}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        tag={lightboxData.tag}
        onClose={handleCloseLightbox}
      />

    </div>
  );
}
