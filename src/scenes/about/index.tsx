import HText from "@/shared/HText";
import MotionDiv from "@/shared/MotionDiv";
import { SelectedPage } from "@/shared/types";
import C4CIcon from "@/assets/c4c-icon.png";
import C4CIconDark from "@/assets/c4c-icon-dark.png";
import SEIcon from "@/assets/SU.PA.png";
import PressedIcon from "@/assets/pressed-icon.png";
import WellframeIcon from "@/assets/wellframe-icon.png";
import NUIcon from "@/assets/nu-icon.png";
import Card from "./Card";
import NavProgressBar from "../navbar/navProgressBar";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

const About = ({ setSelectedPage, theme }: Props) => {
  const dark = theme === "dark" ? "dark" : "";
  const completion = NavProgressBar();
  return (
    <section
      id="about"
      className={`${dark} secondary mx-auto py-36  transition duration-500`}
    >
      <MotionDiv
        className="mx-auto flex w-3/6 flex-col justify-center gap-8"
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
          taking photographs, and chilling with my cat.
        </MotionDiv>
      </MotionDiv>
      <div
        className={`${dark} timeline mx-auto mt-20 flex w-5/6 flex-col justify-center gap-8`}
      >
        <div className={`${dark} animation-container -ml-1 mt-16`}>
          <span
            style={{ transform: `translateY(${completion * 1.58 - 160}%)` }}
            className={`${dark} accent2 left-4/9 absolute h-full w-2 transition`}
          />
        </div>
        <div className={`${dark} timeline-container left`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://c4cneu.com/"
            target="_blank"
          >
            <img src={theme === "dark" ? C4CIconDark : C4CIcon} />
          </a>
          <Card
            theme={theme}
            title="Code4Community"
            years="2023 August - Present"
          >
            <p>I did these things</p>
          </Card>
          <span className={`${dark} left-arrow`} />
        </div>
        <div className={`${dark} timeline-container right`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://wellframe.com/"
            target="_blank"
          >
            <img src={WellframeIcon} />
          </a>
          <Card theme={theme} title="Wellframe" years="2022 July - December">
            <p>
              • Contributed to the development of Wellframe’s web-based
              dashboard product, which facilitated Care Manager to Patient
              management (Typescript, Node.js) <br />• Collaborated closely with
              design team to bring mockups to life, iteratively adapting to
              evolving care manager needs <br />• Refactored a Ruby on Rails
              system to new Java services, improving performance and scalability
            </p>
          </Card>
          <span className={`${dark} right-arrow`} />
        </div>
        <div className={`${dark} timeline-container left`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://www.se.com/us/en/"
            target="_blank"
          >
            <img src={SEIcon} />
          </a>
          <Card
            theme={theme}
            title="Schneider Electric"
            years="2021 July - December"
          >
            <p>
              • Created an application to compare yearly sales data using
              analytical scripting tools such as data scraping, cleaning, and
              transformation, easily comprehended by non-technical audiences
              (Python/Pandas/Numpy/ Scipy/Jupyter Notebook)
              <br />• Reported digestible customer success data using
              visualization platforms like Salesforce, and Tableau
              <br />• Developed and maintained SQL databases for 4000+ customer
              accounts, including designing tables, writing stored procedures,
              and optimizing query performance (NoSQL)
            </p>
          </Card>
          <span className={`${dark} left-arrow`} />
        </div>
        <div className={`${dark} timeline-container right`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://www.pressedcafe.com/"
            target="_blank"
          >
            <img src={PressedIcon} />
          </a>
          <Card
            theme={theme}
            title="Pressed Cafe"
            years="2021 May - 2022 March"
          >
            <p>
              • Cordially greeted and assisted 300+ guests per day
              <br />• Made smoothies and drinks as barista, took orders at cash
              register, and ensured customer satisfaction during rush hour
              <br />• Bussed tables, monitored store-wide inventory, and
              maintained clean facilities in downtime
            </p>
          </Card>
          <span className={`${dark} right-arrow`} />
        </div>
        <div className={`${dark} timeline-container left`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://www.northeastern.edu/"
            target="_blank"
          >
            <img src={NUIcon} />
          </a>
          <Card
            theme={theme}
            title="Northeastern University"
            years="2019 September - Present"
          >
            <p>
              B.S. Computer Science <br /> Concentration - Artificial
              Intelligence
            </p>
          </Card>
          <span className={`${dark} left-arrow`} />
        </div>
      </div>
    </section>
  );
};

export default About;
