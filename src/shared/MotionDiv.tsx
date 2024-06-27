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
  slowed?: boolean;
};

const MotionDiv = ({
  setSelectedPage,
  selectedPage,
  children,
  className,
  delay,
  slowed
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const duration = slowed ? 0.8 : 0.5;

  return (
    <motion.div
      className={className}
      onViewportEnter={() => setSelectedPage(selectedPage)}
      ref={ref}
      initial="hidden"
      whileInView="visible"// *this refreshes animation on entering viewport*
      animate={controls}
      transition={delay ? { delay: delay, duration: duration } : { duration: duration }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
