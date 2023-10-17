import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  itlab,
  senior,
  parkmaia,
  uta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  mln,
  dashboard,
  secure,
  threejs,
  iot,
  poker,
  shakespear,
  supercore,
  plantways,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Node Developer",
    icon: backend,
  },
  {
    title: "Frontend React Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Flutter Develope",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: web,
  },
  {
    title: "Cybersecurity Engineer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Engineer",
    company_name:
      "UTA Senior Design Lab, Senior Design Project , Plantways Team",
    icon: uta,
    iconBg: "#0064B1",
    date: "Aug 2022 - May 2023",
    points: [
      "Collaborated with 4 members, shared knowledge, and contributed to sponsor’s requirements at UTA Senior Design Lab.",
      "Documented,blogged,and presented sprints, SDLC, project poster to sponsor and made informative YouTube video.",
      "Designed and built low power and latency serverless smart-planter IoT for real-time stream and optimized sensor data.",
      "Integrated with mobile app to notify and monitor plant’s environment to automate self-watering and refill feature.",
      "Adapted Agile, Git, and GitHub for CI/CD, deployed on MongoDB Realm, powered by Flutter and C++ following SDLC.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "UTA IT-Lab, REU , MLN Team",
    icon: uta,
    iconBg: "#0064B1",
    date: "July 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Node.js, Express.js and other related technologies like SAAS, Bootstrap 5, RESTful API, HTML, CSS, etc.",
      "Collaborating with cross-functional teams including researchers, professors, participating students, and other developers to create high-quality products for research commitments.",
      "Implementing dynamic as well as responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Integrating other developers codebase (FLASK, javascript's, React.js) and solving potential errors and faults in the programs by doing automatic testing.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "UTA Park-Mai Collab Lab, REU, Deep Learning Team",
    icon: uta,
    iconBg: "#0064B1",
    date: "Aug 2021 - Aug 2022",
    points: [
      "Collaborated with 4 members, shared knowledge, result and contributed on research study at UTA Park-Mai Collab Lab.",
      "Developed Shakespeare Character-level Language Model based of Karpathy’s Recurrent Neural Networks Character Model.",
      "Deep Learning Model was trained on Shakespeare’s literature for 2000 iteration with 96% accuracy.",
      "Powered by Google Cloud Collab, Python3, NumPy, PyTorch and Binary Cross-Entropy libraries to build the model.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as responsive as our research commitment, but Samrat proved me wrong.",
    name: "Pratik Dhakal",
    designation: "Research Assistant (REU)",
    company: " MLN Team, UTA-IT Lab",
    image: "src/assets/people/pratik.jpeg",
  },
  {
    testimonial:
      "I've never met a mobile developer who truly cares about their project success like Samrat does. Really Hardworking !! ",
    name: "Samuel J Ruiz",
    designation: "Senior Design, Plantways Team member",
    company: "Software Developer, Ben E. Keith Company",
    image: "/people/samuel.jpeg",
  },
  {
    testimonial:
      "After meet Samrat. He optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Amey Shinde",
    designation: "Founder",
    company: "Bizzence",
    image: "src/assets/people/amey.jpeg",
  },
  {
    testimonial:
      "He is always competitive on class and thank him enough i have again remarkable grade and great coding skills.",
    name: "Rhitu Thapa",
    designation: "Software Developer",
    company: "Mouser Technologies",
    image: "src/assets/people/rhitu.jpeg",
  },
  {
    testimonial:
      "Samrat always wrote clean code and successfully completed project in time sensitive time frame with 95% accurate result!",
    name: "Jason Bard",
    designation: "PhD Researcher on Park-Mai Collab Lab",
    company: "University of Texas at Arlington",
    image: "src/assets/people/jason.jpeg",
  },
];

const projects = [
  {
    name: "MLN Dashboard",
    description:
      "MultiLayer Network (MLN) Community Infrastructure for Data, Interaction, Visualization, and Software. This dashboard will allow sharing of data sets and algorithms and more importantly analysis of the data sets in easy interactive steps.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "SaaS",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/samratbaral/mln-dashboard-mongoose",
  },
  {
    name: "Plantways IoT",
    description:
      "Developed Flutter app using Dart, Flutter, and C++ for custom PCB Design for IoT planter that upload 5 sensory data to realm database (MongoDB). Enhance with animation and responsive design on UI/UX which ensure good user experience.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },
    ],
    image: plantways,
    source_code_link: "https://github.com/samratbaral/smartplanter-plantways",
  },
  {
    name: "Secure ID",
    description:
      "Developed design, document, test, write, and develop a project in flask framework, and mysql database. Implementing cryptography, steganography, Password generation and Hashing.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: secure,
    source_code_link: "https://github.com/samratbaral/secure",
  },
  {
    name: "Web Poker Game",
    description:
      "Designed a Texas Poker website for 2-5 players to play powered by Java, HTML, and CSS on Agile development CI/CD.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Threads",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "UML",
        color: "white-text-gradient",
      },
      {
        name: "J-Unit Testing",
        color: "green-text-gradient",
      },
    ],
    image: poker,
    source_code_link: "https://github.com/samratbaral/Poker",
  },
  {
    name: "Super Core",
    description:
      "Parallel Processing using C and MPI library. Visualized on graph, speed up vs no of processor, and communication vs no of processors using Pandas and Python3",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "MPI",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Python 3",
        color: "white-text-gradient",
      },
    ],
    image: supercore,
    source_code_link: "https://github.com/samratbaral/super-core-mpi",
  },
  {
    name: "Shakespeare Language Model",
    description:
      "Using Pytorch: Karpathy Character-level RNN language models on Shakespeare data. A language model to reproduce natural language like Shakespeare.",
    tags: [
      {
        name: "Python 3",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "Google Collab",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "white-text-gradient",
      },
    ],
    image: shakespear,
    source_code_link:
      "https://github.com/samratbaral/shakespeare-language-model",
  },
];

export { services, technologies, experiences, testimonials, projects };
