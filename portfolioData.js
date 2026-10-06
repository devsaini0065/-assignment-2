/**
 * Dev Saini - Personal Portfolio Data
 * Roll No: 26BCON2090 | 1st Year B.Tech CSE Student
 * JECRC University, Jaipur, Rajasthan, India
 * 
 * NOTE FOR DEV: You can edit and customize all your portfolio content,
 * project links, social URLs, and achievements directly in this file.
 */

export const personalInfo = {
  name: "Dev Saini",
  role: "26BCON2090 B.Tech Student",
  rollNo: "26BCON2090",
  academicYear: "1st Year",
  degree: "B.Tech Computer Science & Engineering",
  college: "JECRC University",
  collegeLocation: "Jaipur, Rajasthan, India",
  email: "dev008524@gmail.com",
  status: "1st Year B.Tech CSE Student • JECRC University",
  headline: "B.Tech Student | AI & Technology Enthusiast",
  intro: "I am a first-year Computer Science & Engineering student at JECRC University, Jaipur, passionate about learning programming, artificial intelligence, web development, and digital productivity.",
  about: `I am a B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects.

Driven by curiosity and a problem-solving mindset, I focus on combining strong computer science fundamentals with hands-on development. Whether exploring modern web frameworks, experimenting with intelligent AI tools, or optimizing personal workflows, my goal is to build impactful solutions and grow continuously as a technology enthusiast.`,
  // Social links (Open in new tabs)
  socials: {
    github: "https://github.com/devsaini0065",
    githubDisplay: "GitHub – devsaini0065",
    linkedin: "https://www.linkedin.com/in/dev-saini-a9144242b",
    linkedinDisplay: "Dev Saini – JECRC University – Jaipur, Rajasthan, India | LinkedIn",
    email: "mailto:dev008524@gmail.com",
  },
  stats: [
    { label: "Academic Program", value: "B.Tech CSE" },
    { label: "Year of Study", value: "1st Year" },
    { label: "University", value: "JECRC" },
    { label: "Location", value: "Jaipur, IN" },
  ]
};

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  stream: "Computer Science & Engineering",
  studentId: "26BCON2090",
  institution: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  duration: "2026 - 2030 (1st Year)",
  status: "Currently Pursuing • 1st Year",
  description: "Pursuing foundational and modern computer science coursework, software development fundamentals, algorithms, web technologies, and artificial intelligence at JECRC University, Jaipur.",
  learningAreas: [
    {
      title: "Programming Fundamentals",
      desc: "Problem solving, algorithmic thinking, control structures, and code modularity.",
      icon: "Binary",
      status: "Active Learning"
    },
    {
      title: "Modern Web Development",
      desc: "Responsive web layouts, HTML5 semantics, modern CSS/Tailwind, JavaScript ES6+, and React component architecture.",
      icon: "Layout",
      status: "Practical Projects"
    },
    {
      title: "Artificial Intelligence & GenAI",
      desc: "Foundational AI principles, machine learning concepts, generative AI tools, and prompt engineering.",
      icon: "Cpu",
      status: "Exploration"
    },
    {
      title: "Data Structures & Problem Solving",
      desc: "Core computational thinking, arrays, lists, recursion, and space-time efficiency.",
      icon: "Database",
      status: "Foundation"
    },
    {
      title: "Digital Productivity & Developer Tooling",
      desc: "Version control with Git & GitHub, workflow automation, modern IDEs, and study sprint optimization.",
      icon: "Zap",
      status: "Applied Daily"
    },
    {
      title: "Professional Communication & Teamwork",
      desc: "Technical presentation skills, collaborative development, documentation, and agile team mindset.",
      icon: "Sparkles",
      status: "Continuous Growth"
    }
  ]
};

