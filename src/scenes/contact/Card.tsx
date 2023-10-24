import HText from "@/shared/HText";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  theme: string;
  title: string;
  icon: string;
  link: string;
  children: React.ReactNode;
};

const Card = ({ theme, title, icon, link, children }: Props) => {
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
      className={`${dark} align-center flex flex-row gap-4`}
      ref={ref}
      initial={hasShown ? "visible" : "hidden"}
      animate={controls}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <a href={link}>
        <img className="mt-2 h-12 w-12 drop-shadow-xl" src={icon} />
      </a>
      <div className="flex flex-col justify-center gap-1">
        <HText theme={theme}>{title}</HText>
        <p className="text-md font-montserrat ">{children}</p>
      </div>
    </motion.div>
  );
};

export default Card;
