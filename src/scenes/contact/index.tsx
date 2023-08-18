import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import MotionDiv from "@/shared/MotionDiv";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

//const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const Contact = ({ setSelectedPage, theme }: Props) => {
  const fill = theme === "dark" ? "#17071d" : "#fad1d1";

  return (
    <>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          theme === "dark" ? "dark" : ""
        } svgcolor-light secondary transition duration-500`}
      >
        <path
          d="M0 0 L50 100 L100 0 Z"
          fill={fill}
          stroke={fill}
          className="transition duration-500"
        ></path>
      </svg>
      <section
        id="contact"
        className={`${
          theme === "dark" ? "dark" : ""
        } secondary min-h-fill mx-auto py-20 transition duration-500`}
      >
        <MotionDiv
          className="mx-auto flex w-5/6 flex-col justify-center gap-8"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.Contact}
        >
          <HText theme={theme}>CONTACT</HText>
          <MotionDiv
            className="-mt-7"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Contact}
            delay={0.2}
          >
            Location (willing to relocate)
          </MotionDiv>
        </MotionDiv>
      </section>
    </>
  );
};

export default Contact;
