import { create } from 'zustand';

// Static project data
const projectsData = [
  {
    projectName:"Beginner Product App",
    projectDescription: "A full-stack web application built using the MERN stack, enabling users to create and manage a simple product inventory. Users can add new products with basic details and remove existing products.\n- MongoDB/Mongoose: Implemented a database schema using MongoDB and Mongoose for storing and managing product data. \n- Express.js/Node.js: Developed a RESTful API using Express.js and Node.js to handle data requests from the front-end, including creating and deleting products.\n- React.js: Constructed a dynamic user interface with React.js, allowing users to interact with the product inventory through adding and deleting items.",
    projectLanguage:"JavaScript, mongoDB, express, react, nodejs",
    projectImage: "projects/beginner-product-app.png",
    projectURL: "https://beginner-product-app.onrender.com/"
  },
  {
    projectName: "Online Portfolio",
    projectDescription: "A personal online portfolio built with react, designed to showcase projects, skills, and contact information. Features a dynamic project page, enabling easy management and display of project details.\nReact: Developed a responsive and interactive front-end using React, displaying project information and providing a user-friendly interface for navigation and content presentation.",
    projectLanguage: "JavaScript, react, chakra",
    projectImage: "projects/online-portfolio-v1.png",
    projectURL: "https://github.com/yourusername/task-manager"
  },
  {
    projectName: "Expense Tracker",
    projectDescription: "A full-stack expense tracking application built with the MERN stack, emphasizing user security through bcrypt password hashing and providing dynamic data visualization with Recharts.\n- MongoDB/Express.js: Designed a modular backend system using MongoDB and Express.js, ensuring scalable and secure data storage for user transactions, and implemented RESTful APIs\n- React.js/Chakra UI: Developed a responsive and interactive front-end using React.js and Chakra UI, creating a visually appealing and user-friendly interface for managing expenses.\n- Node.js/bcrypt/Recharts: Integrated Node.js for server-side logic, implemented user authentication with bcrypt for secure password hashing, and utilized Recharts to generate dynamic and interactive data visualizations.",
    projectLanguage: "JavaScript, mongoDB, express, react, nodejs",
    projectImage: "projects/expense-tracker-mern.png",
    projectURL: "https://expense-tracker-gx26.onrender.com"
  }
  // Add more projects as needed
];

export const showProjects = create((set) => ({ 
    projects: [],
    setProjects: (projects) => set({ projects }),

    fetchProjects: () => {
        // No actual fetch needed, just set the static data
        set({ projects: projectsData });
    },
}));