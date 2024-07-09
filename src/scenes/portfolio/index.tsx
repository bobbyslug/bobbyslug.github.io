import HText from "@/shared/HText";
import MotionDiv from "@/shared/MotionDiv";
import { SelectedPage } from "@/shared/types";
import C4CIcon from "@/assets/c4c-icon.png";
import C4CIconDark from "@/assets/c4c-icon-dark.png";
import SEIcon from "@/assets/SU.PA.png";
import PressedIcon from "@/assets/pressed-icon.png";
import WellframeIcon from "@/assets/wellframe-icon.png";
import NUIcon from "@/assets/nu-icon.png";
import AmpionIcon from "@/assets/ampion.png"
import Card from "./Card";
import NavProgressBar from "../navbar/navProgressBar";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

const Portfolio = ({ setSelectedPage, theme }: Props) => {
  const dark = theme === "dark" ? "dark" : "";
  const completion = NavProgressBar();

  return (
    <section
      id="portfolio"
      className={`${dark} secondary mx-auto py-36 justify-center transition duration-500`}
    >
      <MotionDiv
        className="mx-auto flex w-5/6 flex-col justify-center gap-8"
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.Portfolio}
      >
        <HText theme={theme} layered>PORTFOLIO</HText> 
        <MotionDiv
          className="relative -mt-16"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.Portfolio}
          slowed
        >
          <HText theme={theme}>PORTFOLIO</HText>
        </MotionDiv>
        <MotionDiv
          className="-mt-7"
          setSelectedPage={setSelectedPage}
          selectedPage={SelectedPage.Portfolio}
          delay={0.2}
        >

        <br/>
        Check out my journey so far...
        </MotionDiv> 
      </MotionDiv>
      <div
        className={`${dark} timeline mx-auto mt-20 flex w-5/6 flex-col gap-8`}
      >
        <div className={`${dark} h-5/6 animation-container -ml-1 mt-16`}>
          <span
            id='timeline-scroll'
            style={{ transform: `translateY(${completion * 1.9 - 140 }%)` }}
            className={`${dark} left-4/9 absolute h-full w-2 transition duration-300`}
          />
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
            role=""
            years="2019 September - 2023 December"
          >
            <p>
              B.S. Computer Science <br />
              One of the 7% of accepted students overpaying for an undergraduate education
            </p>
          </Card>
          <span className={`${dark} left-arrow`} />
        </div>
        <div className={`${dark} timeline-container right`}>
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
            role="Software Business Analytics Co-op"
            years="2021 July - 2021 December"
          >
            <p>
              Data cleaning and database maintenance.
            </p>
          </Card>
          <span className={`${dark} right-arrow`} />
        </div>
        <div className={`${dark} timeline-container left`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://wellframe.com/"
            target="_blank"
          >
            <img src={WellframeIcon} />
          </a>
          <Card theme={theme} title="Wellframe" role="Software Engineer Co-op" years="2022 July - 2022 December">
            <p>
              Worked on Care Manager dashboard with the Staff Experience team.
            </p>
          </Card>
          <span className={`${dark} left-arrow`} />
        </div>
        <div className={`${dark} timeline-container right`}>
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
            role="Software Developer"
            years="2023 August - 2023 December"
          >
            <p>
              Built Green Infrastructure web app for the City of Boston.
            </p>
          </Card>
          <span className={`${dark} right-arrow`} />
        </div>
        <div className={`${dark} timeline-container left short`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://www.developforgood.org/"
            target="_blank"
          >
            <img
              src={
                "https://assets-global.website-files.com/62d7c8cb6f11a35f47072653/650a327aee4574b4afe11724_Develop%20for%20Good%20Logo-p-500.png"
              }
            />
          </a>
          <Card
            theme={theme}
            title="Develop for Good"
            role="Software Developer"
            years="2023 October - 2024 February"
          >
            <p>
              Enhanced the America SCORES: Bay Area mobile coaching app.
            </p>
          </Card>
          <span className={`${dark} left-arrow`} />
        </div>
        <div className={`${dark} timeline-container right`}>
          <a
            className="hov:text-secondary-500 dark:hov:text-gray-600"
            href="https://ampion.net/"
            target="_blank"
          >
            <img
              src={AmpionIcon}
            />
          </a>
          <Card
            theme={theme}
            title="Ampion"
            role="Salesforce Developer Intern"
            years="2024 January - 2024 June"
          >
            <p>
              
            </p>
          </Card>
          <span className={`${dark} right-arrow`} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
