import React from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { MessageCircle, ShieldCheck, CalendarCheck, MapPin, Heart, Video, User, Star, Award } from 'lucide-react';

export const HeaderTicker: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: "Avaliação (Quiz)", id: "quiz-avaliacao", icon: Award },
    { label: "Sobre Mim", id: "sobre-mim", icon: User },
    { label: "Vídeo do Método", id: "video-procedimento", icon: Video },
    { label: "Resultados Reais", id: "resultados-reais", icon: Star },
    { label: "Harmonização de 💚", id: "provas-coracao", icon: Heart },
    { label: "Por Que Confiar", id: "diferenciais", icon: ShieldCheck },
    { label: "Como Funciona", id: "como-funciona", icon: CalendarCheck },
    { label: "Onde nos Encontrar", id: "onde-encontrar", icon: MapPin },
    { label: "Agendamento VIP", id: "contato-final", icon: MessageCircle },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#2A0E1C]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-xl">
      {/* Top Brand Bar */}
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand wordmark */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }}
          className="flex items-center gap-2 group text-left"
        >
          <div className="w-9 h-9 rounded-full border border-[#D4AF37]/60 overflow-hidden shrink-0 shadow-md">
            <img 
              src={EXPERT_DATA.photos.hero} 
              alt="Vanessa Macedo" 
              className="w-full h-full object-cover object-top"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="font-serif-luxury text-base sm:text-lg tracking-wider text-amber-100 font-semibold uppercase block leading-none">
              {EXPERT_DATA.name}
            </span>
            <span className="text-[10px] text-amber-200/80 tracking-widest uppercase block mt-0.5">
              Estética Avançada
            </span>
          </div>
        </a>

        {/* Direct WhatsApp Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={createWhatsAppLink("Olá, Vanessa! Gostaria de falar diretamente com você para tirar dúvidas e agendar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center gap-1.5 transition-all active:scale-95 whitespace-nowrap border border-emerald-400/30"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Logradouro Direcional Passando Devagar (Ticker / Directional Bar) */}
      <div className="relative w-full overflow-hidden bg-[#200A16] border-t border-white/5 py-1.5">
        <div className="animate-ticker flex items-center gap-2 whitespace-nowrap px-2">
          {/* Repeat twice for continuous seamless loop */}
          {[...navItems, ...navItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => scrollTo(item.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs text-amber-100/90 hover:text-white bg-white/[0.06] hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 transition-all cursor-pointer shrink-0 active:scale-95"
              >
                <Icon className="w-3 h-3 text-[#D4AF37]" />
                <span className="font-medium">{item.label}</span>
                <span className="text-[#D4AF37]/50 text-[10px] ml-1">→</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
