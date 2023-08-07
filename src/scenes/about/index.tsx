import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

const About = ({ setSelectedPage, theme }: Props) => {
  return (
    <section
      id="benefits"
      className={`${
        theme === "dark" ? "dark bg-gray-700" : "bg-slate-50"
      } min-h-fill mx-auto py-20`}
    >
      <motion.div
        className="mx-auto flex w-5/6 flex-col justify-center gap-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <div>
          <HText theme={theme}>ABOUT ME</HText>
          <p>some things about me are</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
