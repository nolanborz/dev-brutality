import React from "react";
import ProjectCard from "./ProjectCard";
import borzoniBook from "@/assets/borzonibook.png";
import pokeshopper from "@/assets/pokeshopper.png";
import brutality from "@/assets/brutality.png";
import classified from "@/assets/classifiedstamp.png";
import { useTranslation } from "react-i18next";

const MyWork: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: borzoniBook,
      titleKey: "myWork.card1.title",
      descriptionKey: "myWork.card1.description",
      techStackKey: "myWork.card1.techStack",
      liveSite: "https://borzonibook.com",
      github: "https://github.com/nolanborz/borzonibook",
    },
    {
      image: pokeshopper,
      titleKey: "myWork.card2.title",
      descriptionKey: "myWork.card2.description",
      techStackKey: "myWork.card2.techStack",
      github: "https://github.com/nolanborz/poke-shopper",
    },
    {
      image: brutality,
      titleKey: "myWork.card3.title",
      descriptionKey: "myWork.card3.description",
      techStackKey: "myWork.card3.techStack",
      github: "https://github.com/nolanborz/dev-brutality",
    },
    {
      image: classified,
      titleKey: "myWork.card4.title",
      descriptionKey: "myWork.card4.description",
      techStackKey: "myWork.card4.techStack",
      github: "https://github.com/nolanborz/avramax",
    },
  ];

  return (
    <div className="my-work-section">
      <h2 className="text-3xl font-extrabold mb-4">{t("myWork.header")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            titleKey={project.titleKey}
            descriptionKey={project.descriptionKey}
            techStackKey={project.techStackKey}
            liveSite={project.liveSite}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
