import React from 'react';
import { EXPERT_DATA } from '../data/expertData';
import { 
  UserCheck, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Smile, 
  PhoneCall 
} from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-5 h-5 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
    Award: <Award className="w-5 h-5 text-[#D4AF37]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
    Smile: <Smile className="w-5 h-5 text-[#D4AF37]" />,
    PhoneCall: <PhoneCall className="w-5 h-5 text-[#D4AF37]" />,
  };

  return (
    <section id="diferenciais" className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2B0E1B] via-[#351423] to-[#2B0E1B] border-b border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5" />
            <span>Exclusividade & Ética</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            Por Que Confiar Sua Beleza em Mim?
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-2">
            Pilares inegociáveis que garantem que sua experiência seja serena, segura e com naturalidade absoluta.
          </p>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {EXPERT_DATA.differentials.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-[#240A16] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3.5 group-hover:bg-[#D4AF37]/20 transition-colors">
                  {iconMap[item.icon] || <Award className="w-5 h-5 text-[#D4AF37]" />}
                </div>
                <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-amber-100 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                <span>Pilar {index + 1} de excelência</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
