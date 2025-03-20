// components/AboutMe.tsx
import React from "react";
import myImage from "@/assets/nolan.png";
import { TranslatedText } from "./LanguageToggle";

const AboutMe: React.FC = () => {
  return (
    <div>
      <TranslatedText
        en="About Me"
        ja="私について"
        className="text-3xl font-extrabold mb-4"
      />
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
          <TranslatedText
            en="Hi, I'm Nolan! I'm a software developer living in Hokkaido, Japan. I moved from my home of Utah, USA, to Japan 3 years ago via the JET Program to teach English, and have spent the last 12 months learning Web Development. I spent most of my learning completing the Odin Project, an open source full-stack development curriculum for Ruby on Rails and React. Since finishing the bootcamp, I've began building my own applications while searching for a full-time position."
            ja="こんにちは、ノーランです！北海道に住むソフトウェア開発者です。3年前にJETプログラムを通じて英語を教えるために出身地のアメリカ・ユタ州から日本に移住し、この12ヶ月間はウェブ開発を学んできました。学習の大部分はOdinプロジェクト（Ruby on RailsとReactのオープンソースフルスタック開発カリキュラム）を完了することに費やしました。ブートキャンプを終えた後は、フルタイムの職を探しながら独自のアプリケーションの構築を始めました。"
            className="mb-4 text-lg font-medium"
          />
          <TranslatedText
            en="My technical skills include JavaScript, Ruby, Ruby on Rails, React, TypeScript, Vite (how I built this website), HTML, and CSS. I'm particularly interested in creating websites and experiences users of all abilities can navigate effortlessly."
            ja="私の技術スキルには、JavaScript、Ruby、Ruby on Rails、React、TypeScript、Vite（このウェブサイトの構築方法）、HTML、CSSが含まれます。特に、あらゆる能力のユーザーが簡単に操作できるウェブサイトや体験の作成に興味を持っています。"
            className="mb-4 text-lg font-medium"
          />
          <TranslatedText
            en="I am also fluent in Japanese and JLPT N2 Certification (January, 2023). I can listen, speak, and read confidently, and am aiming towards N1 Certification."
            ja="また、日本語も流暢で、JLPT N2認定（2023年1月）を取得しています。自信を持って聞き、話し、読むことができ、N1認定を目指しています。"
            className="mb-4 text-lg font-medium"
          />
          <TranslatedText
            en="When I'm not coding, you can find me reading about Ancient Rome, playing basketball, or spending time with my wonderful wife."
            ja="コーディングをしていない時は、古代ローマについて読んだり、バスケットボールをしたり、素晴らしい妻と時間を過ごしたりしています。"
            className="mb-4 text-lg font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
