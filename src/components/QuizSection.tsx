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
  RotateCcw, 
  ShieldCheck 
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [step, setStep] = useState<'quiz' | 'analyzing' | 'result'>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ question: string; answer: string }[]>([]);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);
  const [analyzingStatus, setAnalyzingStatus] = useState("Analisando...");

  // Handle analyzing progress bar animation
  useEffect(() => {
    if (step === 'analyzing') {
      setAnalyzingProgress(15);
      setAnalyzingStatus("Analisando suas preferências...");

      const timer1 = setTimeout(() => {
        setAnalyzingProgress(50);
        setAnalyzingStatus("Verificando compatibilidade com o Método Vanessa Macedo...");
      }, 700);

      const timer2 = setTimeout(() => {
        setAnalyzingProgress(85);
        setAnalyzingStatus("Calculando índice de naturalidade e segurança...");
      }, 1400);

      const timer3 = setTimeout(() => {
        setAnalyzingProgress(100);
        setAnalyzingStatus("Perfil Compatível! Gerando seu resultado exclusivo...");
      }, 2100);

      const timerFinal = setTimeout(() => {
        setStep('result');
      }, 2600);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timerFinal);
      };
    }
  }, [step]);

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
      setStep('analyzing');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleResetQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setStep('quiz');
  };

  const handleSendQuizWhatsApp = () => {
    const url = createQuizWhatsAppLink(answers);
    window.open(url, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const url = createWhatsAppLink("Olá, Vanessa! Fiz a avaliação no seu site e gostaria de agendar uma consulta sem compromisso.");
    window.open(url, '_blank');
  };

  return (
    <section id="quiz-avaliacao" className="relative py-12 sm:py-20 px-4 bg-gradient-to-b from-[#2E0F1D] via-[#381424] to-[#321120] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background ambient lighting - Wine glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-72 bg-[#8B2E58]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5" />
            <span>Avaliação Interativa Personalizada</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 leading-tight">
            Descubra Seu Protocolo Ideal
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80 mt-1 max-w-md mx-auto">
            Responda 4 perguntas rápidas (1 min) e envie diretamente para Vanessa Macedo avaliar a harmonia dos seus traços.
          </p>
        </div>

        {/* Embedded Card Container */}
        <div className="rounded-3xl bg-[#240A16]/95 border border-[#D4AF37]/35 shadow-2xl p-4 sm:p-7 backdrop-blur-md">
          
          {/* Header of the in-page card: Floating Portrait + Expert Name */}
          <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative group shrink-0">
                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] shadow-md animate-gold-pulse">
                  <img 
                    src={EXPERT_DATA.photos.hero} 
                    alt={EXPERT_DATA.name} 
                    className="w-full h-full object-cover object-top rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-600 w-3.5 h-3.5 rounded-full border-2 border-[#240A16] flex items-center justify-center">
                  <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-luxury font-bold text-base text-amber-100 uppercase tracking-wide leading-none">
                    {EXPERT_DATA.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-amber-300 border border-[#D4AF37]/40 font-semibold">
                    Método Exclusivo
                  </span>
                </div>
                <p className="text-[10px] text-rose-200/70 mt-1">
                  Estética Avançada · Goiânia
                </p>
              </div>
            </div>

            {step === 'result' && (
              <button
                onClick={handleResetQuiz}
                className="text-xs text-rose-300 hover:text-white flex items-center gap-1 py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                title="Fazer nova avaliação"
              >
                <RotateCcw className="w-3 h-3 text-[#D4AF37]" />
                <span className="hidden xs:inline">Refazer</span>
              </button>
            )}
          </div>

          {/* ================= STAGE 1: QUESTIONS ================= */}
          {step === 'quiz' && (
            <div>
              {/* Progress Bar & Counter */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-rose-200/80 mb-1.5 font-medium">
                  <span className="flex items-center gap-1 text-amber-200">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="font-mono text-amber-200/90">{progressPercent}% concluído</span>
                </div>
                <div className="w-full h-2 bg-zinc-900/80 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div 
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-200 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question Title & Subtitle */}
              <div className="mb-4 text-left">
                <h3 className="text-base sm:text-lg font-bold text-amber-50 leading-snug">
                  {currentQ.question}
                </h3>
                {currentQ.subtitle && (
                  <p className="text-xs text-rose-200/70 mt-1 leading-normal">
                    {currentQ.subtitle}
                  </p>
                )}
              </div>

              {/* Options List */}
              <div className="space-y-2.5 mb-5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentQuestionIndex]?.answer === opt.label;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.label)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-start gap-3 active:scale-98 cursor-pointer ${
                        isSelected 
                          ? 'bg-[#D4AF37]/25 border-[#D4AF37] text-white shadow-md ring-1 ring-[#D4AF37]/50' 
                          : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-rose-100 hover:border-[#D4AF37]/50'
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
                          <span className="text-[11px] text-rose-200/70 block mt-1 leading-tight">
                            {opt.description}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Nav Controls */}
              {currentQuestionIndex > 0 && (
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={handleBackQuestion}
                    className="text-xs text-rose-300 hover:text-white flex items-center gap-1.5 py-1 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar à pergunta anterior</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= STAGE 2: ANALYZING BAR ================= */}
          {step === 'analyzing' && (
            <div className="p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[280px]">
              {/* Pulsing Avatar */}
              <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-[#AA771C] shadow-2xl mb-4 animate-gold-pulse">
                <img 
                  src={EXPERT_DATA.photos.hero} 
                  alt="Vanessa Macedo" 
                  className="w-full h-full object-cover object-top rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="inline-flex items-center gap-2 mb-2 text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                <span>Analisando</span>
              </div>

              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-amber-100 mb-1">
                Processando suas respostas...
              </h3>
              
              <p className="text-xs text-rose-200/80 max-w-xs mb-5 min-h-[32px] transition-all">
                {analyzingStatus}
              </p>

              {/* Progress Bar */}
              <div className="w-full max-w-xs h-2.5 bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-amber-500/30">
                <div 
                  className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-200 to-emerald-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${analyzingProgress}%` }}
                />
              </div>
              
              <span className="font-mono text-xs text-amber-300/90 mt-2 font-medium">
                {analyzingProgress}%
              </span>
            </div>
          )}

          {/* ================= STAGE 3: RESULT PAGE ================= */}
          {step === 'result' && (
            <div className="text-center flex flex-col items-center animate-fadeIn">
              {/* Top Badge: Perfil Compatível. Você é a Paciente ideal. */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold mb-3 shadow-sm animate-pulse">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Perfil Compatível. Você é a Paciente ideal.</span>
              </div>

              {/* Expert Bust Photo */}
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

              {/* Specified Phrase */}
              <div className="bg-black/40 border border-[#D4AF37]/30 rounded-2xl p-3.5 mb-4 max-w-md">
                <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                  “Com base nas suas respostas, o Método da <strong className="text-[#D4AF37] font-bold">Vanessa Macedo</strong> consegue entregar exatamente a naturalidade e segurança que você procura.”
                </p>
              </div>

              {/* 3 Explicit Action Buttons */}
              <div className="w-full space-y-2.5">
                {/* Button 1: Enviar minha avaliação a DRA */}
                <button
                  onClick={handleSendQuizWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 border border-emerald-300/40 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                  <span>1 - Enviar minha avaliação à DRA</span>
                </button>

                {/* Button 2: CHAMAR NO WHATSAPP SEM COMPROMISSO */}
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2A] text-neutral-950 font-bold text-xs sm:text-sm shadow flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-neutral-950" />
                  <span>2 - CHAMAR NO WHATSAPP SEM COMPROMISSO</span>
                </button>

                {/* Button 3: REFAZER AVALIAÇÃO */}
                <button
                  onClick={handleResetQuiz}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-rose-100 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-zinc-300" />
                  <span>3 - REFAZER MINHA AVALIAÇÃO</span>
                </button>
              </div>

              <p className="text-[10px] text-rose-200/70 mt-3">
                Atendimento exclusivo em Goiânia · Rua 9-A, Setor Aeroporto
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
