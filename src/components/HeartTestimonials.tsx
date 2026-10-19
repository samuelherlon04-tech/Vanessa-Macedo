import React, { useState, useEffect, useRef } from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { Heart, ZoomIn, MessageCircle, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface HeartTestimonialsProps {
  onSelectImage: (url: string, title?: string, tag?: string) => void;
}

export const HeartTestimonials: React.FC<HeartTestimonialsProps> = ({ onSelectImage }) => {
  const [activeHeartIdx, setActiveHeartIdx] = useState(0);
  const [isAutoHeart, setIsAutoHeart] = useState(true);
  const totalHearts = EXPERT_DATA.heartTestimonials.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoHeart) {
      timerRef.current = setInterval(() => {
        setActiveHeartIdx((prev) => (prev + 1) % totalHearts);
      }, 3800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoHeart, totalHearts]);

  return (
    <section id="provas-coracao" className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2F101E] via-[#361323] to-[#2B0E1B] border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Heart className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Harmonização de 💚</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            O Carinho & a Confiança das Pacientes
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-2">
            Mensagens espontâneas e feedbacks reais de quem confiou sua beleza e autoestima aos cuidados de Vanessa Macedo.
          </p>

          {/* Auto indicator */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <button
              onClick={() => setIsAutoHeart(!isAutoHeart)}
              className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300/80 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30 cursor-pointer"
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${isAutoHeart ? 'animate-ping' : ''}`} />
              <span>{isAutoHeart ? "Galeria Automática Ativa" : "Automático Pausado"}</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid (Prints de WhatsApp e Depoimentos) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {EXPERT_DATA.heartTestimonials.map((item, index) => {
            const isActive = activeHeartIdx === index;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveHeartIdx(index);
                  onSelectImage(item.url, `Depoimento de Paciente #${index + 1}`, "Depoimento Real 💚");
                }}
                className={`group relative rounded-2xl overflow-hidden bg-[#240A16] transition-all duration-500 cursor-pointer active:scale-98 flex flex-col ${
                  isActive 
                    ? 'border-2 border-emerald-400 shadow-xl shadow-emerald-900/30 ring-1 ring-emerald-400/50 scale-[1.02]' 
                    : 'border border-emerald-500/20 hover:border-emerald-400/50 shadow-lg opacity-85 hover:opacity-100'
                }`}
              >
                {/* Aspect ratio */}
                <div className="relative aspect-[3/4] w-full bg-black/60 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.feedback}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Heart badge */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-emerald-400/40 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  </div>

                  {/* Hover zoom overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2 rounded-full bg-emerald-600 text-white shadow-xl">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom detail */}
                <div className="p-2 sm:p-2.5 bg-[#0A0E13] border-t border-white/5">
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mb-0.5">
                    <span>★ ★ ★ ★ ★</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-medium line-clamp-2 leading-tight">
                    {item.feedback}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-quote */}
        <div className="text-center max-w-lg mx-auto bg-[#0E141C]/80 border border-[#D4AF37]/20 p-4 rounded-xl shadow-md mb-6">
          <p className="text-xs sm:text-sm text-amber-100 italic">
            “Não há nada mais gratificante do que receber uma mensagem dizendo: ‘Vanessa, me sinto mais linda e ninguém percebeu que fiz procedimento, só dizem que estou radiante!’”
          </p>
          <span className="text-[11px] text-[#D4AF37] font-semibold mt-1 block">
            — Vanessa Macedo
          </span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={createWhatsAppLink("Olá, Vanessa! Vi os depoimentos das suas pacientes de 💚 e gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Quero Fazer Parte Desses Resultados</span>
          </a>
        </div>

      </div>
    </section>
  );
};
