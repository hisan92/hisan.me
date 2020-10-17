export default {
  labels: {
    lang: 'Language',
    links: {
      home: 'Home',
      skills: 'Skills',
      about: 'About',
      qna: 'Q&A',
    },
    anchors: {
      whoami: 'Who Am I',
      skills: 'My skills',
      about: 'About this site',
      qna: 'Questions and Answers',
    },
  },
  pages: {
    home: {
      greetingTitle: 'Hi, welcome. You can call me {0}.',
      greetingBody:
        "I'm Web Developer, and I have been focusing in Node.js Frameworks. I like music, landscapes, technology and support OpenSource. You can find me on {0} and {1}.",
    },
    skills: {
      technical: 'Technical Knowledge',
      technologies: 'More Technologies and Frameworks',
      designPatterns: 'Design Patterns',
      agile: 'Agile',
    },
    about: {
      body:
        'The objective of this site is to show my vCard to others persons around the world. If you are interested, this site was built with: Git, Docker, Nuxt.js and is hosted on Amazon Cloud, using CI and ECS proccesses. Contact me if you have any question. You can fork me at {0}.',
    },
  },
  route: {
    notFound: {
      title: 'Not Found',
      help:
        "The page you're looking for seems not exist, or maybe you're a time traveler!",
      back: 'Go back for {0}.',
    },
  },
  questionsAndAnswers: {
    job: {
      question: '<missing translation>',
      answer: '<missing translation>',
    },
    area: {
      question: '<missing translation>',
      answer: '<missing translation>',
    },
  },
}
