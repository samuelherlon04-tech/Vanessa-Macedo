import React, { useState, useRef } from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { Play, Pause, Volume2, VolumeX, MessageCircle, Award, ExternalLink } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay on mount
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay muted required:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Play prevented:", err);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section id="video-procedimento" className="relative py-10 sm:py-16 px-4 bg-gradient-to-b from-[#381423] via-[#32111F] to-[#2B0E1B] border-b border-[#D4AF37]/20">
      {/* Background glow - wine & rose gold */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#8B2E58]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>O Método em Ação</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50">
            A Experiência do Procedimento
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-1">
            Veja a delicadeza e a precisão em cada aplicação
          </p>
        </div>

        {/* Video + Text Grid (Prominently featured at the top) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#250C19]/90 p-4 sm:p-7 rounded-2xl border border-[#D4AF37]/30 shadow-2xl backdrop-blur-md">
          
          {/* Video Container (Left / Top on mobile) */}
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden bg-black aspect-video sm:aspect-[4/3] border border-white/10 group shadow-inner">
            {!videoError ? (
              <>
                <video
                  ref={videoRef}
                  src={EXPERT_DATA.videoUrl}
                  poster={EXPERT_DATA.photos.about}
                  autoPlay
                  playsInline
                  muted={isMuted}
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover"
                />

                {/* Unmute prompt for autoplay */}
                {isMuted && (
                  <button
                    onClick={toggleMute}
                    className="absolute top-3 right-3 z-20 px-2.5 py-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md border border-[#D4AF37]/50 text-amber-200 text-[11px] font-semibold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all cursor-pointer animate-pulse"
                  >
                    <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Toque p/ ativar som</span>
                  </button>
                )}

                {/* Video Play Overlay */}
                <div 
                  onClick={togglePlay}
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-200 p-[2px] shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                    <div className="w-full h-full rounded-full bg-neutral-950/80 flex items-center justify-center backdrop-blur-sm">
                      {isPlaying ? (
                        <Pause className="w-7 h-7 sm:w-8 sm:h-8 text-amber-100" />
                      ) : (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37] ml-1 fill-[#D4AF37]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Control Bar */}
                <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-white text-xs z-20 pointer-events-auto">
                  <button
                    onClick={togglePlay}
                    className="px-2.5 py-1 rounded bg-black/60 hover:bg-black/80 backdrop-blur border border-white/20 flex items-center gap-1.5 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    <span className="text-[11px] font-medium">{isPlaying ? 'Pausar' : 'Assistir'}</span>
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur border border-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-zinc-300" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                  </button>
                </div>
              </>
            ) : (
              /* Fallback if external video stream is restricted */
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950">
                <img 
                  src={EXPERT_DATA.photos.about} 
                  alt="Apresentação do procedimento" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30" 
                />
                <div className="relative z-10 flex flex-col items-center">
                  <Play className="w-12 h-12 text-[#D4AF37] mb-2" />
                  <p className="text-sm font-semibold text-white mb-2">Vídeo demonstrativo de procedimento</p>
                  <a
                    href={EXPERT_DATA.videoEmbedFallback}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-neutral-950 font-bold text-xs"
                  >
                    <span>Assistir no player Imgur</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Copy Area (Right / Bottom on mobile) - Exact text requested */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="border-l-2 border-[#D4AF37] pl-3.5 mb-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                Sensibilidade & Propósito
              </span>
            </div>

            {/* User's Exact Specified Copy */}
            <blockquote className="font-serif-luxury text-base sm:text-lg lg:text-xl text-amber-50 leading-relaxed italic mb-4">
              “Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.”
            </blockquote>

            <p className="text-xs text-zinc-300 mb-5 leading-relaxed">
              Cada milímetro do seu rosto carrega a sua história e expressividade. O método de Vanessa Macedo não busca transformar você em outra pessoa, mas sim despertar o ápice do seu frescor, jovialidade e elegância.
            </p>

            {/* Direct CTA */}
            <a
              href={createWhatsAppLink("Olá, Vanessa! Assisti ao vídeo do procedimento e gostaria de saber se é adequado para o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Quero Avaliar Meu Rosto no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
