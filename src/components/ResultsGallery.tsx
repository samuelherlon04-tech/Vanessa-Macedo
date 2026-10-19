import React, { useState } from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { 
  Award, 
  ZoomIn, 
  MessageCircle, 
  Info, 
  Play, 
  Pause, 
  ArrowRight, 
  ArrowLeft,
  LayoutGrid, 
  SlidersHorizontal 
} from 'lucide-react';

interface ResultsGalleryProps {
  onSelectImage: (url: string, title?: string, tag?: string) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onSelectImage }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [speed, setSpeed] = useState<'normal' | 'slow'>('normal');
  const [viewMode, setViewMode] = useState<'stream' | 'grid'>('stream');

  // Duplicate items twice to ensure endless seamless infinite loop
  const streamItems = [...EXPERT_DATA.resultsGallery, ...EXPERT_DATA.resultsGallery];

  const animationClass = direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left';
  const durationStyle = speed === 'slow' ? { animationDuration: '95s' } : { animationDuration: '70s' };

  return (
    <section id="resultados-reais" className="relative py-12 sm:py-20 bg-gradient-to-b from-[#2E0F1D] via-[#391525] to-[#2F101E] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background ambient lighting - Wine glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-[#8B2E58]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header - Exact texts requested */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5" />
            <span>Evidências Visuais</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            Resultados Reais & Transformações Sutis
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-lg mx-auto">
            Toque em qualquer resultado para ampliar e ver em detalhes a precisão do Método Vanessa Macedo.
          </p>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            
            {/* Automatic Play/Pause */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all cursor-pointer ${
                !isPaused 
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40' 
                  : 'bg-zinc-900 text-zinc-300 border-zinc-700'
              }`}
              title={isPaused ? "Retomar movimento automático" : "Pausar movimento"}
            >
              {!isPaused ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <Pause className="w-3 h-3 text-emerald-400" />
                  <span>Deslizando para a Direita</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-amber-300" />
                  <span>Movimento Pausado</span>
                </>
              )}
            </button>

            {/* Direction toggle */}
            <button
              onClick={() => setDirection(prev => prev === 'right' ? 'left' : 'right')}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Alternar sentido"
            >
              {direction === 'right' ? (
                <>
                  <span>Sentido: Direita</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </>
              ) : (
                <>
                  <span>Sentido: Esquerda</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                </>
              )}
            </button>

            {/* View Mode Toggle */}
            <div className="inline-flex p-0.5 rounded-full bg-zinc-900 border border-zinc-800">
              <button
                onClick={() => setViewMode('stream')}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'stream' 
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>Esteira Automática</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'grid' 
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Ver Grade</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ================= VIEW 1: DYNAMIC HORIZONTAL STREAM TO THE RIGHT ================= */}
      {viewMode === 'stream' && (
        <div className="relative w-full overflow-hidden py-3">
          
          {/* Subtle side fading vignettes for luxury depth */}
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#2E0F1D] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#2E0F1D] to-transparent z-20 pointer-events-none" />

          {/* Continuous scrolling track moving to the right */}
          <div 
            className={`${animationClass} ${isPaused ? 'paused' : ''} flex items-center gap-3.5 sm:gap-5 px-4`}
            style={durationStyle}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {streamItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => onSelectImage(item.url, item.title, item.tag)}
                className="group relative w-64 sm:w-72 md:w-80 shrink-0 rounded-2xl overflow-hidden bg-[#240A16] border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-xl transition-all duration-300 cursor-pointer active:scale-95 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-black/60 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Tag */}
                  {item.tag && (
                    <div className="absolute top-2.5 left-2.5 pointer-events-none">
                      <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-black/75 text-amber-200 border border-[#D4AF37]/40 backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Zoom hint badge */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/75 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-2.5 inset-x-3 pointer-events-none">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate leading-tight group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">
                      Toque para ver ampliado
                    </span>
                  </div>
                </div>

                {/* Bottom interactive action bar */}
                <div className="py-2 px-3 bg-[#0A0F14] border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 group-hover:bg-[#111720] transition-colors">
                  <span className="flex items-center gap-1 text-[#D4AF37]">
                    <Award className="w-3 h-3" />
                    <span>Método Vanessa Macedo</span>
                  </span>
                  <span className="text-amber-200 font-medium group-hover:translate-x-0.5 transition-transform">
                    Ampliar 🔍
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive touch hint for mobile */}
          <div className="text-center mt-3">
            <span className="text-[11px] text-zinc-400/80 italic">
              ⚡ Passe o dedo ou clique em qualquer card para pausar e ver o resultado em alta resolução.
            </span>
          </div>
        </div>
      )}

      {/* ================= VIEW 2: COMPLETE STATIC GRID ================= */}
      {viewMode === 'grid' && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-8 animate-fadeIn">
            {EXPERT_DATA.resultsGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectImage(item.url, item.title, item.tag)}
                className="group relative rounded-xl overflow-hidden bg-[#0F141A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-md transition-all duration-300 cursor-pointer flex flex-col active:scale-98"
              >
                <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/75 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  {item.tag && (
                    <div className="absolute top-2 left-2">
                      <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-black/70 text-amber-200 border border-[#D4AF37]/30 backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-2.5 bg-[#0D1217] border-t border-white/5 flex items-center justify-between">
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-200 truncate group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </p>
                  <ZoomIn className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#D4AF37] shrink-0 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mandatory Discrete Warning & WhatsApp Action */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 mb-6 text-center">
          <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span>*Aviso importante: Resultados podem variar de pessoa para pessoa segundo biotipo e objetivos individuais.</span>
        </div>

        {/* Conversion CTA */}
        <div className="text-center">
          <a
            href={createWhatsAppLink("Olá, Vanessa! Adorei a galeria de resultados automáticos e quero agendar minha avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Quero Uma Avaliação Personalizada no WhatsApp</span>
          </a>
        </div>
      </div>

    </section>
  );
};
