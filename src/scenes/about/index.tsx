import HText from "@/shared/HText";
import MotionDiv from "@/shared/MotionDiv";
import { SelectedPage } from "@/shared/types";

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
          As a student at Northeastern University, I'm usually working on a
          project or two to discover what areas and applications of software
          most align with my values. In my spare time, I love playing music and
          taking photographs, and I've included some of my favorite shots in my
          portfolio!
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default About;
