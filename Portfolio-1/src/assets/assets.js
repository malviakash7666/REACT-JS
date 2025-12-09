import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile.avif";

import jobPortal from "../assets/jobPortal.png";
import food from "../assets/food-dileveriy.png"
import portfolio from "../assets/portfolio.png"
import ecommerce from "../assets/ecommerce.png"

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skill = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "javascript", "Tailwind"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Postman", "vscode"],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: ecommerce,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://e-commerce-saxl.vercel.app",

    code: "https://github.com/malviakash7666/E-commerce",
  },
  {
    title: "Food Dilevriy",
    description:
      "A modern and responsive food delivery web application built with React.js, offering seamless browsing of restaurants, easy menu selection, real-time cart updates, and fast checkout for a smooth ordering experience.",
    image: food,
    tech: ["React.js", "Tailwind CSS"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://quickbite-akash-app.netlify.app",
    code: "https://github.com/malviakash7666/Food_Dilevery",
  },
  {
    title: "Job find ",
    description:
      "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: jobPortal,
    tech: ["React.js", "express", "Mongodb", "Node.js"],
    icons: [FaReact, FaDatabase],
    demo: "https://job-find-app.netlify.app",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: portfolio,
    tech: ["", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://porofile-portfolio-akash.netlify.app",
    code: "https://github.com/malviakash7666/portfolio-full-stack",
  },
 
];

export const workData = [
  {
    role: "Full-Stack MERN Developer (Self-Projects)",
    company: "Personal Portfolio",
    duration: "2025 - Present",
    description:
      "Built multiple MERN stack projects including a job portal, food delivery app, e-commerce admin panel, and a hospital management system. Implemented authentication, dashboards, API integration, and cloud deployment using Vercel and Render.",
    color: "purple",
  },
  {
    role: "Frontend React Developer",
    company: "Self-Learning & Practice",
    duration: "2024 - 2025",
    description:
      "Developed responsive UIs using React.js, Redux Toolkit, Context API, and custom components. Improved skills by building real-world websites and improving error-handling, routing, and state management.",
    color: "pink",
  },
  {
    role: "Web Development Intern (Freelance Style Practice)",
    company: "Independent Work",
    duration: "2022 - 2023",
    description:
      "Designed and built small websites for practice, including portfolio layouts, todo apps, and mini projects. Strengthened fundamentals in HTML, CSS, JavaScript, and Git/GitHub while preparing for internship opportunities.",
    color: "blue",
  },
];

