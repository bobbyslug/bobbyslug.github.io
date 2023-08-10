import HText from "@/shared/HText";
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
        theme === "dark" ? "dark bg-gray-700" : "bg-green-100"
      } min-h-fill mx-auto py-20`}
    >
      <motion.div
        className="mx-auto flex w-5/6 flex-col justify-center gap-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText theme={theme}>ABOUT ME</HText>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            some things about me are ...fave color is sage green (in case it
            wasn't obvious) in portfolio- always on the lookout for where my
            next adventure will be!
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
