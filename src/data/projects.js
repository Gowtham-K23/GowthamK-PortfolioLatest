const projectGroups = [
  {
    id: "fullstack",
    title: "Full Stack",
    blurb: "End-to-end apps: interface, APIs and database",
    projects: [
      {
        name: "TaskFlow",
        tagline: "SaaS Project & Team Management Platform",
        stack: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "Spring Security (JWT)", "MySQL", "REST APIs"],
        bullets: [
          "Built a full-stack SaaS platform with role-based access across 11+ modules and 40+ REST endpoints, enabling secure multi-tenant workspaces for Project Managers and Team Members.",
          "Developed a drag-and-drop Kanban board with 4-stage task transitions, cutting manual status-update overhead by an estimated 60% over spreadsheet tracking.",
          "Designed a dashboard analytics engine aggregating data across 7 relational entities, giving instant visibility into sprint progress, team performance, and delayed tasks.",
        ],
        github: "https://github.com/Gowtham-K23/Taskflow-Project-Management",
      },
      {
        name: "CareerLy",
        tagline: "Job Application Tracking Platform",
        stack: ["React.js", "Tailwind CSS", "Java", "Spring Boot", "MySQL", "Docker", "Nginx"],
        bullets: [
          "Built a full-stack job tracking platform with 7 REST APIs for CRUD operations, search, filtering, interview, and offer tracking.",
          "Developed a responsive React dashboard with 5 core views, centralized application management, and real-time analytics for faster tracking.",
          "Containerized the React, Spring Boot, and MySQL stack using Docker Compose, enabling consistent setup and one-command deployment.",
        ],
        github: "https://github.com/Gowtham-K23/job-application",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "Spring Boot REST services on relational data",
    projects: [
      {
        name: "Subscription Management & Billing Platform",
        tagline: null,
        stack: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "Maven", "Postman", "Git", "GitHub"],
        bullets: [
          "Built a layered Spring Boot backend with 5 core modules and 15+ REST APIs for users, plans, subscriptions, invoices, and payments.",
          "Designed JPA/Hibernate relational workflows with 7+ entities, DTOs, validation, centralized exception handling, and transactional business logic.",
          "Implemented subscription lifecycle and billing workflows with 4 subscription states, automated expiry checks, invoice generation, and duplicate-payment prevention.",
        ],
        github: "https://github.com/Gowtham-K23/subscription-management-system",
      },
      {
        name: "Hotel Management System",
        tagline: "RESTful Backend Application",
        stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Lombok", "Postman"],
        bullets: [
          "Developed a RESTful hotel management backend supporting 3 core entities—Hotels, Rooms, and Bookings with complete CRUD operations.",
          "Designed JPA-based entity relationships to connect multiple rooms per hotel and bookings to specific rooms, enabling structured database operations.",
          "Implemented and tested API workflows for hotel, room, and booking management using Spring Boot and Postman with persistent database support.",
        ],
        github: "https://github.com/Gowtham-K23/Hotel_Management_System",
      },
      {
        name: "ProductStore",
        tagline: "E-Commerce CRUD Application",
        stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Maven", "Postman"],
        bullets: [
          "Developed a RESTful e-commerce backend managing 3 core entities—Products, Customers, and Orders with complete CRUD operations.",
          "Implemented a clean Controller–Service–Repository architecture using Spring Boot and Spring Data JPA for modular business logic and database operations.",
          "Added validation and error handling for data consistency, with REST endpoints tested through Postman and persistent storage using MySQL/H2.",
        ],
        github: "https://github.com/Gowtham-K23/Product_Store",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Responsive interfaces, from React apps to plain HTML/CSS",
    projects: [
      {
        name: "Cookify",
        tagline: "Automated Leftover Recipe Generator",
        stack: ["React.js", "Tailwind CSS", "React Router", "Framer Motion"],
        bullets: [
          "Built a rule-based recipe recommendation platform supporting 10 leftover categories and 25+ recipe variations through a structured selection workflow.",
          "Implemented dynamic 3-step filtering where leftover selection determines available food preferences and recipe options using React state management.",
          "Developed a responsive 3-page user journey with reusable recipe data, animated route transitions, and Tailwind-based UI for a smooth experience.",
        ],
        github: "https://github.com/Gowtham-K23/Cookify-Website",
      },
      {
        name: "Professional Portfolio",
        tagline: "Client Portfolio Website",
        stack: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Git", "GitHub", "Vercel"],
        bullets: [
          "Developed a responsive client-centric portfolio website showcasing services, skills, projects, career history, resume, and contact information across desktop and mobile screens.",
          "Built reusable React-based sections with Tailwind CSS, creating a structured navigation flow and consistent UI focused on usability and clear content presentation.",
          "Managed the project with Git/GitHub and deployed the production-ready application on Vercel, making the portfolio publicly accessible through a live web URL.",
        ],
        github: "https://github.com/Gowtham-K23/Portfolio-Jaya-Kumar",
      },
      {
        name: "Portfolio Website",
        tagline: "Interactive Developer Portfolio",
        stack: ["React.js", "Tailwind CSS", "Vite", "Lucide React"],
        bullets: [
          "Built a responsive developer portfolio with 9+ reusable React components, covering hero, about, education, skills, projects, certificates, contact, and footer sections.",
          "Implemented interactive features including dark/light theme switching, animated navigation, certificate carousel, project cards, and scroll-to-top navigation.",
          "Showcased 5 featured projects and 10 certifications with technology details, GitHub links, contact actions, and deployed the application on Vercel.",
        ],
        github: "https://github.com/Gowtham-K23/GowthamK-Portfolio",
      },
      {
        name: "Travel Agency",
        tagline: "Travel Package Website",
        stack: ["HTML", "CSS", "Vercel"],
        bullets: [
          "Developed a travel agency website featuring 10+ travel sections covering Indian regions, international destinations, galleries, packages, and contact information.",
          "Designed structured sections for 5+ package categories, including bachelor, educational, family, honeymoon, and wedding trips.",
          "Implemented a navigation-focused frontend with destination galleries and deployed the website on Vercel for public access.",
        ],
        github: "https://github.com/Gowtham-K23/Travel-Agency",
      },
    ],
  },
];

export default projectGroups;