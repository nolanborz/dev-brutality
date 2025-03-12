// components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string;
  liveSite?: string;
  github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techStack,
  liveSite,
  github,
}) => {
  return (
    <div className="bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] p-4 flex flex-col md:flex-row h-full gap-4">
      <div className="md:w-1/2 flex-shrink-0 overflow-hidden rounded border-2 border-black">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="overflow-y-auto h-32 mb-4 pr-2">
          <p className="mb-4">{description}</p>
        </div>
        <p className="mb-2 text-sm">
          <span className="font-semibold">Tech Stack:</span> {techStack}
        </p>
        <div className="mt-auto flex justify-between gap-2">
          {liveSite && (
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-400 border-2 border-black py-2 px-3 rounded font-medium text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              View Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                liveSite ? "flex-1" : "w-1/2 mx-auto"
              } bg-gray-200 border-2 border-black py-2 px-3 rounded font-medium text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)] transition-all`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
