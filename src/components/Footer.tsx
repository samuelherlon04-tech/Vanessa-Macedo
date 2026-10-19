import React from 'react';
import { EXPERT_DATA } from '../data/expertData';
import { Instagram, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1C0712] text-zinc-300 py-10 px-4 border-t border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Handwritten manual signature style for Vanessa Macedo */}
        <div className="mb-3">
          <span className="font-signature text-3xl sm:text-4xl text-amber-200 tracking-wide block">
            Vanessa Macedo
          </span>
        </div>

        {/* Profession & City */}
        <p className="text-xs sm:text-sm text-zinc-300 font-medium uppercase tracking-wider mb-2">
          {EXPERT_DATA.title} · {EXPERT_DATA.city}
        </p>

        {/* Short address */}
        <p className="text-xs text-zinc-500 max-w-md mb-5">
          {EXPERT_DATA.shortAddress}
        </p>

        {/* Instagram Link */}
        <a
          href={EXPERT_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-amber-200 border border-white/10 hover:border-[#D4AF37]/40 transition-all mb-8 group"
        >
          <Instagram className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span>Siga no Instagram: {EXPERT_DATA.instagramHandle}</span>
        </a>

        {/* Bottom divider and copyright */}
        <div className="w-full pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3">
          <p>© {new Date().getFullYear()} Vanessa Macedo · Estética Avançada. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-400 hover:text-amber-200 transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
