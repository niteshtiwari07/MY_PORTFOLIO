export const personalInfo = {
  name: "Nitesh Tiwari",
  title: "Full Stack Developer",
  headline: "Building scalable, modern, and user-focused web applications.",
  phone: "+91-9341680955",
  shortBio: "Full Stack Developer with hands-on experience in React.js, Node.js, Express.js, and MongoDB. Skilled in building RESTful APIs, real-time applications, and responsive web interfaces.",
  longBio: "I am a Computer Science & Engineering student at Parul Institute of Technology (Parul University). Skilled in building RESTful APIs, real-time applications using Socket.IO, Generative AI applications, and responsive web interfaces. Strong understanding of DSA, DBMS, Object-Oriented Programming (OOP), Operating Systems, and Computer Networks. Passionate about developing scalable, user-centric software solutions.",
  status: "Open to opportunities",
  location: "Vadodara, Gujarat",
  email: "niteshtiwari0009@gmail.com",
  github: "https://github.com/niteshtiwari07",
  linkedin: "https://www.linkedin.com/in/nitesh-tiwari7/",
  leetcode: "https://leetcode.com/niteshtiwari07/",
  twitter: "https://twitter.com/niteshtiwari07",
  resumeUrl: "/resume.pdf", // Easily downloadable / previewable file path
  githubUsername: "niteshtiwari07",
};

export const aboutHighlights = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Designing end-to-end web applications with React on the frontend and Node.js/Express on the backend.",
    icon: "Layout",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "ai-realtime",
    title: "AI & Real-Time Systems",
    description: "Integrating Gemini Generative AI APIs and Socket.IO WebSockets for real-time messaging and adaptive AI workflows.",
    icon: "Cpu",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "rest-api",
    title: "REST API Development",
    description: "Architecting modular, secure RESTful services with JWT authentication, middleware, and optimized database queries.",
    icon: "Server",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "database",
    title: "Database Management",
    description: "Schema modeling using MongoDB, Mongoose, and relational databases like SQL with efficient indexing.",
    icon: "Database",
    color: "from-purple-500 to-pink-500"
  }
];

export const strengths = [
  "Scalable Full-Stack Web Architecture (MERN Stack)",
  "Real-Time Applications with Socket.IO & WebSockets",
  "Generative AI Integration (Gemini AI API)",
  "Core Computer Science Fundamentals (DSA, OOP, DBMS, OS, Networks)",
  "Clean API Design, JWT Authentication & Session Security"
];

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C / C++ (DSA)", level: "Strong Foundation", icon: "Binary" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "Python", level: "Proficient", icon: "Code" },
      { name: "SQL", level: "Proficient", icon: "Table" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "HTML5", level: "Advanced", icon: "Code" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Sparkles" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Proficient", icon: "Cpu" },
      { name: "RESTful APIs", level: "Advanced", icon: "Network" },
      { name: "JWT Auth", level: "Proficient", icon: "ShieldCheck" },
      { name: "Socket.IO", level: "Proficient", icon: "Zap" },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", level: "Proficient", icon: "Database" },
      { name: "Mongoose", level: "Proficient", icon: "Layers" },
    ]
  },
  {
    name: "Tools & Core Concepts",
    skills: [
      { name: "Git & GitHub", level: "Proficient", icon: "GitBranch" },
      { name: "Postman", level: "Proficient", icon: "Send" },
      { name: "Linux", level: "Proficient", icon: "Terminal" },
      { name: "Vercel & Render", level: "Proficient", icon: "Laptop" },
    ]
  }
];

