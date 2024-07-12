import HText from "@/shared/HText";
import MotionDiv from "@/shared/MotionDiv";
import { SelectedPage } from "@/shared/types";
import AboutImgController from "./aboutImageController";
import { useEffect } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

// const projects: Array<ProjectType> = [
//   {
//     image: "TBD",
//     title: "TBD",
//     description: "C4C... TBD",
//     link: "TBD",
//   },
//   {
//     image: "",
//     title: "TL;DR",
//     description:
//       "A Chrome extension which summarizes articles for you. Provides an interface for selecting summary length, font size, and light/dark themes.",
//     link: "",
//   },
//   {
//     image: "",
//     title: "NLP Image Generator",
//     description:
//       "A python script which generates images based on a given text input. Uses Neural Network and Naive Bayes models trained on the Brown Corpus to create word embeddings for mapping emotions to paintins. They are then used to generate a painting from user input by matching objects and sentiment.",
//     link: "",
//   },
//   {
//     image: "",
//     title: "Photography",
//     description: "A collection of my favorite shots :)",
//     link: "",
//   },
// ];

// lighter green: #F0FDF4

const About = ({ setSelectedPage, theme }: Props) => {
  // useEffect(() => {
  //   const bandController = new AboutImgController("band");
  //   // const nepalController = new AboutImgController("nepal");
  //   // const graysonController = new AboutImgController("grayson");

  //   return () => {
  //     // Clean up listeners if needed
  //     // This would require AboutImgController to support removing listeners, e.g., by storing references to the handlers
  //   };
  // }, []);
  useEffect(() => {
    new AboutImgController("band");
    new AboutImgController("nepal");
    new AboutImgController("grayson");
  }, []);
  return (
    <section
      id="about"
      className={`${
        theme === "dark" ? "dark" : ""
      } background min-h-fill mx-auto py-36 transition duration-500`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="flex">
        <div className="about-img band" id="band" style={{ filter: "url(#goo)" }}></div>
        <div className="about-img nepal" id="nepal" style={{ filter: "url(#goo)" }}></div>
        <div className="about-img grayson" id="grayson" style={{ filter: "url(#goo)" }}></div>
      </div>
      {/* <div className={'flex'} id="about-img-container">
        <div className={'about-img band'} id="band"></div>
        <div className={'about-img nepal'} id="nepal"></div>
        <div className={'about-img grayson'} id="grayson"></div>
      </div> */}
      <MotionDiv
        className="mx-auto flex w-3/6 flex-col gap-8 mt-24"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.About}
      >
        <HText theme={theme} layered>ABOUT</HText>      
        <MotionDiv
          className="relative layer"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.About}
          slowed
        >
          <HText theme={theme}>ABOUT</HText>
        </MotionDiv>
        <MotionDiv
          className="-mt-7"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.About}
          delay={0.2}
        >
          While there isn't much to see yet, my page is a constant work in progress so check back in soon, and contact me to say hi! I welcome any and all words of affirmation regarding the small UI delights that I may or may not have pulled all-nighters for.
          In my spare time I play guitar, take photos, and rescue the mouse wand toy from my tiny friend, Grayson.
          <br/>
          This website was built from scratch using React Typescript,
          Tailwind, and Framer Motion, and deployed with Cloudflare. 
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default About;
