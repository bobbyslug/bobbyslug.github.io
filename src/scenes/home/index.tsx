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
  const profiles = [Profile, Profile2];
  const dark = theme === "dark" ? "dark" : "";

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
      className={`${dark} content background gap-16 py-10 transition duration-300 md:h-full md:pb-0`}
    >
      {/* IMAGE AND MAIN HEADER */}
      <MotionDiv
        className="header-main relative mx-auto w-5/6 max-w-screen-2xl md:h-5/6"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.Home}
      >
        {/* MAIN HEADER */}
        <div className="header-text z-10 max-w-screen-sm md:mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <MotionDiv
            className="-mt-12 justify-center"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Home}
            delay={0.2}
          >
            <div className="relative">
              <h1 className={`${dark} title text-5xl layer`}>
                Front-end React <br /> Developer.
              </h1>
            </div>
            <MotionDiv
              className="relative -mt-24"
              setSelectedPage={setSelectedPage}
              selectedPage={SelectedPage.Home}
              slowed
            >
              <div className="relative">
                <h1 className="title text-5xl">
                  Front-end React <br /> Developer.
                </h1>
              </div>
            </MotionDiv>
            <p className="text-md mt-8 max-w-md">
              Hi! I'm Chris, a front-end developer based in Boston, MA. I love
              bringing websites to life with UI effects, and creating intuitive,
              dynamic user experiences.
            </p>
          </MotionDiv>
          {/* SOCIALS */}
          <MotionDiv
            className="socials -ml-1 -mt-1 h-20 w-20 gap-1"
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
            className="mx-auto ml-0 mt-16 flex w-full"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Home}
            delay={0.5}
          >
            <div className="skills flex w-full justify-between gap-6">
              <p className={`${dark} border-swap flex h-8 text-xl`}>
                Tech Stack
              </p>
              <div className="icons flex list-none gap-3 drop-shadow-xl">
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
        <div className="image max-h-sm flex max-w-sm flex-shrink-0 justify-center md:z-10 md:justify-items-end">
          <img
            alt="switching profile"
            id="profile-graphic"
            src={Profile}
            className=""
          />
        </div>
      </MotionDiv>
    </section>
  );
};

export default Home;
