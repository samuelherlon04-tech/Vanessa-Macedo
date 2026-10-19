import React from 'react';
import { X, ZoomIn, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../data/expertData';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title?: string;
  tag?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  tag,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#240A16] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-semibold text-amber-100">
              {title || "Visualização de Resultado"}
            </span>
            {tag && (
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                {tag}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar visualização"
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
          <img
            src={imageUrl}
            alt={title || "Resultado Estética Vanessa Macedo"}
            className="w-full h-auto max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer with conversion CTA */}
        <div className="p-3 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p className="text-[11px] text-zinc-400 text-center sm:text-left">
            *Resultados individuais variam conforme anatomia e objetivos biológicos.
          </p>
          <a
            href={createWhatsAppLink(`Olá, Vanessa! Vi o resultado "${title || 'de harmonização'}" e gostaria de avaliar se é indicado para mim.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Quero um resultado assim</span>
          </a>
        </div>
      </div>
    </div>
  );
};
