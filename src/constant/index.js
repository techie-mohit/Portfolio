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
    name: "Projects",
    link: "#work",
  },
  {
    name:"Education",
    link: "#education",
  }
];
  
const words = [
  { text: "Coder"},
  { text: "Full Stack Developer"},
  { text: "Backend Developer"},
  { text: "Coder"},
  { text: "Full Stack Developer"},
  { text: "Backend Developer"},
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
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
        name: "HTML",
        imgPath: "/skills/html.png",
      },
      {
        name: "CSS",
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
        imgPath: "/skills/tailwind.png",
      },
      {
        name: "Redux",
        imgPath: "/skills/redux.png",
      },
      {
        name: "Material UI",
        imgPath: "/skills/materialui.png",
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
        name: "Express",
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
    ]  
  },
  {
    title: 'Languages',
    skills: [
      {
        name: "Python",
        imgPath: "/skills/python.png",
      },
      {
        name: "Java",
        imgPath: "/skills/java.png",
      },
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
        name: "C",
        imgPath: "/skills/c.png",
      }
    ]
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        imgPath: "/skills/git.png",
      },
      {
        name: "GitHub",
        imgPath: "/skills/github.png",
      },
      {
        name: "Postman",
        imgPath: "/skills/postman.png",
      },
      {
        name: "Vercel",
        imgPath: "/skills/vercel.png",
      },
      {
        name : "Vs Code",
        imgPath: "/skills/vscode.png",
      }
    ]
  }

];

export const education = [
  {
    id: 0,
    img: "education/college.jpeg",
    school: "Ajay Kumar Garg Engineering College Ghaziabad",
    date: "Nov 2022 - Present",
    grade: "79.1%",
    desc: "I am pursuing my Bachelor's degree in Computer Science and Engineering  (BTech) from Ajay Kumar Garg Engineering College Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems.",
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



export const projects = [
  {
    id: 0,
    title: "Linkup - Social Networking App",
    description:
      "LinkUp is a sleek social networking platform focused on meaningful one-to-one connections. It enables users to create profiles, discover others, and engage in private real-time conversations. Designed with a clean and responsive interface, LinkUp prioritizes simplicity and performance, making it easy to stay connected without the noise of group chats or feeds.",
    image: "project/linkup.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/techie-mohit/Linkup",
    webapp: "https://linkup-u40u.onrender.com/",
  },
  {
    id: 1,
    title: "Learnify",
    description:
      "Learnify is a modern e-learning platform designed to make high-quality education accessible to everyone. Inspired by Udemy, it allows instructors to create and manage courses, while students can browse, enroll, and learn at their own pace. The platform features video-based lessons, progress tracking, and secure payments, delivering a smooth and engaging online learning experience.",
    image: "project/lms.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com/techie-mohit/Learnify",
    webapp: "https://learnify-uy89.onrender.com",
  },
  {
    id: 2,
    title: "Cabify",
    description:
      "Cabify is a ride-hailing application that allows users to book cabs with ease and convenience. Users can sign up, choose their pickup and drop-off locations, and get matched with nearby drivers. The app uses Google Maps via Google Cloud Platform (GCP) for accurate location services, route display, and real-time tracking. It’s designed to provide a smooth and intuitive experience for both riders and drivers.",
    image: "project/cabify.jpg",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "Google Maps API (via GCP)"],
    github: "https://github.com/techie-mohit/Cabify",
    webapp: "https://cabify-app-example.com/",
  },
  {
    id: 3,
    title: "ByteLog",
    description:
      "ByteLog is a sleek and modern blogging platform built specifically for developers to write and share technical content. It supports clean code formatting, user-friendly writing tools, and easy post management. With a focus on performance, security, and simplicity, ByteLog offers a smooth experience for both readers and writers.",
    image: "project/bytelog.png",
    tags: ["Next.js", "React.js", "TypeScript", "Neon (PostgreSQL)", "Prisma ORM", "Clerk Authentication", "Tailwind CSS"],
    github: "https://github.com/techie-mohit/ByteLog",
    webapp: "https://bytelog.com/", // Updated webapp link
  },
  {
    id: 4,
    title: "Employee Management System",
    description:
      "This is a basic employee management system that allows users to add, edit, view, and delete employee records. Built using React.js, the app uses the browser's localStorage to save data, making it lightweight and easy to use without any backend. It’s a great tool for practicing CRUD operations and state management in React.",
    image: "project/employee.png",
    tags: ["React.js", "JavaScript", "localStorage", " CSS"],
    github: "https://github.com/techie-mohit/Employee-Management-System",
    webapp: "https://employee-management-system-xyz.netlify.app/",
  },
];  






