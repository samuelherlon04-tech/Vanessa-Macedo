import React from 'react';
import { createWhatsAppLink } from '../data/expertData';
import { MessageCircle, ShieldCheck, HelpCircle } from 'lucide-react';

export const CtaIntermediate: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14 px-4 bg-gradient-to-r from-[#2B0E1B] via-[#43182B] to-[#2B0E1B] border-b border-[#D4AF37]/25">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Objection pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-amber-200 text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Ainda com dúvidas se o procedimento é para você?</span>
        </div>

        <h3 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-amber-50 leading-snug mb-3">
          Tem receio de ficar artificial ou não sabe por onde começar?
        </h3>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto mb-6 leading-relaxed">
          Você não precisa decidir nada agora. Me mande uma mensagem no WhatsApp, me conte o que você quer melhorar e eu te explico exatamente o que é viável, seguro e harmonioso para o seu caso.
        </p>

        {/* WhatsApp Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={createWhatsAppLink("Olá, Vanessa! Tenho algumas dúvidas sobre procedimentos e gostaria de conversar sem compromisso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-sm shadow-xl transition-all active:scale-98 border border-emerald-300/30 text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Tirar Dúvidas Direto com Vanessa no WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-zinc-400 mt-3 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Atendimento humanizado · Sem compromisso de agendamento imediato</span>
        </p>

      </div>
    </section>
  );
};
