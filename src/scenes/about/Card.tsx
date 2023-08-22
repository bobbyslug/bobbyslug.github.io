import HText from "@/shared/HText";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  theme: string;
  title: string;
  years: string;
  children: React.ReactNode;
};

const Card = ({ theme, title, years, children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const dark = theme === "dark" ? "dark" : "";
  return (
    <motion.div
      className={`${dark} timeline-text`}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      animate={controls}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <HText theme={theme}>{title}</HText>
      <h1 className="py-2 font-montserrat text-sm font-bold">{years}</h1>
      <p className="text-md font-montserrat ">{children}</p>
    </motion.div>
  );
};

export default Card;
