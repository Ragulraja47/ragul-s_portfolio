import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong foundation in Java and modern web technologies. I specialize in building scalable, high-performance applications using the MERN stack and Spring Boot, with a focus on solving real-world problems through clean, maintainable code.`;

export const ABOUT_TEXT = `I'm a dedicated full stack developer pursuing a B.Tech in Information Technology, with a proven track record of building end-to-end web solutions. Skilled in Java, Spring Boot, React.js, Node.js, and databases like MySQL and MongoDB, I thrive in collaborative environments and enjoy taking on challenges that push my technical and creative boundaries.`;


export const EXPERIENCES = [
  {
    year: "Mar 2024 – Present",
    role: "Full Stack Developer",
    company: "Technology Innovation Hub, MKCE – Karur",
    description: `Developed ERP-based web applications supporting college operations. Contributed to frontend, backend, and database functionalities using MERN, jQuery, PHP, and MySQL.`,
    technologies: ["React.js", "Node.js", "MongoDB", "PHP", "MySQL", "jQuery"],
  },
];

export const PROJECTS = [
  {
    title: "Complaint Management System",
    image: project1,
    description:
      "An internal platform integrated with college ERP to streamline infrastructure issue reporting. Faculty can submit, track, and manage complaints efficiently with reduced paperwork. Role-based access and notifications improved transparency and resolution time. The system was built using jQuery, PHP, and MySQL.",
    technologies: ["jQuery", "PHP", "MySQL"],
  },
  {
    title: "Spring Boot CRUD Application",
    image: project2,
    description:
      "A secure CRUD system for managing user data with Spring Boot and RESTful APIs. Integrated JWT and OAuth2 for authentication and authorization. Applied JPA for ORM and SQL injection prevention for security. Designed for scalability and modular backend operations.",
    technologies: ["Spring Boot", "Java", "JPA", "MySQL"],
  },
  {
    title: "Payroll Management System",
    image: project3,
    description:
      "Developed a complete payroll solution to manage employee data and automate salary processing. Included features for accurate payslip generation and real-time data validation. Ensured smooth integration between frontend and backend with React and Spring Boot. The project reduced manual errors and enhanced HR efficiency.",
    technologies: ["React.js", "Spring Boot", "MySQL", "Postman"],
  },
  {
    title: "AI-Powered Auction System",
    image: project4,
    description:
      "Built an AI-integrated online auction platform that suggests optimal bids using real-time data. Leveraged the Gemini API to predict auction outcomes and enhance user decisions. Implemented secure bidding, user dashboards, and admin analytics. Developed using the MERN stack for dynamic performance.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API"],
  },
  {
    title: "AGRIKET – Livestock Management Platform",
    image: project1,
    description:
      "A smart agriculture platform to manage livestock lifecycle, grooming, and veterinary outreach. Features include contract farming modules and a direct farmer-to-consumer marketplace. Enabled vaccination tracking, disease prediction, and buyer-farmer interaction. Built with a MERN stack and integrated real-time monitoring.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Task Manager (Laravel)",
    image: project2,
    description:
      "A task management system built with Laravel to organize, assign, and monitor project tasks. Provided role-based authentication, dynamic task tracking, and user notifications. Clean dashboard interface for admin and employee roles. Ensured efficiency through Eloquent ORM and structured MVC patterns.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade"],
  },
  {
    title: "Skill Sphere – Online Learning Portal",
    image: project3,
    description:
      "Developed an e-learning portal for skill development, featuring course listings, video content, and quizzes. Integrated user registration, progress tracking, and certificate generation. Ensured responsive UI with modular React components and secure backend handling. Ideal for individual learners and institutions.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
];


export const CONTACT = {
  address: "No. 9/570, Othaiyur, Karur – 639 114",
  phoneNo: "9629613708",
  email: "cragulraja2004@gmail.com",
};
