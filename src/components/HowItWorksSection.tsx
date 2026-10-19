import React from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { MessageCircle, CalendarCheck, ScanFace, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <MessageCircle className="w-5 h-5 text-[#D4AF37]" />,
    <CalendarCheck className="w-5 h-5 text-[#D4AF37]" />,
    <ScanFace className="w-5 h-5 text-[#D4AF37]" />,
  ];

  return (
    <section id="como-funciona" className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2B0E1B] via-[#351322] to-[#2A0E1A] border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Processo Simples & Transparente</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            Como Funciona a Sua Primeira Consulta
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-2">
            Um atendimento desenhado para que você se sinta acolhida, ouvida e segura em cada minuto.
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative mb-8">
          {EXPERT_DATA.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-[#240A16] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 shadow-md flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif-luxury text-2xl font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-lg font-bold text-amber-100 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-zinc-400 flex items-center justify-between">
                <span>Passo {idx + 1} de 3</span>
                <span className="text-[#D4AF37] font-semibold">Sem compromisso</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 text-center max-w-2xl mx-auto mb-6">
          <p className="text-xs sm:text-sm text-emerald-200 font-medium leading-relaxed">
            🌿 <strong>Nosso Compromisso:</strong> Você tem total liberdade de decisão. Minha função é avaliar com precisão e sugerir o melhor caminho — a escolha é sempre sua.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center">
          <a
            href={createWhatsAppLink("Olá, Vanessa! Quero dar o Passo 1 e iniciar minha conversa no WhatsApp para agendamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Iniciar Passo 1 no WhatsApp Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
