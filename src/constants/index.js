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
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
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
      title: "Web Developer",
      company_name: "UTA IT-Lab, REU , MLN Team",
      icon: itlab,
      iconBg: "#E6DEDD",
      date: "July 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using Node.js, Express.js and other related technologies like SAAS, Bootstrap 5, RESTful API, HTML, CSS, etc.",
        "Collaborating with cross-functional teams including researchers, professors, participating students, and other developers to create high-quality products for research commitments.",
        "Implementing dynamic as well as responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Integrating other developers codebase (FLASK, javascript's, React.js) and solving potential errors and faults in the programs by doing automatic testing.",
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
      image: "",
    },
    {
      testimonial:
        "I've never met a mobile developer who truly cares about their project success like Samrat does. Really Hardworking !! ",
      name: "Samuel J Ruiz",
      designation: "Senior Design, Plantways Team member",
      company: ".NET Developer, Charles Schwab",
      image: "",
    },
    {
      testimonial:
        "After meet Samrat. He optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Amey Shinde",
      designation: "Founder",
      company: "Bizzence",
      image: "",
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
      image: iot,
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
      source_code_link: "https://https://github.com/samratbaral/secure",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
