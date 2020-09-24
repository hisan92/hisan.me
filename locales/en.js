export default {
  labels: {
    lang: 'Language',
    links: {
      home: 'Home',
      skills: 'Skills',
      about: 'About me',
    },
  },
  pages: {
    home: {
      greetingTitle: 'Hi, my name is {0}, welcome to my personal website.',
      greetingBody:
        "Actually, I'm Web Developer, focusing in NodeJS Frameworks. I love music, landscapes, technology and I support OpenSource. You can contact me on {0} and {1}.",
    },
    skills: {
      technical: 'Technical Knowledge',
      technologies: 'More Technologies and Frameworks',
      designPatterns: 'Design Patterns',
      agile: 'Agile',
    },
    about: {
      body:
        'The main objective of this website is to show my vCard/Curriculum to all people around the world. Also, if you like this, some of technologies used to built this site are: Git, Docker, NuxtJS. You can contact me if you have any question. You can fork me on {0}.',
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
}
