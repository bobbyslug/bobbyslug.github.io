import HText from "@/shared/HText";
import MotionDiv from "@/shared/MotionDiv";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

const About = ({ setSelectedPage, theme }: Props) => {
  return (
    <section
      id="about"
      className={`${
        theme === "dark" ? "dark " : ""
      } secondary min-h-fill mx-auto py-20 transition duration-500`}
    >
      <MotionDiv
        className="mx-auto flex w-5/6 flex-col justify-center gap-8"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.About}
      >
        <HText theme={theme}>ABOUT ME</HText>
        <MotionDiv
          className="-mt-7"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.About}
          delay={0.2}
        >
          some things about me are ...fave color is sage green (in case it
          wasn't obvious) in portfolio- always on the lookout for where my next
          adventure will be!
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default About;
