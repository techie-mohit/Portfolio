const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Education",
    link: "#education",
  },
];

const words = [
  { text: "Software Engineer" },
  { text: "Full Stack Developer" },
  { text: "Backend Developer" },
  { text: "Software Engineer" },
  { text: "Full Stack Developer" },
  { text: "Backend Developer" },
];

const counterItems = [
  { value: 400, suffix: "+", label: "DSA Problems Solved" },
  { value: 3, suffix: "+", label: "Professional Projects" },
  { value: 2, suffix: "", label: "Internships Completed" },
  { value: 8.2, suffix: "", label: "CGPA" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];




const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [

  {
    name: "github",
    imgPath: "/images/github.png",
    link:"https://github.com/techie-mohit" // Added link for GitHub
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/mohitkeshari04/" // Added link for LinkedIn
  },
];

export {
  navLinks,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expLogos,
  socialImgs,
}



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      {
        name: "React JS",
        imgPath: "/skills/reactjs.png",
      },
      {
        name: "Next JS",
        imgPath: "/skills/nextjs.png",
      },
      {
        name: "HTML5",
        imgPath: "/skills/html.png",
      },
      {
        name: "CSS3",
        imgPath: "/skills/css.png",
      },
      {
        name: "JavaScript",
        imgPath: "/skills/javascript.png",
      },
      {
        name: "TypeScript",
        imgPath: "/skills/typescript.png",
      },
      {
        name: "Tailwind CSS",
        imgPath: "/skills/tailwindcss.png",
      },
      {
        name: "Redux",
        imgPath: "/skills/redux.png",
      },
      {
        name: "ShadCN UI",
        imgPath: "/skills/shadcnui.svg",
      },
    ]
  },
  {
    title: 'Backend',
    skills: [
      {
        name: "Node.js",
        imgPath: "/skills/nodejs.png",
      },
      {
        name: "Express.js",
        imgPath: "/skills/express.png",
      },
      {
        name: "MongoDB",
        imgPath: "/skills/mongodb.png",
      },
      {
        name: "MySQL",
        imgPath: "/skills/mysql.png",
      },
      {
        name: "Redis",
        imgPath: "/skills/redis.svg",
      },
      {
        name: "GraphQL",
        imgPath: "/skills/graphql.svg",
      },
    ]  
  },
  {
    title: 'Languages',
    skills: [
      {
        name: "C++",
        imgPath: "/skills/cpp.png",
      },
      {
        name: "JavaScript",
        imgPath: "/skills/javascript.png",
      },
      {
        name: "TypeScript",
        imgPath: "/skills/typescript.png",
      },
      {
        name: "Python",
        imgPath: "/skills/python.png",
      },
    ]
  },
  {
    title: "Real-Time & Auth",
    skills: [
      {
        name: "Socket.IO",
        imgPath: "/skills/socketio.svg",
      },
      {
        name: "WebRTC",
        imgPath: "/skills/webrtc.svg",
      },
      {
        name: "WebSockets",
        imgPath: "/skills/websocket.svg",
      },
      {
        name: "JWT",
        imgPath: "/skills/jwt.svg",
      },
      {
        name: "OAuth 2.0",
        imgPath: "/skills/oauth.svg",
      },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        imgPath: "/skills/docker.svg",
      },
      {
        name: "AWS",
        imgPath: "/skills/aws.svg",
      },
      {
        name: "Git",
        imgPath: "/skills/git.png",
      },
      {
        name: "GitHub",
        imgPath: "/skills/github.png",
      },
      {
        name: "Vercel",
        imgPath: "/skills/vercel.png",
      },
      {
        name: "Render",
        imgPath: "/skills/render.svg",
      },
      {
        name: "Postman",
        imgPath: "/skills/postman.png",
      },
      {
        name: "RabbitMQ",
        imgPath: "/skills/rabbitmq.svg",
      },
      {
        name: "GitHub Actions",
        imgPath: "/skills/githubactions.svg",
      },
    ]
  }

];

