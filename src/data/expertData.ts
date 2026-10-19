export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    label: string;
    description?: string;
    icon?: string;
  }[];
}

export const EXPERT_DATA = {
  name: "Vanessa Macedo",
  title: "Estética Avançada & Naturalidade",
  headline: "Eu sou Vanessa Macedo.",
  subheadline: "Não crio padrões nem transformo rostos em cópias. Desenvolvo protocolos exclusivos para realçar a sua beleza natural com máxima segurança e sutileza.",
  city: "Goiânia, GO",
  address: "Rua 9-A quadra 48-A lote 16 número 785 setor Aeroporto, Goiânia, Brasil 74075250",
  shortAddress: "Setor Aeroporto, Goiânia - GO",
  whatsappNumber: "5562996715557",
  whatsappFormatted: "(62) 99671-5557",
  instagramUrl: "https://www.instagram.com/vanessamacedoestetica/",
  instagramHandle: "@vanessamacedoestetica",

  // Video presentation of 1 procedure
  videoUrl: "https://i.imgur.com/N124Nj1.mp4",
  videoEmbedFallback: "https://imgur.com/N124Nj1",
  videoText: "Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.",

  // Expert photos
  photos: {
    hero: "https://i.imgur.com/ImB4Q8M.png",
    about: "https://i.imgur.com/3mYxe3x.png",
    authority: "https://i.imgur.com/T2Sx3Mz.png",
    resultPortrait: "https://i.imgur.com/ImB4Q8M.png",
  },

  // Provas sociais - Resultados / Antes e Depois (Extensible array)
  resultsGallery: [
    { id: 1, url: "https://i.imgur.com/eqtrROg.png", title: "Harmonização Labial e Perfilamento", tag: "Naturalidade" },
    { id: 2, url: "https://i.imgur.com/8FWIqCn.png", title: "Definição de Contorno Mandibular", tag: "Estrutura" },
    { id: 3, url: "https://i.imgur.com/N8QAuPG.png", title: "Rejuvenescimento e Suavização de Linhas", tag: "Elegância" },
    { id: 4, url: "https://i.imgur.com/IvsgPxR.png", title: "Preenchimento Labial Hidratado & Sutil", tag: "Proporção" },
    { id: 5, url: "https://i.imgur.com/YevSnpq.png", title: "Tratamento de Olheiras e Olhar Descansado", tag: "Harmonia" },
    { id: 6, url: "https://i.imgur.com/reRKS7h.png", title: "Rinomodelação sem Cirurgia", tag: "Simetria" },
    { id: 7, url: "https://i.imgur.com/Ek4fhm6.png", title: "Bioestimulador de Colágeno Facial", tag: "Firmeza" },
    { id: 8, url: "https://i.imgur.com/a4QIODm.png", title: "Projeção de Mento e Alinhamento de Perfil", tag: "Equilíbrio" },
    { id: 9, url: "https://i.imgur.com/8n0UAwD.png", title: "Efeito Glow e Rejuvenescimento Global", tag: "Pele Revitalizada" },
    { id: 10, url: "https://i.imgur.com/0gA0vJL.png", title: "Harmonização de Linhas de Expressão", tag: "Sutileza" },
    // Espaço para novos links futuros adicionados pelo usuário:
    // { id: 11, url: "", title: "", tag: "" },
  ],

  // Provas de 💚 - Depoimentos reais de pacientes (Extensible array)
  heartTestimonials: [
    { id: 1, url: "https://i.imgur.com/p40aqL6.png", patient: "Paciente Real", feedback: "Autoestima renovada com naturalidade ímpar" },
    { id: 2, url: "https://i.imgur.com/NEp18dN.png", patient: "Paciente Real", feedback: "Encantada com o cuidado e atenção aos detalhes" },
    { id: 3, url: "https://i.imgur.com/OQ130cR.png", patient: "Paciente Real", feedback: "Resultado super sutil, ninguém percebeu o que fiz, só me elogiam!" },
    { id: 4, url: "https://i.imgur.com/GNIuE0w.png", patient: "Paciente Real", feedback: "Confiança total desde a primeira conversa no WhatsApp" },
    // Espaço para novos links futuros:
    // { id: 5, url: "", patient: "", feedback: "" },
  ],

  // Bastidores e fotos extras de autoridade
  backstageGallery: [
    { id: 1, url: "https://i.imgur.com/T2Sx3Mz.png", caption: "Atendimento 100% individualizado e sem pressa" },
    { id: 2, url: "https://i.imgur.com/3mYxe3x.png", caption: "Estudo anatômico prévio de cada feição" },
    { id: 3, url: "https://i.imgur.com/ImB4Q8M.png", caption: "Compromisso pessoal com a sua segurança" },
  ],

  // Diferenciais do método
  differentials: [
    {
      title: "Atendimento 100% Comigo",
      description: "Do início ao fim, você é avaliada e cuidada diretamente por mim. Sem estagiários, sem intermediários.",
      icon: "UserCheck",
    },
    {
      title: "Avaliação Honesta & Sem Excessos",
      description: "Indico estritamente o que vai valorizar sua beleza. Se algo não for harmônico para seu rosto, eu digo não.",
      icon: "ShieldCheck",
    },
    {
      title: "Produtos de Padrão Ouro Internacional",
      description: "Utilizo exclusivamente substâncias certificadas pela ANVISA e pelas mais rígidas agências mundiais.",
      icon: "Award",
    },
    {
      title: "Naturalidade Inegociável",
      description: "O objetivo é você receber elogios sobre o quanto está descansada e linda, sem ninguém apontar procedimentos.",
      icon: "HeartHandshake",
    },
    {
      title: "Conforto & Técnicas de Precisão",
      description: "Uso de microcânulas e anestésicos tópicos premium para uma experiência tranquila e praticamente indolor.",
      icon: "Smile",
    },
    {
      title: "Acompanhamento Pós-Procedimento",
      description: "Suporte direto comigo e minha equipe no WhatsApp para acompanhar cada dia da sua recuperação.",
      icon: "PhoneCall",
    },
  ],

  // Como funciona a primeira consulta
  steps: [
    {
      number: "01",
      title: "Conversa Inicial no WhatsApp",
      description: "Você clica no botão, conta o que deseja melhorar e esclarece suas primeiras dúvidas diretamente sem compromisso.",
    },
    {
      number: "02",
      title: "Agendamento Exclusivo",
      description: "Reservamos um horário no consultório em Goiânia sem salas de espera cheias, dedicado exclusivamente a você.",
    },
    {
      number: "03",
      title: "Avaliação & Plano Personalizado",
      description: "Fazemos a análise fotográfica, alinhamos expectativas e definimos juntos o plano ideal para sua beleza única.",
    },
  ],
};

