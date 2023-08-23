import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  git,
  docker,
  pointclickcare,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  omnicell,
  lastlock,
  angular,
  aws,
  go,
  java,
  graphql,
  python,
  swift,
  kubernetes,
  mysql,
  net,
  redis,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
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
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },

  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Collaborated with the Cell 4680 team to design and implement net new features, significantly expedited processes by up to 60% and led to substantial enhancements in overall yield.",
      "Leveraged Go for backend development, React’s Recoil library for state management, and GraphQL for efficient data querying",
    ],
  },
  {
    title: "iOS Developer Intern",
    company_name: "PointClickCare",
    icon: pointclickcare,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developed new features and enhanced existing functionality for existing iOS app. Identified and resolved critical software bugs by conducting thorough analyses of customer feedback.",
      "Implemented compression techniques resulting in a 60% reduction of the app size, allowing for faster downloads and increased storage efficiency."
    ],
  },
  {
    title: "Software Engineer Intern, Capstone Project",
    company_name: "LastLock",
    icon: lastlock,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Developed an indoor navigation app using SwiftUI and Mapbox, providing real-time location tracking with a 95% accuracy rate.",
      "Integrated Ultra Wideband Services to accurately determine device locations and developed a dynamic path-finding algorithm."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Omnicell Inc.",
    icon: omnicell,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Worked as a Full-Stack Developer and optimized cross-browser & multi-platform compatibility of user interfaces.",
      "Developed Rest APIs using .Net Core and MVC architecture to create backend functions. Utilized Dapper ORM to optimize data access & storage operations.",
      "Integrated Rest API endpoints with the front-end using Angular & Typescript. Deployed automated unit tests to ensure high reliability of the web application.",
    ],
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
