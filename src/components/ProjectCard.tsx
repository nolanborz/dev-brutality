import React from "react";
import { TranslatedText, useLanguage } from "./LanguageToggle";

interface ProjectCardProps {
  image: string;
  title: string;
  titleJa?: string; // Optional Japanese title
  description: string;
  descriptionJa?: string; // Optional Japanese description
  techStack: string;
  liveSite?: string;
  github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  titleJa,
  description,
  descriptionJa,
  techStack,
  liveSite,
  github,
}) => {
  const { language } = useLanguage();

  // Use Japanese text if available and language is set to Japanese, otherwise use English
  const displayTitle = language === "ja" && titleJa ? titleJa : title;
  const displayDescription =
    language === "ja" && descriptionJa ? descriptionJa : description;

  return (
    <div className="bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] p-4 flex flex-col md:flex-row h-full gap-4">
      <div className="md:w-1/2 flex-shrink-0 overflow-hidden rounded border-2 border-black">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{displayTitle}</h3>
        <div className="overflow-y-auto h-32 mb-4 pr-2">
          <p className="mb-4">{displayDescription}</p>
        </div>
        <p className="mb-2 text-sm">
          <span className="font-semibold">
            {language === "ja" ? "使用技術:" : "Tech Stack:"}
          </span>{" "}
          {techStack}
        </p>
        <div className="mt-auto flex justify-between gap-2">
          {liveSite && (
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-400 border-2 border-black py-2 px-3 rounded font-medium text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)] transition-all"
            >
              {language === "ja" ? "サイトを見る" : "View Site"}
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
