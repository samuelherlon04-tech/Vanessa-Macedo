import React, { useState, useEffect } from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex items-center gap-2 animate-bounce-subtle">
      {/* Floating tooltip on mobile/desktop */}
      <div className="hidden xs:flex items-center gap-1.5 py-1 px-3 rounded-full bg-black/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl text-[11px] text-amber-100 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Agendar com Vanessa</span>
      </div>

      {/* Button */}
      <a
        href={createWhatsAppLink("Olá, Vanessa! Estou no seu site e gostaria de agendar uma consulta.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Vanessa Macedo"
        className="w-13 h-13 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl flex items-center justify-center border-2 border-emerald-300/40 hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
