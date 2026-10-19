import React, { useState, useEffect } from 'react';
import { 
  EXPERT_DATA, 
  QUIZ_QUESTIONS, 
  createWhatsAppLink, 
  createQuizWhatsAppLink 
} from '../data/expertData';
import { 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  MessageCircle, 
  Eye, 
  X, 
  ShieldCheck 
} from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'welcome' | 'quiz' | 'result';
}

export const QuizModal: React.FC<QuizModalProps> = ({ 
  isOpen, 
  onClose,
  initialMode = 'welcome' 
}) => {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'analyzing' | 'result'>(initialMode);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ question: string; answer: string }[]>([]);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);
  const [analyzingStatus, setAnalyzingStatus] = useState("Analisando...");

  useEffect(() => {
    if (initialMode) {
      setStep(initialMode);
    }
  }, [initialMode, isOpen]);

  // Handle analyzing progress bar animation
  useEffect(() => {
    if (step === 'analyzing') {
      setAnalyzingProgress(10);
      setAnalyzingStatus("Analisando suas respostas...");

      const timer1 = setTimeout(() => {
        setAnalyzingProgress(45);
        setAnalyzingStatus("Verificando compatibilidade com o Método Vanessa Macedo...");
      }, 700);

      const timer2 = setTimeout(() => {
        setAnalyzingProgress(85);
        setAnalyzingStatus("Calculando índice de naturalidade e segurança...");
      }, 1500);

      const timer3 = setTimeout(() => {
        setAnalyzingProgress(100);
        setAnalyzingStatus("Perfil Compatível! Gerando seu resultado...");
      }, 2300);

      const timerFinal = setTimeout(() => {
        setStep('result');
      }, 2900);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timerFinal);
      };
    }
  }, [step]);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (optionLabel: string) => {
    const updated = [...answers];
    updated[currentQuestionIndex] = {
      question: currentQ.question,
      answer: optionLabel,
    };
    setAnswers(updated);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Reached the end: show the "Analisando" bar!
      setStep('analyzing');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setStep('welcome');
    }
  };

  const handleSendQuizWhatsApp = () => {
    const url = createQuizWhatsAppLink(answers);
    window.open(url, '_blank');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const url = createWhatsAppLink("Olá, Dra. Vanessa Macedo! Gostaria de conversar com você sem compromisso sobre um procedimento.");
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Quiz Container - Compact for mobile */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#111720] via-[#0D1217] to-[#070A0D] border border-[#D4AF37]/35 rounded-2xl shadow-2xl overflow-hidden my-auto text-white">
        
        {/* Glow ambient decoration */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Global Quiz Header with Expert Name and Floating Portrait in gold frame */}
        <div className="relative z-10 px-4 pt-3.5 pb-2.5 border-b border-white/10 flex items-center justify-between gap-3 bg-black/30">
          <div className="flex items-center gap-2.5">
            {/* Floating Hero Portrait in gold framed border */}
            <div className="relative group shrink-0">
              <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] shadow-md animate-gold-pulse">
                <img 
                  src={EXPERT_DATA.photos.hero} 
                  alt={EXPERT_DATA.name} 
                  className="w-full h-full object-cover object-top rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-600 w-3.5 h-3.5 rounded-full border-2 border-[#111720] flex items-center justify-center">
                <CheckCircle2 className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-luxury font-bold text-sm sm:text-base text-amber-100 uppercase tracking-wide leading-none">
                  {EXPERT_DATA.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-amber-300 border border-[#D4AF37]/40 font-semibold">
                  Especialista
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 mt-0.5">
                Avaliação Personalizada · Goiânia
              </p>
            </div>
          </div>

          {/* Quick exit to site */}
          <button
            onClick={onClose}
            aria-label="Ir direto para o site"
            className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 text-[11px]"
            title="Ir para o site"
          >
            <span className="hidden xs:inline">Pular p/ site</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ================= STAGE 0: WELCOME CHOICE ================= */}
        {step === 'welcome' && (
          <div className="relative z-10 p-4 sm:p-5 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-3">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Experiência Exclusiva & Personalizada</span>
            </div>

            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-amber-100 leading-snug mb-2">
              Como você prefere iniciar sua experiência?
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 mb-5 max-w-sm leading-relaxed">
              Descubra se o método de estética avançada e naturalidade de Vanessa Macedo é perfeito para seus traços e sua rotina.
            </p>

            <div className="w-full space-y-2.5">
              {/* Option 1: Quiz (Recommended) */}
              <button
                onClick={() => setStep('quiz')}
                className="w-full p-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2A] text-neutral-950 font-bold text-sm shadow-lg flex items-center justify-between transition-all transform active:scale-98 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-lg bg-neutral-950/20 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-neutral-950" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-neutral-950">Fazer Avaliação Rápida</span>
                      <span className="text-[9px] uppercase tracking-wider bg-black/20 text-neutral-950 font-bold px-1.5 py-0.2 rounded">1 min</span>
                    </div>
                    <p className="text-[11px] text-neutral-900/80 font-normal">Descubra sua compatibilidade e envie à Dra.</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-neutral-950" />
              </button>

              {/* Option 2: WhatsApp directly */}
              <button
                onClick={handleDirectWhatsApp}
                className="w-full p-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow flex items-center justify-between border border-emerald-400/30 transition-all active:scale-98 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Chamar no WhatsApp sem Compromisso</span>
                    <span className="text-[10px] text-emerald-100 font-normal">Conversa direta com Vanessa</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              {/* Option 3: Continue directly to site */}
              <button
                onClick={onClose}
                className="w-full p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-zinc-400" />
                <span>Ir direto para o site principal</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= STAGE 1: QUIZ QUESTIONS ================= */}
        {step === 'quiz' && (
          <div className="relative z-10 p-3.5 sm:p-5">
            {/* Progress Bar & Counter */}
            <div className="mb-3.5">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1.5">
                <span className="flex items-center gap-1 text-amber-200/90 font-medium">
                  <Award className="w-3 h-3 text-[#D4AF37]" />
                  Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono text-amber-200/80">{progressPercent}% concluído</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-200 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Title & Subtitle */}
            <div className="mb-3.5 text-left">
              <h3 className="text-sm sm:text-base font-bold text-amber-50 leading-snug">
                {currentQ.question}
              </h3>
              {currentQ.subtitle && (
                <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
                  {currentQ.subtitle}
                </p>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-2 mb-4">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentQuestionIndex]?.answer === opt.label;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.label)}
                    className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-start gap-2.5 active:scale-98 cursor-pointer ${
                      isSelected 
                        ? 'bg-[#D4AF37]/25 border-[#D4AF37] text-white shadow-md ring-1 ring-[#D4AF37]/50' 
                        : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-zinc-200 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-zinc-500'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs sm:text-sm font-semibold block leading-tight">
                        {opt.label}
                      </span>
                      {opt.description && (
                        <span className="text-[10px] text-zinc-400 block mt-0.5 leading-tight">
                          {opt.description}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Navigation Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                onClick={handleBackQuestion}
                className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Voltar</span>
              </button>

              <button
                onClick={onClose}
                className="text-[11px] text-amber-200/80 hover:text-white flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span>Ir direto para o site</span>
                <Eye className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STAGE 2: ANALYZING BAR (EXTRA PROMPT 1) ================= */}
        {step === 'analyzing' && (
          <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
            {/* Pulsing Avatar Frame */}
            <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-[#AA771C] shadow-2xl mb-4 animate-gold-pulse">
              <img 
                src={EXPERT_DATA.photos.hero} 
                alt="Vanessa Macedo" 
                className="w-full h-full object-cover object-top rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Requested Text: "Analisando" */}
            <div className="inline-flex items-center gap-2 mb-2 text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
              <span>Analisando</span>
            </div>

            <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-amber-100 mb-1">
              Processando suas respostas...
            </h3>
            
            <p className="text-xs text-zinc-300 max-w-xs mb-5 min-h-[32px] transition-all">
              {analyzingStatus}
            </p>

            {/* Dynamic Animated Progress Bar */}
            <div className="w-full max-w-xs h-2.5 bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-amber-500/30">
              <div 
                className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-200 to-emerald-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${analyzingProgress}%` }}
              />
            </div>
            
            <span className="font-mono text-xs text-amber-300/80 mt-2 font-medium">
              {analyzingProgress}%
            </span>
          </div>
        )}

        {/* ================= STAGE 3: RESULT PAGE (HIGH CONVERSION) ================= */}
        {step === 'result' && (
          <div className="relative z-10 p-3 sm:p-4 text-center flex flex-col items-center">
            {/* Header Badge: Perfil Compatível. Você é a Paciente ideal. */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold mb-2 shadow-sm animate-pulse">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Perfil Compatível. Você é a Paciente ideal.</span>
            </div>

            {/* Photo of Hero - Bust up in high quality with captivating, modern & sophisticated background */}
            <div className="relative my-2 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-[2px] bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-emerald-500 shadow-xl overflow-hidden group">
              <img 
                src={EXPERT_DATA.photos.hero} 
                alt="Vanessa Macedo" 
                className="w-full h-full object-cover object-top rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 inset-x-0 text-center">
                <span className="text-[10px] uppercase font-semibold text-amber-200 tracking-wider bg-black/60 px-2 py-0.5 rounded-full">
                  Vanessa Macedo
                </span>
              </div>
            </div>

            {/* Mandatory Sub-phrase requested */}
            <div className="bg-black/40 border border-[#D4AF37]/25 rounded-xl p-3 mb-3.5 max-w-md">
              <p className="text-xs sm:text-[13px] text-amber-100 font-medium leading-relaxed">
                “Com base nas suas respostas, o Método da <strong className="text-[#D4AF37] font-bold">Vanessa Macedo</strong> consegue entregar exatamente a naturalidade e segurança que você procura.”
              </p>
            </div>

            {/* 3 Explicit Buttons Requested in Prompt */}
            <div className="w-full space-y-2">
              {/* Button 1: Enviar minha avaliação a DRA */}
              <button
                onClick={handleSendQuizWhatsApp}
                className="w-full py-3 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 border border-emerald-300/40 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                <span>1 - Enviar minha avaliação à DRA</span>
              </button>

              {/* Button 2: CHAMAR NO WHATSAPP SEM COMPROMISSO */}
              <button
                onClick={handleDirectWhatsApp}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2A] text-neutral-950 font-bold text-xs sm:text-sm shadow flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-neutral-950" />
                <span>2 - CHAMAR NO WHATSAPP SEM COMPROMISSO</span>
              </button>

              {/* Button 3: NÃO ENVIAR E CONTINUAR NO SITE */}
              <button
                onClick={onClose}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-zinc-300" />
                <span>3 - NÃO ENVIAR E CONTINUAR NO SITE</span>
              </button>
            </div>

            <p className="text-[10px] text-zinc-400 mt-2">
              Atendimento exclusivo em Goiânia · Rua 9-A, Setor Aeroporto
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
