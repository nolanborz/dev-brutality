import React from "react";
import myImage from "@/assets/nolan.png";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-4">{t("aboutMe.header")}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <img
            src={myImage}
            alt="Nolan"
            className="w-80 h-auto rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
          />
        </div>
        <div
          className="flex-1 p-6 bg-gray-50 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-left"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ccc 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <p className="mb-4 text-lg font-medium">
            {t("aboutMe.contentIntro")}
          </p>
          <p className="mb-4 text-lg font-medium">
            {t("aboutMe.contentSkills1")}
          </p>
          <p className="mb-4 text-lg font-medium">
            {t("aboutMe.contentSkills2")}
          </p>
          <p className="mb-4 text-lg font-medium">
            {t("aboutMe.contentHobbies")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