export const projects = [
  {
    id: "mockbuddy",
    featured: true,
    title: "MockBuddy | AI Interview Preparation Platform",
    tagline: "Generative AI-Powered Candidate Preparation & Practice Platform",
    category: "Full Stack",
    badge: "Spotlight Project",
    shortDescription: "A Generative AI-based platform to assist users in job preparation, interview practice, resume suggestions, and adaptive learning recommendations.",
    problemSolved: "Candidates preparing for tech interviews lack personalized, real-time feedback on domain-specific questions, resume alignment, and technical responses.",
    whatIBuilt: "Architected a full-stack platform integrating Google Gemini AI with React.js and Node.js. Developed adaptive recommendation logic, AI prompt templates for interview question generation, and secure session management.",
    technologies: ["React.js", "Node.js", "Express.js", "Gemini AI", "MongoDB", "Tailwind CSS"],
    keyFeatures: [
      "Generative AI integration for generating dynamic interview questions and resume suggestions",
      "Adaptive recommendations and personalized AI-driven learning workflows",
      "Secure user authentication and session management for personalized dashboards",
      "Scalable full-stack architecture with modular RESTful APIs"
    ],
    githubUrl: "https://github.com/niteshtiwari07/Gen-Ai-prepration-platform",
    liveUrl: "https://mockbuddy-ai.vercel.app/",
    imageTheme: "from-cyan-900/60 via-slate-900 to-blue-950",
    stats: { AI: "Gemini AI", Stack: "Full-Stack MERN", Auth: "JWT" }
  },
  {
    id: "chatsup",
    featured: true,
    title: "ChatsUp | Real-Time Chat Application",
    tagline: "Full-Stack Messaging App with Presence Tracking & Image Sharing",
    category: "Full Stack",
    badge: "Featured",
    shortDescription: "A real-time chat platform supporting instant messaging, online/offline status tracking, media uploads, and dark/light UI themes.",
    problemSolved: "High-latency messaging and unoptimized WebSocket polling degrade user engagement in web chat applications.",
    whatIBuilt: "Engineered a low-latency chat engine using Socket.IO and WebSockets on Node.js/Express with MongoDB message persistence and Axios API optimization.",
    technologies: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "JWT", "Axios"],
    keyFeatures: [
      "Real-time communication using Socket.IO and WebSockets for low-latency delivery",
      "JWT-based authentication and online/offline presence tracking",
      "Instant messaging and media/image sharing support",
      "Responsive UI with light/dark theme support and optimized API communication using Axios"
    ],
    githubUrl: "https://github.com/niteshtiwari07/ChatsUp",
    liveUrl: "https://github.com/niteshtiwari07/ChatsUp",
    imageTheme: "from-blue-900/60 via-slate-900 to-indigo-950",
    stats: { RealTime: "Socket.IO", Latency: "<50ms", UI: "Dark/Light Theme" }
  },
  {
    id: "portfolio-website",
    featured: true,
    title: "Developer Portfolio Website",
    tagline: "High-Performance Glassmorphic Web App & Modern Design System",
    category: "Full Stack",
    badge: "Featured",
    shortDescription: "A modern developer portfolio featuring next-gen glassmorphism, responsive micro-interactions, dark mode aesthetics, and clean typography.",
    problemSolved: "Developers need a recruiters-friendly platform to showcase full-stack projects, real-time architectures, and credentials cleanly.",
    whatIBuilt: "Built a responsive single-page web app with React.js, Tailwind CSS, Lucide icons, and centralized configuration store.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "JavaScript"],
    keyFeatures: [
      "Next-Gen Glassmorphism design system with backdrop blur and vibrant text gradients",
      "Spotlight project showcase cards and deep-dive technical modals",
      "Centralized portfolio data store and responsive timeline layout"
    ],
    githubUrl: "https://github.com/niteshtiwari07/MY_PORTFOLIO",
    liveUrl: "https://github.com/niteshtiwari07/MY_PORTFOLIO",
    imageTheme: "from-indigo-900/60 via-slate-900 to-cyan-950",
    stats: { UI: "Tailwind CSS", Build: "Vite", Performance: "Fast" }
  },
  {
    id: "youtube-backend",
    featured: false,
    title: "YouTube Backend Infrastructure",
    tagline: "Production-Grade Media Streaming & Social Network API",
    category: "Backend",
    badge: "Backend",
    shortDescription: "A complete backend service modeling video streaming, user subscriptions, nested comments, custom middleware, and JWT authentication.",
    problemSolved: "Handling media uploads, refresh token rotation, and aggregate video view stats requires robust database indexing and async error handling.",
    whatIBuilt: "Architected Express.js REST application with MongoDB aggregation pipelines, Cloudinary upload middleware, and HTTP-only cookie JWT security.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Multer", "Cloudinary"],
    keyFeatures: [
      "Access & Refresh Token Authentication stored in HTTP-only cookies",
      "Video Upload & Thumbnail Management via Multer and Cloudinary",
      "MongoDB Aggregation Pipelines for subscriber counts and watch history"
    ],
    githubUrl: "https://github.com/niteshtiwari07/Youtube_backend",
    liveUrl: "https://github.com/niteshtiwari07/Youtube_backend#readme",
    imageTheme: "from-cyan-900/60 via-slate-900 to-blue-950",
    stats: { Endpoints: "25+", Architecture: "MVC", DB: "Mongoose" }
  }
];

export const timelineData = {
  education: [
    {
      id: "edu-1",
      period: "Jul 2023 – Present",
      title: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Parul Institute of Technology, Vadodara, Gujarat",
      description: "Studying Core Computer Science principles, Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, and SDLC.",
      highlights: [
        "Core Coursework: DSA, OOP, DBMS, OS, Computer Networks, Software Engineering",
        "Built full-stack real-time applications and AI-powered web platforms",
        "Active member of tech innovation and coding communities"
      ]
    },
    {
      id: "edu-2",
      period: "Higher Secondary Education",
      title: "Senior Secondary (12th Grade) - Science Stream",
      institution: "R.D.G High School",
      description: "Studied Mathematics, Physics, Chemistry, Hindi and English.",
      highlights: ["Strong foundational math & analytical problem solving skills"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      period: "2023 - Present",
      title: "Full Stack Software Developer (Projects & Open Source)",
      institution: "Independent Development",
      description: "Designing and deploying full-stack web applications, real-time Socket.IO systems, and Generative AI platforms.",
      highlights: [
        "Built MockBuddy AI Interview Preparation Platform using React, Node.js & Gemini AI",
        "Developed ChatsUp real-time chat application with Socket.IO & JWT authentication",
        "Engineered AI Event Organizer smart management portal with MongoDB"
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "Certified",
      link: "#"
    },
    {
      id: "cert-2",
      title: "Cloud Infrastructure: AWS Academy Graduate",
      issuer: "AWS Academy",
      date: "Certified",
      link: "#"
    },
    {
      id: "cert-3",
      title: "Cybersecurity: Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      link: "#"
    },
    {
      id: "cert-4",
      title: "Software Development: Modern Frontend Development",
      issuer: "Software Engineering Program",
      date: "Certified",
      link: "#"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Built MockBuddy AI Interview Platform",
      detail: "Integrated Google Gemini AI for automated interview question generation and personalized learning workflows."
    },
    {
      id: "ach-2",
      title: "Engineered Low-Latency ChatsUp System",
      detail: "Implemented Socket.IO WebSockets with JWT token auth and MongoDB message persistence."
    }
  ]
};

export const githubStats = {
  username: "niteshtiwari07",
  totalRepos: 20,
  contributionsThisYear: "450+",
  topLanguages: [
    { name: "JavaScript", percentage: 55, color: "#F7DF1E" },
    { name: "C++ / C", percentage: 25, color: "#00599C" },
    { name: "Python", percentage: 12, color: "#3572A5" },
    { name: "HTML / CSS", percentage: 8, color: "#E34F26" },
  ]
};
