import React from 'react';
import { EXPERT_DATA } from '../data/expertData';
import { Camera, ShieldCheck } from 'lucide-react';

interface BehindTheScenesSectionProps {
  onSelectImage: (url: string, title?: string, tag?: string) => void;
}

export const BehindTheScenesSection: React.FC<BehindTheScenesSectionProps> = ({ onSelectImage }) => {
  return (
    <section className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2A0E1A] via-[#331121] to-[#2B0E1B] border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Camera className="w-3.5 h-3.5" />
            <span>Presença & Autoridade</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            Bastidores de Uma Experiência Exclusiva
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-2">
            Ambiente reservado, biossegurança de nível hospitalar e atendimento dedicado integralmente a você.
          </p>
        </div>

        {/* Bastidores Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {EXPERT_DATA.backstageGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage(item.url, item.caption, "Bastidores")}
              className="group relative rounded-2xl overflow-hidden bg-[#240A16] border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-xl transition-all duration-300 cursor-pointer active:scale-98 flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/50">
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Caption on image */}
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Vanessa Macedo</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