export const skillsData = [
  {
    name: "HTML",
    category: "Web Development",
    level: "Core Foundation",
    description: "Semantic HTML5 markup, web accessibility best practices (a11y), clean document structure, and modern web standards.",
    tags: ["HTML5", "Semantic Markup", "Accessibility", "Forms & Structure"],
    icon: "Code"
  },
  {
    name: "CSS",
    category: "Web Development",
    level: "Styling & UI",
    description: "Modern CSS3 styling, Flexbox, CSS Grid, Tailwind CSS utility-first framework, responsive layouts, and UI transitions.",
    tags: ["CSS3", "Tailwind CSS", "Flexbox & Grid", "Responsive Design"],
    icon: "Palette"
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: "Dynamic Frontend",
    description: "Modern ES6+ syntax, asynchronous programming (Promises, Async/Await), DOM manipulation, and interactive client-side logic.",
    tags: ["ES6+", "Async/Await", "DOM APIs", "Event-Driven UI"],
    icon: "Terminal"
  },
  {
    name: "Python",
    category: "Programming",
    level: "Core & Scripting",
    description: "Python programming syntax, object-oriented concepts, algorithmic problem solving, scripting, and data manipulation.",
    tags: ["Python 3", "Problem Solving", "OOP Basics", "Scripting"],
    icon: "FileCode"
  },
  {
    name: "Artificial Intelligence",
    category: "AI & Technology",
    level: "Concepts & Application",
    description: "Foundational understanding of artificial intelligence, intelligent systems, machine learning pipelines, and real-world tech integration.",
    tags: ["AI Fundamentals", "Intelligent Systems", "Model Concepts", "Applied AI"],
    icon: "Cpu"
  },
  {
    name: "Generative AI",
    category: "AI & Technology",
    level: "Workflows & Tooling",
    description: "Prompt engineering, leveraging Large Language Models (LLMs), AI-assisted software development, and generative productivity tools.",
    tags: ["LLMs", "Prompt Engineering", "AI Productivity", "Generative Tools"],
    icon: "Sparkles"
  },
  {
    name: "Web Development",
    category: "Full Stack",
    level: "Modern Development",
    description: "Developing modern, clean, responsive Single Page Applications (SPAs) with React, Vite, reusable components, and Tailwind styling.",
    tags: ["React", "Vite", "Component Architecture", "Single Page Apps"],
    icon: "Globe"
  },
  {
    name: "Digital Productivity",
    category: "Workflows",
    level: "Systems & Optimization",
    description: "Git & GitHub version control, workflow automation, modern developer tooling, structured study sprints, and digital efficiency.",
    tags: ["Git & GitHub", "Workflow Optimization", "Tooling", "Task Systems"],
    icon: "Zap"
  }
];

