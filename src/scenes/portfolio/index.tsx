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
      } background min-h-fill mx-auto py-20 transition duration-500`}
    >
      <MotionDiv
        className="mx-auto flex w-5/6 flex-col justify-center gap-8"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.Portfolio}
      >
        <HText theme={theme}>PORTFOLIO</HText>
        <MotionDiv
          className="-mt-7"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.Portfolio}
          delay={0.2}
        >
          projects n fotos
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Portfolio;
