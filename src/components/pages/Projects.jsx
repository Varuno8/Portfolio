import React from 'react';
import QuickBitesScreenshot from '../../assets/QuickBites.png';
import jobifyScreenshot from '../../assets/jobify.png';


const projects = [
  {
    title: "QuickBites",
    description:
      "A full-stack food delivery platform with user authentication, shopping cart, and order tracking features. Built with MERN stack.",
    details:
      "QuickBites offers a seamless food ordering experience with real-time updates, personalized orders, and secure payment integration. The project focuses on scalability, responsive UI, and efficient database management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Varuno8/Quick-Bites",
    screenshot: QuickBitesScreenshot,
  },
  {
    title: "Job Seeking Application",
    description:
      "The Job Seeking Application is a full-stack web solution that enables users to search and apply for job listings, utilizing modern technologies like ReactJS, NodeJS, and MongoDB for an efficient user experience.",
    details:
      "Developed the frontend with ReactJS using the Context API to enhance performance and reduce prop drilling. The backend, built with NodeJS and Express, features token-based authentication for improved server performance and security. The application incorporates security measures such as rate limiting and MongoDB sanitization to prevent attacks. Additionally, it scrapes job data from various websites using Beautiful Soup in Python, providing users with a comprehensive job search experience.",
    technologies: ["HTML/CSS", "JavaScript", "MongoDB,React,Express.js"],
    link: "https://jobify-j55w.onrender.com/",
    screenshot: jobifyScreenshot,
  },
];

const Projects = () => {
  return (
    <section className="bg-pattern text-gray-800 py-20 fade-in">
      <div className="container mx-auto text-center px-4 lg:px-32">
        <h3 className="text-5xl font-extrabold mb-10">Projects</h3>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of the exciting projects I’ve worked on:
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="rounded-md mb-6 w-full object-cover h-48"
              />
              <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700 mb-4">{project.details}</p>
              <p className="text-gray-700 font-semibold mb-4">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
