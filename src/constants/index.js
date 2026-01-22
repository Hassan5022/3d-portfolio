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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  paysys,
  riksof,
  sudofy,
  PMS,
  githubfinder,
  magicgame,
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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Integration",
    icon: backend,
  },
  {
    title: "Enterprise Web Applications",
    icon: mobile,
  },
  {
    title: "Fintech Solutions",
    icon: creator,
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
  {
    title: "Software Engineer",
    company_name: "Paysys Labs",
    icon: paysys, // replace with your Paysys icon
    iconBg: "#1f2937",
    date: "Jul 2024 - Present",
    points: [
      "Developing and enhancing enterprise-grade fintech applications using React.js, focusing on performance, scalability, and maintainability.",
      "Designed and implemented Product Management modules within OpenCMS for card and transaction management.",
      "Built modules including channel management, transaction setup, audit logging, fee management, courier configuration, and inventory management, with full CRUD operations.",
      "Worked closely with project managers using Jira to translate business requirements into technical solutions.",
      "Collaborated with backend and DevOps teams to ensure secure integrations and smooth deployments.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Paysys Labs",
    icon: paysys,
    iconBg: "#374151",
    date: "Apr 2023 - Jul 2024",
    points: [
      "Worked as a frontend-focused full-stack engineer using React.js, Node.js, Express.js, and SQL Server.",
      "Developed UI components for back-office and customer-facing fintech applications.",
      "Integrated payment systems with multiple gateways and core banking systems.",
      "Created and maintained RESTful APIs for e-payment portals and performed API testing for stability.",
      "Collaborated with DevOps teams for UAT and production deployments using Git-based workflows.",
    ],
  },
  {
    title: "Trainee Developer",
    company_name: "RIKSOF",
    icon: riksof,
    iconBg: "#111827",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Worked extensively with React.js to build intuitive and responsive user interfaces.",
      "Identified and fixed bugs to improve application performance and stability.",
      "Performed unit testing to ensure code quality and reliability.",
      "Collaborated closely with senior engineers to understand requirements and implement effective solutions.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Sudofy",
    icon: sudofy,
    iconBg: "#020617",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Developed React components from scratch based on provided UI designs.",
      "Enhanced existing applications by adding new features and improving performance.",
      "Built a doctor appointment web application with video consultation using WebRTC, Socket.io, and CORS.",
      "Worked on bug fixing, feature enhancements, and module development based on client requirements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project Management System",
    description:
      "A web-based project management application that allows users to create, track, and manage projects and tasks efficiently. Designed to streamline workflows with structured task organization, status tracking, and a clean, intuitive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "frontend-architecture",
        color: "green-text-gradient",
      },
      {
        name: "ui-design",
        color: "pink-text-gradient",
      },
    ],
    image: PMS,
    source_code_link: "https://project-management-site.vercel.app/login",
  },
  {
    name: "GitHub Finder",
    description:
      "A frontend application that allows users to search GitHub profiles and view detailed information including repositories, followers, and activity. Built with API integration and optimized for fast search and responsive layout, with efficient state management and clear data presentation for a smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "github-api",
        color: "pink-text-gradient",
      },
    ],
    image: githubfinder,
    source_code_link: "https://hassan5022.github.io/Github-Finder/",
  },
  {
    name: "Magic Memory Game",
    description:
      "An interactive memory game consisting of 12 cards arranged in a 4x3 grid. Players flip cards to find matching pairs and aim to complete the game in the fewest possible turns, focusing on logic, state management, and smooth user interaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "state-management",
        color: "green-text-gradient",
      },
      {
        name: "interactive-ui",
        color: "pink-text-gradient",
      },
    ],
    image: magicgame,
    source_code_link: "https://react-magic-game.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
