export default {
  labels: {
    lang: 'Idioma',
    links: {
      home: 'Início',
      skills: 'Habilidades',
      about: 'Sobre',
      qna: 'Curiosidades',
    },
    anchors: {
      whoami: 'Quem sou eu',
      skills: 'Minhas habilidades',
      about: 'Sobre este site',
      qna: 'Curiosidades',
    },
  },
  pages: {
    home: {
      greetingTitle: 'Olá, bem-vindo, pode me chamar de {0}.',
      greetingBody:
        'Sou desenvolvedor de software brasileiro. Meu foco hoje é em sistemas web e frameworks Node.js. Adoro música dos mais variados tipos, paisagens, tecnologia e apoio a cultura Open-source. Você pode se conectar comigo em {0} e {1}.',
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
        'Sim, sou empregado em uma empresa de engenharia civil em período integral. Nas horas vagas troco ideias com colegas a cerca de projetos, e também trabalho em projetos pessoais, como este site.',
    },
    area: {
      question: 'Por que você escolheu essa área?',
      answer:
        'Sempre gostei de tecnologia, e tive uma certa admiração por quem já trabalha na área, até que um dia tive a oportunidade de aprender programação. Hoje fiz dela minha atual profissão e paixão.',
    },
    tech: {
      question: 'Pode falar mais sobre as tecnologias deste site?',
      answer:
        'Claro! Mas caso queira se aprofundar mais nesse assunto, você pode visitar o repositório no Github e entender melhor seu funcionameto. Então, basicamente é feito através do framework Nuxt.js que funciona com Vue. Além disso foi utilizado TailwindCSS, FontAwesome, interpretador Pug, pré-processador Sass, pós-processadores de CSS (PurgeCSS) e TypeScript.',
    },
  },
}
