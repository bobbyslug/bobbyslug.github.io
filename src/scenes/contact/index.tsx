import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  theme: string;
};

const Contact = ({ setSelectedPage, theme }: Props) => {
  return (
    <>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light bg-green-100"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#F0FDF4" stroke="#F0FDF4"></path>
      </svg>
      <section
        id="contact"
        className={`${
          theme === "dark" ? "dark bg-gray-700" : "bg-green-100"
        } min-h-fill mx-auto py-20`}
      >
        <motion.div
          className="mx-auto flex w-5/6 flex-col justify-center gap-8"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
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
            <HText theme={theme}>Contact</HText>
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
              Location (willing to relocate)
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
