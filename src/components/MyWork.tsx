// components/MyWork.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import borzoniBook from "@/assets/borzonibook.png";
import pokeshopper from "@/assets/pokeshopper.png";
import brutality from "@/assets/brutality.png";
import classified from "@/assets/classifiedstamp.png";

const MyWork: React.FC = () => {
  const projects = [
    {
      image: borzoniBook,
      title: "BorzoniBook",
      description:
        "Create and customize your profile, follow your favorite users, and leave likes and comments on others' posts. Built entirely on Ruby on Rails, and launched through Heroku, this project pushed me to understand database relationships on a deeper level as I navigated connecting users, likes, posts, follows, and more.",
      techStack:
        "Ruby on Rails, PostgreSQL, Hotwire, Stimulus, Tailwind CSS, Heroku",
      liveSite: "https://borzonibook.com",
      github: "https://github.com/nolanborz/borzonibook",
    },
    {
      image: pokeshopper,
      title: "Pokeshopper",
      description:
        "Filter through Pokemon by type, add them to a cart, fill out your order form, and checkout. Pokeshopper uses PokeAPI to grab random Pokemon's data and Rails converts them into products. Along with working with an API, Hotwire and Stimulus were key for dynamically updating the UI.",
      techStack: "Ruby on Rails, PostgreSQL, Hotwire, Stimulus, Tailwind CSS",
      github: "https://github.com/nolanborz/poke-shopper",
    },
    {
      image: brutality,
      title: "Developer Portfolio",
      description:
        "This is a basic developer portfolio page made with TypeScript, React, and Vite, complemented with Neobrutalism design.",
      techStack: "JavaScript, React, TypeScript, Vite, Heroku",
      github: "https://github.com/nolanborz/dev-brutality",
    },
    {
      image: classified,
      title: "Avramax",
      description:
        "Avramax, my current project, is an online dueling application for Yugioh, my favorite card game. It features a Ruby on Rails API back-end to filter and query through a 13,000 card database quickly, and will use a React front-end to handle all of the interactions.",
      techStack: "Ruby on Rails, React, PostgreSQL",
      github: "https://github.com/yourusername/project-repo",
    },
  ];

  return (
    <div className="my-work-section">
      <h2 className="text-3xl font-extrabold mb-4">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveSite={project.liveSite}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
