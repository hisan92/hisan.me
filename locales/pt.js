export default {
  labels: {
    lang: 'Idioma',
    links: {
      home: 'Início',
      skills: 'Habilidades',
      about: 'Sobre',
      qna: 'P&R',
    },
    anchors: {
      whoami: 'Quem sou eu',
      skills: 'Minhas habilidades',
      about: 'Sobre este site',
      qna: 'Perguntas e Respostas',
    },
  },
  pages: {
    home: {
      greetingTitle: 'Olá, bem-vindo, pode me chamar de {0}.',
      greetingBody:
        'Sou desenvolvedor web, meu foco hoje é em frameworks Node.js. Gosto de música, paisagens, tecnologia e apoio a cultura OpenSource. Você pode se conectar comigo no {0} e {1}.',
    },
    skills: {
      technical: 'Conhecimentos técnicos',
      technologies: 'Outras tecnologias e frameworks',
      designPatterns: 'Design Patterns',
      agile: 'Metodologia Ágil',
    },
    about: {
      body:
        'A criação desse site tem como objetivo apresentar um cartão de visitas para que outras pessoas possam me conhecer. Caso tenha interesse, este site foi produzido usando as seguintes tecnologias: Git, Docker, Nuxt.js e está hospedado na nuvem da Amazon, usando o processo de CI e ECS. Gostou? Entre em contato, faça elogios ou críticas, todos são bem-vindos. Você pode visualizar o código-fonte em {0}.',
    },
  },
  route: {
    notFound: {
      title: 'Não encontrada',
      help:
        'A página que vc procura parece não existir, ou talvez vc seja um viajante do tempo!',
      back: 'Leve-me de volta à {0}.',
    },
  },
  questionsAndAnswers: {
    job: {
      question: 'Você trabalha atualmente?',
      answer:
        'Sim, sou empregado em um escritório de advocacia em período integral, nas horas vagas troco ideias com colegas a cerca de projetos, e também trabalho em projetos pessoais, como este site.',
    },
    area: {
      question: 'Por que você escolheu essa área?',
      answer:
        'Sempre gostei de tecnologia, e tive uma certa admiração por quem já trabalha na área, até que um dia tive a oportunidade de aprender programação. Hoje fiz dela minha atual profissão e paixão.',
    },
  },
}