export const projectsData = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    badge: "Featured Project",
    category: "Web Development",
    shortDescription: "A modern, responsive personal portfolio website showcasing education, skills, projects, and achievements with sleek dark glassmorphism.",
    fullDescription: "Designed and engineered from scratch to present academic milestones and software projects. Features modular React components, smooth scrolling navigation with active section detection, responsive mobile layout, and zero-overhead performance tailored for instant Vercel deployment.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript ES6+", "Lucide Icons"],
    highlights: [
      "100% responsive design tested across mobile, tablet, and desktop viewports",
      "Interactive section navigation with smooth scrolling and active state tracking",
      "Modern dark UI with glassmorphism effects and clean typography",
      "Organized codebase ready for live deployment on Vercel"
    ],
    // Update live demo URL when deployed
    demoUrl: "#",
    githubUrl: "https://github.com/devsaini0065",
  },
  {
    id: "ai-website-project",
    title: "AI Website Project",
    badge: "AI Powered",
    category: "Artificial Intelligence",
    shortDescription: "An intelligent web application exploring generative AI capabilities with an intuitive frontend interface for interactive responses.",
    fullDescription: "A technology project focused on exploring how artificial intelligence can be integrated into web applications. Combines an intuitive, modern user interface with AI prompts to provide smart suggestions, dynamic summaries, and interactive assistance.",
    technologies: ["Python", "Generative AI", "JavaScript", "HTML/CSS", "AI Tooling"],
    highlights: [
      "Interactive user interface designed for prompt-based workflows",
      "Explores integration between frontend interfaces and AI models",
      "Clean user feedback and responsive query handling",
      "Structured with modular code for future expansions"
    ],
    // Update live demo URL when deployed
    demoUrl: "#",
    githubUrl: "https://github.com/devsaini0065",
  },
  {
    id: "student-productivity-project",
    title: "Student Productivity Project",
    badge: "Productivity",
    category: "Productivity & Web",
    shortDescription: "A digital productivity system designed for B.Tech students to track assignments, organize study sprints, and manage daily deadlines.",
    fullDescription: "Developed to address the daily academic workflow needs of engineering students. Provides task organization, sprint time management, priority tags, and clean distraction-free user experience to boost academic focus and productivity.",
    technologies: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Local Storage", "Productivity Systems"],
    highlights: [
      "Daily study sprint organization and milestone tracking",
      "Category and priority management for B.Tech assignments",
      "Persistent state in browser local storage without complex database requirements",
      "Minimalist, high-focus interface designed for students"
    ],
    // Update live demo URL when deployed
    demoUrl: "#",
    githubUrl: "https://github.com/devsaini0065",
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Developing Programming Skills in C and C++",
    category: "Courses",
    organization: "Computer Science Foundations",
    date: "Current Focus",
    description: "Strengthening core programming fundamentals, syntax, algorithmic logic, and memory concepts to tackle complex problem solving.",
    badge: "Core Programming"
  },
  {
    id: 2,
    title: "Building Practical Web Development Projects",
    category: "Courses",
    organization: "Applied Software Engineering",
    date: "Active Practice",
    description: "Successfully built and deployed responsive web projects including a Personal Portfolio Website, AI Web explorations, and Student Productivity tools.",
    badge: "Web Projects"
  },
  {
    id: 3,
    title: "Improved Communication Skills",
    category: "Other achievements",
    organization: "Professional Growth",
    date: "Continuous",
    description: "Actively enhancing verbal and written technical communication to articulate software architecture and ideas clearly.",
    badge: "Soft Skills"
  },
  {
    id: 4,
    title: "Improved Teamwork & Collaborative Mindset",
    category: "Other achievements",
    organization: "Collegiate Environment",
    date: "Continuous",
    description: "Collaborating with fellow engineering students on pair programming, study sprints, and academic group initiatives.",
    badge: "Collaboration"
  },
  {
    id: 5,
    title: "Improved Presentation Skills",
    category: "Other achievements",
    organization: "Academic Seminars",
    date: "Continuous",
    description: "Developing confident technical speaking and presentation skills to explain programming solutions and project milestones effectively.",
    badge: "Presentation"
  },
  {
    id: 6,
    title: "Continuously Learning New Technologies",
    category: "Certifications",
    organization: "Self-Paced Tech Mastery",
    date: "Ongoing",
    description: "Dedicated to exploring emerging tools, generative AI applications, modern web frameworks, and developer productivity workflows.",
    badge: "Continuous Learning"
  },
  {
    id: 7,
    title: "B.Tech Computer Science & Engineering Enrollment",
    category: "Awards",
    organization: "JECRC University, Jaipur",
    date: "2026 - Present",
    description: "Active undergraduate engineering student (Roll No: 26BCON2090), maintaining strong academic focus and technical curiosity.",
    badge: "Academic"
  },
  {
    id: 8,
    title: "Collegiate Hackathon & Coding Participation",
    category: "Hackathons",
    organization: "University Tech Events",
    date: "Upcoming / Active",
    description: "Preparing for collegiate coding challenges, hackathons, and software problem-solving contests.",
    badge: "Hackathons"
  }
];

export const achievementCategories = [
  "All",
  "Certifications",
  "Hackathons",
  "Courses",
  "Awards",
  "Other achievements"
];
