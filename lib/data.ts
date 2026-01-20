// Portfolio data - easy to update
export const personalInfo = {
  name: "Luis Dario",
  title: "Full Stack Developer",
  tagline: "I build accessible, pixel-perfect digital experiences for the web.",
  email: "hello@luisdario.dev",
  location: "San Francisco, CA",
  bio: `I'm a passionate developer with 5+ years of experience building web applications. 
  I specialize in creating modern, responsive, and accessible user interfaces using React and Next.js.
  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
  or enjoying a good cup of coffee.`,
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "Figma", "VS Code"],
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/ecommerce-dashboard-with-products.jpg",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization and natural language processing.",
    image: "/task-manager-app-interface.jpg",
    tech: ["React", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Chat App",
    description: "Scalable chat application with WebSocket support, file sharing, and end-to-end encryption.",
    image: "/chat-messaging-app-interface.jpg",
    tech: ["React", "Socket.io", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Finance Tracker",
    description:
      "Personal finance management app with budget tracking, expense categorization, and visual spending insights.",
    image: "/finance-budget-tracker-dashboard.jpg",
    tech: ["Next.js", "Chart.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts.",
    image: "/weather-app-dashboard-forecast.jpg",
    tech: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "Unified dashboard to manage and analyze multiple social media accounts with scheduling and analytics.",
    image: "/social-media-analytics-dashboard.jpg",
    tech: ["Next.js", "Twitter API", "Meta API", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 7,
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time updates and customizable widgets.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tech: ["Next.js", "D3.js", "GraphQL", "AWS"],
    github: "https://github.com",
    featured: false,
  },
]

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    companyUrl: "https://example.com",
    period: "2022 — Present",
    description:
      "Lead development of customer-facing applications using React and Next.js. Implemented design systems and improved performance by 40%.",
    tech: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    period: "2020 — 2022",
    description:
      "Built and maintained multiple web applications from scratch. Collaborated with designers and product managers to deliver features.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    period: "2019 — 2020",
    description:
      "Developed responsive websites for clients across various industries. Gained experience in agile methodologies.",
    tech: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
  },
]

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]
