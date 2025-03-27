// components/Footer.tsx
import React from "react";
import ConnectCard from "./ConnectCard";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-16">
      <div className="relative">
        <div className="absolute -top-12 left-10 transform rotate-12">
          <div className="w-16 h-16 bg-blue-300 border-2 border-black rounded-full"></div>
        </div>
        <div className="absolute -top-8 right-16 transform -rotate-6">
          <div className="w-12 h-12 bg-orange-300 border-2 border-black rounded-md"></div>
        </div>

        <div className="relative bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
          <h2 className="text-3xl font-extrabold mb-6">{t("footer.header")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConnectCard
              title={t("footer.contactCard.header")}
              bgColor="bg-red-200"
            >
              <p className="mb-2">{t("footer.contactCard.content1")}</p>
              <p className="font-medium">{t("footer.contactCard.content2")}</p>
            </ConnectCard>

            <ConnectCard
              title={t("footer.socialsCard.header")}
              bgColor="bg-emerald-200"
            >
              <ul className="flex flex-col space-y-2">
                <li className="font-medium">
                  <a
                    href="https://github.com/nolanborz"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="inline-block w-6 h-6 bg-black rounded-full"></span>
                    GitHub
                  </a>
                </li>
                <li className="font-medium">
                  <a
                    href="https://www.linkedin.com/in/nolan-borzoni-84228b348"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="inline-block w-6 h-6 bg-black rounded-full"></span>
                    LinkedIn
                  </a>
                </li>
                <li className="font-medium">
                  <a
                    href="https://x.com/borzoni25"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="inline-block w-6 h-6 bg-black rounded-full"></span>
                    X
                  </a>
                </li>
              </ul>
            </ConnectCard>

            <ConnectCard
              title={t("footer.careerCard.career")}
              bgColor="bg-yellow-200"
            >
              <p className="font-medium text-m mt-2">
                {t("footer.careerCard.content")}
              </p>
            </ConnectCard>
          </div>

          <div className="mt-10 text-center">
            <p className="inline-block bg-gray-100 border-2 border-black px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transform rotate-1">
              <span className="font-bold">© 2025 Nolan Borzoni</span> • Made
              with 💻 in Japan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
