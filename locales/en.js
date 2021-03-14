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
        "I'm an brazillian Software Developer, and I have been focusing in website development and Node.js Frameworks. I love music, landscapes, technology and support Open-source. You can find me on {0} and {1}.",
    },
    skills: {
      technical: 'Technical Knowledge',
      technologies: 'More Technologies and Frameworks',
      designPatterns: 'Design Patterns',
      agile: 'Agile',
    },
    about: {
      body:
        "The objective of this site is to show my vCard to others persons around the world. If you are interested, this site was built with: Git, Docker, Nuxt.js and is hosted on Amazon Cloud, using CI and automatic deploy with Github Actions. Contact me if you have any question. Checkout this project on {0}, I'll apreciate your PR.",
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
      question: 'Are you employed?',
      answer:
        "Year, I'm working in a civil engineering company at full time. When I'm not busy, I like to talk with friends about ideas and projects. And I work in personal projects, like this site.",
    },
    area: {
      question: 'Why did you choose become a developer?',
      answer: 'I always liked technology, and I had a certain admiration for those who already work on it. One day I had the chance to learn programming. Today I made it my current profession and passion.',
    },
    tech: {
      question: 'Can you talk more about this site?',
      answer:
        "Sure! But if you want know more deeply, then I recommend you to visit the Github repository and undestand how this work. So, basicaly this site is built with Nuxt.js, it's Vue. Futhermore, it uses TailwindCSS, FontAwesome, Pug, Sass, PurgeCSS and TypeScript.",
    },
  },
}
