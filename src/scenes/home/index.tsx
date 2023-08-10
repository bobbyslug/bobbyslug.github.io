import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/actionButton";
import { SelectedPage } from "@/shared/types";
import Profile from "@/assets/profile.png";
import Profile2 from "@/assets/profile2.png";
import CssIcon from "@/assets/css-icon.png";
import HtmlIcon from "@/assets/html-icon.png";
import ReactIcon from "@/assets/react-icon.png";
import TailwindIcon from "@/assets/tailwind-icon.png";
import TypescriptIcon from "@/assets/typescript-icon.png";
import MuiIcon from "@/assets/mui-icon.png";
import ChakraIcon from "@/assets/chakra-icon.png";
import LinkedinIcon from "@/assets/linkedin-icon.png";
import GithubIcon from "@/assets/github-icon.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = { setSelectedPage: (value: SelectedPage) => void; theme: string };

const Home = ({ setSelectedPage, theme }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const profiles = [Profile, Profile2];

  useEffect(() => {
    const imageElement = document.getElementById(
      "profile-graphic",
    ) as HTMLImageElement;
    if (!imageElement) return;

    let currentIndex = 0;
    imageElement.src = profiles[0];

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % profiles.length;
      imageElement.src = profiles[currentIndex];
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="home"
      className={`${
        theme === "dark" ? "dark" : ""
      } gap-16 py-10 md:h-full md:pb-0`}
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:content-evolvetext before:absolute before:-top-20">
                <div className="title text-5xl">Front-end React Developer.</div>
              </div>
            </div>
            <p className="text-md mt-8">
              Hi! I'm Chris, a front-end developer based in Boston, MA. I love
              bringing websites to life with UI effects, and creating intuitive,
              dynamic user experiences. When not coding, I enjoy playing guitar,
              taking photos, and spending time with my cat.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="-ml-1 -mt-1 flex h-20 w-20 items-center gap-1 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              className="hov:text-secondary-500 dark:hov:text-gray-600"
              href="https://www.linkedin.com/in/christopher-he-/"
              target="_blank"
            >
              <img alt="linkedin-icon" src={LinkedinIcon} />
            </a>
            <a
              className="hov:text-secondary-500 dark:hov:text-gray-600"
              href="https://www.github.com/bobbyslug"
              target="_blank"
            >
              <img alt="github-icon" src={GithubIcon} />
            </a>
          </motion.div>
          {/* TECH STACK */}
          <motion.div
            className="mx-auto ml-0 mt-16 w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex w-3/5 items-center justify-between gap-6">
              <span className="h-8 w-60 text-xl">Tech Stack</span>
              <div className="flex w-1/2 items-center justify-between gap-3 drop-shadow-xl">
                <img alt="html-icon" src={HtmlIcon} />
                <img alt="css-icon" src={CssIcon} />
                <img alt="typescript-icon" src={TypescriptIcon} />
                <img alt="tailwind-icon" src={TailwindIcon} />
                <img alt="react-icon" src={ReactIcon} />
                <img alt="mui-icon" src={MuiIcon} />
                <img alt="chakra-icon" src={ChakraIcon} />
              </div>
            </div>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex flex-shrink-0 basis-3/5 justify-center md:z-10 md:-mr-20 md:mt-0 md:justify-items-end">
          <img alt="switching profile" id="profile-graphic" src={Profile} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
