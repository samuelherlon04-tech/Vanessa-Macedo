import React, { useState } from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { MapPin, Navigation, Copy, Check, ExternalLink, MessageCircle, Clock } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EXPERT_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encodedAddress = encodeURIComponent(EXPERT_DATA.address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="onde-encontrar" className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2B0E1B] via-[#371424] to-[#2E0F1D] border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Nobre</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            Onde Nos Encontrar
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-2">
            Localização privilegiada e reservada no Setor Aeroporto em Goiânia, com fácil acesso e estacionamento.
          </p>
        </div>

        {/* Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Address Details Card (5 cols) */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#240A16] border border-[#D4AF37]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-amber-100 leading-none">
                    Espaço Vanessa Macedo
                  </h3>
                  <span className="text-[10px] text-zinc-400">Setor Aeroporto · Goiânia</span>
                </div>
              </div>

              {/* Exact user address */}
              <div className="bg-black/50 p-3.5 rounded-xl border border-white/10 mb-4">
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {EXPERT_DATA.address}
                </p>
              </div>

              {/* Copy button */}
              <button
                onClick={handleCopyAddress}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-amber-200 border border-white/10 flex items-center justify-center gap-2 transition-colors mb-4 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Endereço Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D4AF37]" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>

              {/* Info chips */}
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Atendimento com hora marcada e sem filas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Fácil acesso e tranquilidade para estacionar</span>
                </div>
              </div>
            </div>

            {/* GPS Nav buttons */}
            <div className="pt-4 border-t border-white/10 mt-5 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-zinc-200 border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-zinc-200 border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Waze</span>
                </a>
              </div>

              <a
                href={createWhatsAppLink("Olá, Vanessa! Gostaria de confirmar a rota e localização para minha consulta no Setor Aeroporto.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Solicitar Rota no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl min-h-[300px] sm:min-h-[380px] bg-black relative">
            <iframe
              title="Localização Vanessa Macedo Estética Avançada Goiânia"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-[1.1] opacity-90"
            />
            {/* Overlay hint */}
            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] text-amber-200 flex items-center gap-1.5 pointer-events-none">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Goiânia · Setor Aeroporto</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
