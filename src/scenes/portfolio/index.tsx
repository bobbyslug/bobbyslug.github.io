import HText from "@/shared/HText";
import { SelectedPage, ProjectType } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

const projects: Array<ProjectType> = [
  {
    image: "TBD",
    title: "TBD",
    description: "C4C... TBD",
    link: "TBD",
  },
  {
    image: "",
    title: "TL;DR",
    description:
      "A Chrome extension which summarizes articles for you. Provides an interface for selecting summary length, font size, and light/dark themes.",
    link: "",
  },
  {
    image: "",
    title: "NLP Image Generator",
    description:
      "A python script which generates images based on a given text input. Uses Neural Network and Naive Bayes models trained on the Brown Corpus to create word embeddings for mapping emotions to paintins. They are then used to generate a painting from user input by matching objects and sentiment.",
    link: "",
  },
  {
    image: "",
    title: "Photography",
    description: "A collection of my favorite shots :)",
    link: "",
  },
];

const Portfolio = ({ setSelectedPage, theme }: Props) => {
  return (
    <section
      id="portfolio"
      className={`${
        theme === "dark" ? "dark bg-gray-800" : "bg-green-50"
      } min-h-fill mx-auto py-20`}
    >
      <motion.div
        className="mx-auto flex w-5/6 flex-col justify-center gap-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText theme={theme}>PORTFOLIO</HText>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            projects
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
