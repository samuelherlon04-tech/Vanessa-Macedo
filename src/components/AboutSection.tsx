import React from 'react';
import { EXPERT_DATA, createWhatsAppLink } from '../data/expertData';
import { Award, Check, MessageCircle, Heart, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mim" className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2B0E1B] via-[#351322] to-[#2E0F1D] border-b border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo of Vanessa */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl bg-[#240B17] aspect-[3/4]">
                <img
                  src={EXPERT_DATA.photos.about}
                  alt="Vanessa Macedo - Estética Avançada"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Signature Tag */}
              <div className="absolute -bottom-3 right-4 bg-[#1F0713]/90 backdrop-blur-md border border-[#D4AF37]/45 rounded-xl px-4 py-2 shadow-2xl text-center">
                <span className="font-signature text-2xl sm:text-3xl text-amber-200 block leading-none">
                  Vanessa Macedo
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] block mt-1 font-semibold">
                  Estética Avançada Goiânia
                </span>
              </div>
            </div>
          </div>

          {/* Copy in First Person + Human Language (Not Clinical) */}
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Conheça Minha História</span>
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight mb-4">
              “Não crio um novo rosto para você. Revela-se a sua melhor versão.”
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
              <p>
                Sempre acreditei que a verdadeira estética não é sobre seguir modismos ou transformar pessoas em rostos genéricos. É sobre <strong>respeito à sua anatomia, harmonia e autoestima</strong>.
              </p>
              <p>
                Quando você entra no meu consultório aqui no Setor Aeroporto em Goiânia, você não encontra um ambiente frio de clínica impessoal. Você encontra uma profissional que ouve com atenção, estuda seus ângulos milímetro a milímetro e aplica técnicas refinadas para que você se sinta rejuvenescida, segura e confiante.
              </p>
            </div>

            {/* Bullets com Diferenciais Pessoais */}
            <div className="space-y-2.5 mb-7">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span><strong>Avaliação 100% individual:</strong> Eu mesma atendo você em cada etapa. Você nunca será repassada a outra pessoa.</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span><strong>Coragem de dizer não:</strong> Se algum procedimento não for indicado ou colocar sua harmonia em risco, eu oriento você com total sinceridade.</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span><strong>Substâncias consagradas mundialmente:</strong> Apenas produtos aprovados pela ANVISA com rastreabilidade lote a lote.</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={createWhatsAppLink("Olá, Vanessa! Li sua história no site e me identifiquei muito com sua proposta de naturalidade.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Conversar com Vanessa no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
