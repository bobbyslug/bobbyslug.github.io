import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import MotionDiv from "@/shared/MotionDiv";
import Card from "./Card";
import EmailIcon from "@/assets/email-icon.png";
import MapIcon from "@/assets/map-icon.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

//const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const Contact = ({ setSelectedPage, theme }: Props) => {
  const fill = theme === "dark" ? "#17071d" : "#fcd9d9";

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
          className="mx-auto flex w-5/6 flex-col justify-center gap-8 mt-12"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.Contact}
        >
          <HText theme={theme} layered>CONTACT</HText>
          <MotionDiv
            className="relative layer"
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Contact}
            slowed
          >
            <HText theme={theme}>CONTACT</HText>
          </MotionDiv>
          <div className="justify-left flex gap-20">
            <Card
              theme={theme}
              title="Location"
              icon={MapIcon}
              link="https://maps.app.goo.gl/HkQr6KQK1dYi7Yvp9"
            >
              Boston, MA (willing to relocate)
            </Card>
            <Card
              theme={theme}
              title="Email"
              icon={EmailIcon}
              link="mailto:he.chr@northeastern.edu"
            >
              he.chr@northeastern.edu
            </Card>
          </div>
        </MotionDiv>
      </section>
    </>
  );
};

export default Contact;
