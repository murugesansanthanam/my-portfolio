import React from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Food Recipe App",
      desc: "You will able to search recipes by ingredients and different help options like vegan, egg-free, and more.",
      link: "https://murugesan-food-recipe-app.netlify.app/",
    },
    {
      img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Chat Application",
      desc: "This application has a great design and functionality, including an icon indicating who read the message, image support, sound notification, the ability to create multiple chat rooms, and many more features.",
      link: "https://murugesan-chat-app.netlify.app/",
    },
  ];

  return (
    <div className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which I've done to make people's lives easier:
      </p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
