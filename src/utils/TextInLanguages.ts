export interface ContentType {
  [key: string]: {
    navbar: {
      navlinks: { name: string; anchor: string }[];
    };
    home: {
      homeiam: string;
      homeme: string;
    };
    skills: { sectiontitle: string };
    projects: { sectiontitle: string };
    about: {
      sectiontitle: string;
      timeline: { date: string; periode: string; timecontent: string }[];
      cover: { firstpart: string; secondpart: string; thirdpart: string };
    };
    contact: {
      sectiontitle: string;
      message: {
        firstpart: string;
        secondpart: string;
      };
      formelement: {
        name: string;
        email: string;
        subject: string;
        message: string;
        send: string;
      };
    };
  };
  en: {
    navbar: {
      navlinks: { name: string; anchor: string }[];
    };
    home: {
      homeiam: string;
      homeme: string;
    };
    skills: { sectiontitle: string };
    projects: { sectiontitle: string };
    about: {
      sectiontitle: string;
      timeline: { date: string; periode: string; timecontent: string }[];
      cover: { firstpart: string; secondpart: string; thirdpart: string };
    };
    contact: {
      sectiontitle: string;
      message: {
        firstpart: string;
        secondpart: string;
      };
      formelement: {
        name: string;
        email: string;
        subject: string;
        message: string;
        send: string;
      };
    };
  };
}

const CONTENT: ContentType = {
  fr: {
    navbar: {
      navlinks: [
        { name: "accueil", anchor: "home" },
        { name: "compétences", anchor: "technologies" },
        { name: "réalisations", anchor: "projects" },
        { name: "à propos", anchor: "experience" },
        { name: "contact", anchor: "contact" },
      ],
    },
    home: {
      homeiam: "Salut, je suis",
      homeme: "Une personne passionnée avec de grandes idées.",
    },
    skills: { sectiontitle: "mes compétences" },
    projects: { sectiontitle: "mes réalisations" },
    about: {
      sectiontitle: "à propos de moi",
      timeline: [
        {
          date: "2020",
          periode: "2019 - 2020",
          timecontent: "Obtention de mon baccalauréat scientifique.",
        },
        {
          date: "2021",
          periode: "2021 - 2023",
          timecontent:
            "Intégration des classes préparatoires dans une école d'ingénieur généraliste avec exploration des notions tels que les mathématiques, l'électricité, la mécanique et la programmation.",
        },
        {
          date: "2023",
          periode: "Aujourd'hui",
          timecontent:
            "Actuellement en première année de cycle ingénieur. Continuité des programmes généralistes. Découverte de la modélisation orientée objet et des bases de données.",
        },
        {
          date: "Futur",
          periode: "",
          timecontent:
            "Souhaite travailler avec des personnes motivées afin d'apporter des solutions concrètes et utiles aux problèmes exprimés.",
        },
      ],
      cover: {
        firstpart: "Je me suis toujours posé des questions sur le monde qui m'entoure. Très tôt, je voulais comprendre le sens de la vie, l'origine de l'univers et la place de l'homme dans tout cela. J'ai vite compris que ces questions me dépassaient, mais une chose m'était sûre : il fallait que je trouve ma place.",
        secondpart: "Je me suis alors découvert une passion pour les activités nécessitant de la réflexion. Cette soif de compréhension m'a naturellement conduit à plonger dans le monde de la programmation et du développement. En explorant les langages informatiques, j'ai trouvé un moyen de donner forme à mes idées, de résoudre des problèmes et de créer quelque chose de tangible à partir de l'abstrait de ma pensée.",
        thirdpart: "Aujourd’hui, avec le développement de nouvelles technologies, notamment de l’intelligence artificielle, mon regard se dirige vers l’avenir et se focalise plus sur l’utilisation de ces technologies dans la création d'outils et de solutions capablent de transformer notre quotidien."
      },
    },
    contact: {
      sectiontitle: "contactez-moi",
      message: {
        firstpart: "Je suis disponible. Si vous avez des questions, des projets intéressants ou simplement envie de prendre contact, n'hésitez pas à me contacter. Je suis ouvert aux collaborations, aux opportunités professionnelles (offre de stage/emploi) et aux discussions sur la science, la technologie ou tout autre sujet passionnant.",
        secondpart: "Vous pouvez me joindre par email, par mes réseaux ou en utilisant directement le formulaire."
      },
      formelement: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer",
      },
    },
  },
  en: {
    navbar: {
      navlinks: [
        { name: "home", anchor: "home" },
        { name: "skills", anchor: "technologies" },
        { name: "projects", anchor: "projects" },
        { name: "about", anchor: "experience" },
        { name: "contact", anchor: "contact" },
      ],
    },
    home: {
      homeiam: "Hello, I am",
      homeme: "A passionate person with big ideas.",
    },
    skills: { sectiontitle: "my skills" },
    projects: { sectiontitle: "my projects" },
    about: {
      sectiontitle: "about me",
      timeline: [
        {
          date: "2020",
          periode: "2019 - 2020",
          timecontent: "Obtaining my scientific baccalaureate.",
        },
        {
          date: "2021",
          periode: "2021 - 2023",
          timecontent:
            "Integration of preparatory classes in a general engineering school with exploration of concepts such as mathematics, electricity, mechanics and programming.",
        },
        {
          date: "2023",
          periode: "Today",
          timecontent:
            "Currently in the first year of the engineering cycle. Continuity of general programs. Discovery of object-oriented modeling and databases.",
        },
        {
          date: "Future",
          periode: "",
          timecontent:
            "Want to work with motivated people in order to provide concrete and useful solutions to the problems expressed.",
        },
      ],
      cover: {
        firstpart: "I have always asked myself questions about the world around me. Very early on, I wanted to understand the meaning of life, the origin of the universe and man's place in all of this. I quickly understood that these questions were beyond me, but one thing was certain to me: I had to find my place.",
        secondpart: "I then discovered a passion for activities requiring reflection. This thirst for understanding naturally led me to dive into the world of programming and development. By exploring computer languages, I found a way to give shape to my ideas, solve problems, and create something tangible from the abstract of my thinking.",
        thirdpart: "Today, with the development of new technologies and tools, particularly artificial intelligence, my eyes are looking towards the future and focusing more on the use of these technologies to improve our living conditions."
      }
    },
    contact: {
      sectiontitle: "contact me",
      message: {
        firstpart: "I am available. If you have any questions, interesting projects or simply want to get in touch, do not hesitate to contact me. I am open to collaborations, professional opportunities (internship/job offer) and discussions on science, technology or any other exciting subject.",
        secondpart: "You can contact me by email, through my networks or by using the form directly."
      },
      formelement: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
      },
    },
  },
}
  ;

export default CONTENT;
