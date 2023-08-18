import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { SelectedPage } from "./types";
import { useInView } from "react-intersection-observer";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const MotionDiv = ({
  setSelectedPage,
  selectedPage,
  children,
  className,
  delay,
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      onViewportEnter={() => setSelectedPage(selectedPage)}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      animate={controls}
      transition={delay ? { delay: delay, duration: 0.5 } : { duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
