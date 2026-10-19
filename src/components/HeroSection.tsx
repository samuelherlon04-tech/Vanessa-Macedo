import React from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { MessageCircle, ShieldCheck, MapPin, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-6 sm:pt-12 pb-12 sm:pb-20 px-4 overflow-hidden">
      {/* Background ambient lighting - Wine & Rose gold */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8B2E58]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#5E1E3C]/25 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile-first: Expert Large Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/60 via-[#F3E5AB]/40 to-[#AA771C]/60 rounded-3xl blur-sm opacity-70 animate-gold-pulse" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#3A1628] to-[#250E1B] border border-[#D4AF37]/40 shadow-2xl aspect-[3/4]">
                <img
                  src={EXPERT_DATA.photos.hero}
                  alt="Dra. Vanessa Macedo - Estética Avançada"
                  className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient scrim for elegant contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0D] via-black/20 to-transparent" />
                
                {/* Floating badge on photo */}
                <div className="absolute bottom-3.5 inset-x-3 bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-amber-100 uppercase tracking-wide leading-none">
                        Vanessa Macedo
                      </p>
                      <p className="text-[10px] text-zinc-300 mt-0.5">
                        Estética Avançada & Harmonização Natural
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Goiânia</span>
                  </div>
                </div>
              </div>

              {/* Floating micro-trust cards */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#0E1318]/95 border border-[#D4AF37]/40 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[11px] font-semibold text-amber-100">100% Atendimento Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Copy Area */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-left">
            
            {/* Top Subtitle Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Goiânia · Setor Aeroporto</span>
            </div>

            {/* Headline in first-person as strictly requested */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-50 leading-[1.1] mb-4">
              Eu sou <span className="text-[#D4AF37]">Vanessa Macedo</span>.
            </h1>

            {/* Benefit & Security oriented subheadline */}
            <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-6 max-w-xl">
              Não transformo rostos em cópias e não crio padrões artificiais. Meu método une ciência anatômica minuciosa, sensibilidade artística e os melhores produtos do mundo para <strong>realçar a sua beleza natural com total segurança</strong>.
            </p>

            {/* Trust points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 max-w-lg">
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Zero efeito artificial ou exagerado</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Atendimento 1 a 1 feito por mim</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Produtos com certificação e rastreio</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Acompanhamento pós atencioso</span>
              </div>
            </div>

            {/* Primary Action Button requested: "Agendar consultya gratuita no whatsapp" */}
            <div className="space-y-2.5 max-w-md">
              <a
                href={createWhatsAppLink("Olá, Vanessa! Gostaria de agendar minha consulta gratuita sem compromisso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-sm sm:text-base shadow-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-98 border border-emerald-300/40 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 shrink-0" />
                <span>Agendar Consulta Gratuita no WhatsApp</span>
              </a>

              {/* Microtext below button requested: "sem compromisso" */}
              <p className="text-[11px] sm:text-xs text-rose-200/80 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Atendimento direto com Vanessa · <strong>Sem compromisso</strong> · Goiânia</span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
