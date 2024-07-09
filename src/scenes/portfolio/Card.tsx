import HText from "@/shared/HText";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  theme: string;
  title: string;
  role: string;
  years: string;
  children: React.ReactNode;
};

const Card = ({ theme, title, role, years, children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setHasShown(true);
    }
  }, [controls, inView]);
  const dark = theme === "dark" ? "dark" : "";
  return (
    <motion.div
      className={`${dark} timeline-text`}
      ref={ref}
      initial={hasShown ? "visible" : "hidden"}
      animate={controls}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <HText theme={theme}>{title}</HText>
      <span>{role}</span>
      <h1 className="py-2 font-montserrat text-sm font-bold -mt-2">{years}</h1>
      <p className="text-md font-montserrat ">{children}</p>
    </motion.div>
  );
};

export default Card;
