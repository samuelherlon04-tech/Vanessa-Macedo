import React from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { MessageCircle, ShieldCheck, Award } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="contato-final" className="relative py-14 sm:py-24 px-4 bg-gradient-to-b from-[#381423] via-[#481A30] to-[#2B0E1B] border-b border-[#D4AF37]/20 overflow-hidden">
      {/* Background glow effects - Wine & gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B2E58]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Floating expert thumbnail */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-emerald-500 shadow-2xl animate-gold-pulse">
            <img
              src={EXPERT_DATA.photos.hero}
              alt="Vanessa Macedo"
              className="w-full h-full object-cover object-top rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Top Kicker */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Sua Beleza Merece o Melhor Cuidado</span>
        </div>

        {/* Strong decisive headline requested */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50 leading-tight mb-4">
          Pronta Para Despertar a Sua Versão Mais Harmoniosa & Confiante?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-200 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Agende sua primeira avaliação personalizada comigo em Goiânia. Vou analisar os detalhes da sua face e desenhar um plano feito sob medida para seus desejos e sua naturalidade.
        </p>

        {/* Main CTA Decision Box */}
        <div className="max-w-md mx-auto space-y-3">
          {/* Big WhatsApp Button with highlight */}
          <a
            href={createWhatsAppLink("Olá, Vanessa! Tomei a decisão e quero agendar minha primeira consulta sem compromisso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-sm sm:text-base shadow-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-98 border border-emerald-300/40"
          >
            <MessageCircle className="w-5 h-5 fill-white/20 shrink-0" />
            <span>Agendar Primeira Consulta no WhatsApp</span>
          </a>

          {/* Prompt constraint reinforcement: "primeira consulta sem compromisso" */}
          <div className="flex items-center justify-center gap-2 text-xs text-rose-200/90 font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Primeira consulta sem compromisso · Vagas limitadas por semana</span>
          </div>
        </div>

      </div>
    </section>
  );
};
