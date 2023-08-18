// import useMediaQuery from "@/hooks/useMediaQuery";
// import ActionButton from "@/shared/actionButton";
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
import { useEffect } from "react";
import MotionDiv from "@/shared/MotionDiv";

type Props = { setSelectedPage: (value: SelectedPage) => void; theme: string };

const Home = ({ setSelectedPage, theme }: Props) => {
  //const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
      } background gap-16 py-10 transition duration-300 md:h-full md:pb-0`}
    >
      {/* IMAGE AND MAIN HEADER */}
      <MotionDiv
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.Home}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <MotionDiv
            className="md:-mt-20"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Home}
            delay={0.2}
          >
            <div className="relative">
              <div className="before:content-evolvetext before:absolute before:-top-20">
                <h1 className="title text-5xl">
                  Front-end React <br /> Developer.
                </h1>
              </div>
            </div>
            <p className="text-md mt-8">
              Hi! I'm Chris, a front-end developer based in Boston, MA. I love
              bringing websites to life with UI effects, and creating intuitive,
              dynamic user experiences. When not coding, I enjoy playing guitar,
              taking photos, and spending time with my cat.
            </p>
          </MotionDiv>
          {/* ACTIONS */}
          <MotionDiv
            className="-ml-1 -mt-1 flex h-20 w-20 items-center gap-1 md:justify-start"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Home}
            delay={0.4}
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
          </MotionDiv>
          {/* TECH STACK */}
          <MotionDiv
            className="mx-auto ml-0 mt-16 w-5/6"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Home}
            delay={0.5}
          >
            <div className="ml-6 flex w-3/5 items-center justify-between gap-6">
              <span className="max-w-60 min-w-60 -ml-6 h-8 text-xl">
                Tech Stack
              </span>
              <span className="-mt-1 flex h-8 w-10 justify-center text-2xl">
                |
              </span>
              <div className="flex w-1/2 items-center justify-between gap-3 drop-shadow-xl">
                <img alt="html-icon" src={HtmlIcon} />
                <img alt="css-icon" src={CssIcon} />
                <img alt="typescript-icon" src={TypescriptIcon} />
                <img alt="react-icon" src={ReactIcon} />
                <img alt="tailwind-icon" src={TailwindIcon} />
                <img alt="mui-icon" src={MuiIcon} />
                <img alt="chakra-icon" src={ChakraIcon} />
              </div>
            </div>
          </MotionDiv>
        </div>
        {/* IMAGE */}
        <div className="flex flex-shrink-0 basis-3/5 justify-center md:z-10 md:-mr-20 md:mt-0 md:justify-items-end">
          <img alt="switching profile" id="profile-graphic" src={Profile} />
        </div>
      </MotionDiv>
    </section>
  );
};

export default Home;