export const education = [
  {
    id: 0,
    img: "education/college.jpeg",
    school: "Ajay Kumar Garg Engineering College, Ghaziabad",
    date: "2022 – 2026",
    grade: "CGPA: 8.2/10",
    desc: "I am pursuing my Bachelor's degree in Computer Science and Engineering (BTech) from Ajay Kumar Garg Engineering College, Ghaziabad. Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Computer Networks, Operating Systems, Object-Oriented Programming.",
    degree: "Bachelor of Technology - BTech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: "education/school.jpeg",
    school: "Varanasi Public School, Varanasi",
    date: "Apr 2020 - March 2021",
    grade: "93.4%",
    desc: "I completed my class 12 education from Varanasi Public School, Varanasi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: "education/school.jpeg",
    school: "Varanasi Public School, Varanasi",
    date: "Apr 2018 - March 2019",
    grade: "92.8%",
    desc: "I completed my class 10 education from Varanasi Public School, Varanasi, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];


export const experiences = [
  {
    id: 0,
    role: "Associate Software Engineer Intern",
    company: "Primathon",
    date: "Jan 2026 - Mar 2026",
    desc: "Designed and implemented scalable backend services using TypeScript, Node.js, and Express.js, integrating Redis caching to reduce database query latency by 35%. Designed and optimized MongoDB schemas using Mongoose for service listings and user profiles, ensuring efficient data modeling and query performance. Collaborated closely with the backend team to design and integrate scalable RESTful APIs.",
    skills: ["TypeScript", "Node.js", "Express.js", "Redis", "MongoDB", "Mongoose", "RESTful APIs"],
  },
  {
    id: 1,
    role: "Full Stack Web Development Intern",
    company: "Unified Mentor",
    date: "Jul 2025 - Aug 2025",
    desc: "Delivered responsive front-end interfaces using React.js and Tailwind CSS, and implemented scalable, production-ready features. Optimized state management using Zustand, reducing API response latency by 30% and overall platform load time by 15%. Collaborated with an Agile team using Git for version control to design, integrate, and optimize APIs.",
    skills: ["React.js", "Tailwind CSS", "Zustand", "Git", "Agile", "API Integration"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Bookzy – Online Book Marketplace",
    description:
      "Architected a full-stack MERN marketplace using TypeScript, implementing JWT (httpOnly cookie) authentication and Google OAuth 2.0. Integrated Razorpay payment gateway with HMAC-SHA256 signature verification to ensure secure transaction processing. Designed modular 10+ RESTful APIs with Express.js and MongoDB and implemented aggregation pipelines for revenue analytics and order insights. Improved application performance by implementing Redux Toolkit with RTK Query reducing redundant API calls.",
    image: "project/Bookzy.png",
    tags: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Redux Toolkit", "Google OAuth 2.0"],
    github: "https://github.com/techie-mohit/Bookzy-Backend",
    webapp: "https://bookzy-frontend.vercel.app",
  },
  {
    id: 1,
    title: "Voxinity – Real-Time Communication Platform",
    description:
      "Engineered a real-time chat, audio, and video communication platform using MERN, WebRTC, and Socket.IO for low-latency bidirectional messaging. Implemented custom signaling server with ICE candidate exchange and STUN/TURN-based NAT traversal. Optimized message retrieval using MongoDB indexes, reducing query latency and loading performance by 80%.",
    image: "project/communication.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.IO"],
    github: "https://github.com/techie-mohit/Voxinity",
    webapp: "https://video-calling-feiz.vercel.app",
  },
  {
    id: 2,
    title: "Learnify – Learning Management System",
    description:
      "Developed a scalable LMS with 15+ RESTful APIs for course, enrollment, and user lifecycle management. Implemented role-based access control with JWT authentication supporting multi-role (Instructor, Student). Integrated Stripe payment gateway with secure checkout flow and server-side transaction validation. Enhanced backend efficiency by optimizing database queries and improving API response consistency by 40%.",
    image: "project/lms.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com/techie-mohit/Learnify",
    webapp: "https://learnify-uy89.onrender.com",
  },
];  