// Quiz questions
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é a sua profissão ou rotina diária?",
    subtitle: "Para entender seu ritmo de vida, exposição e tempo de recuperação ideal:",
    options: [
      { label: "Empresária / Executiva / Líder", description: "Rotina dinâmica, preciso de procedimentos sem downtime" },
      { label: "Profissional Liberal / Autônoma", description: "Atendimento direto com público e clientes diários" },
      { label: "Área da Saúde / Direito / Educação", description: "Busco sofisticação,Discrição e autoridade" },
      { label: "Estudante / Dedicação à Família & Lar", description: "Momento especial para cuidar de mim e da minha autoestima" },
    ],
  },
  {
    id: 2,
    question: "O que você mais deseja harmonizar ou valorizar?",
    subtitle: "Selecione o ponto prioritário para o seu bem-estar hoje:",
    options: [
      { label: "Lábios e contorno com naturalidade", description: "Hidratação, volume sutil ou definição perfeita" },
      { label: "Rejuvenescimento, linhas de expressão e rugas", description: "Suavizar sinais do tempo com leveza" },
      { label: "Contorno mandibular e perfil definido", description: "Harmonia entre queixo, mandíbula e papada" },
      { label: "Harmonização facial completa e delicada", description: "Tratamento global para recuperar o viço e sustentação" },
    ],
  },
  {
    id: 3,
    question: "Qual é o seu maior receio ao pensar em estética?",
    subtitle: "Nossa prioridade número um é a sua tranquilidade emocional e física:",
    options: [
      { label: "Ficar artificial ou perder minha identidade", description: "Quero que continue sendo o meu rosto, apenas mais harmônico" },
      { label: "Sentir dor ou ter uma recuperação difícil", description: "Prefiro técnicas delicadas e confortáveis" },
      { label: "Produtos de baixa qualidade ou sem procedência", description: "Exijo segurança biológica comprovada" },
      { label: "Nenhum medo, procuro a profissional de confiança certa", description: "Já conheço e busco o método mais seguro" },
    ],
  },
  {
    id: 4,
    question: "O que é mais indispensável para você no atendimento?",
    subtitle: "O Método Vanessa Macedo foi desenhado para quem valoriza:",
    options: [
      { label: "Olhar individualizado que respeite meus traços únicos", description: "Sem fórmulas prontas de clínicas de massa" },
      { label: "Atendimento direto com a especialista e produtos premium", description: "Segurança total em cada detalhe" },
      { label: "Acompanhamento atencioso antes, durante e depois", description: "Ter com quem falar a qualquer momento" },
      { label: "Todas as opções acima com máxima excelência", description: "Busco uma experiência impecável" },
    ],
  },
];

// Helper to generate customized WhatsApp links
export function createWhatsAppLink(message?: string): string {
  const number = EXPERT_DATA.whatsappNumber;
  const defaultText = "Olá, Vanessa! Estive no seu site e gostaria de agendar uma primeira avaliação sem compromisso.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${number}?text=${text}`;
}

export function createQuizWhatsAppLink(answers: { question: string; answer: string }[]): string {
  let summary = `Olá, Dra. Vanessa Macedo! Concluí minha avaliação personalizada no seu site:\n\n`;
  answers.forEach((item, index) => {
    summary += `*${index + 1}. ${item.question}*\n👉 ${item.answer}\n\n`;
  });
  summary += `Gostaria de agendar minha avaliação com base no seu método exclusivo!`;
  return createWhatsAppLink(summary);
}
