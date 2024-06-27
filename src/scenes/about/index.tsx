import HText from "@/shared/HText";
import MotionDiv from "@/shared/MotionDiv";
import { SelectedPage } from "@/shared/types";

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

const Portfolio = ({ setSelectedPage, theme }: Props) => {
  return (
    <section
      id="portfolio"
      className={`${
        theme === "dark" ? "dark" : ""
      } background min-h-fill mx-auto py-36 transition duration-500`}
    >
      <div className={'flex'}>
        <div className={'about-img band'}></div>
        <div className={'about-img nepal'}></div>
        <div className={'about-img grayson'}></div>
      </div>
      <MotionDiv
        className="mx-auto flex w-3/6 flex-col gap-8"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.About}
      >
        <HText theme={theme} layered>ABOUT</HText>      
        <MotionDiv
          className="relative -mt-16"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.About}
          slowed
        >
          <HText theme={theme}>ABOUT</HText>
        </MotionDiv>
        <MotionDiv
          className="-mt-7"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.Portfolio}
          delay={0.2}
        >
          I'm usually working on projects that serve my specific and personal quality-of-life needs and curiosities.
          In my spare time I love playing music, taking photographs, and being a cat dad.
          This website was built from scratch using React Typescript,
          Tailwind, and Framer Motion, and deployed with Cloudflare.
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Portfolio;
