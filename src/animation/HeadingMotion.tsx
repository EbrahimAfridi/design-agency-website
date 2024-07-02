import React from "react";
import { motion } from "framer-motion";

const HeadingMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      className="text-6xl font-bold leading-tight mb-2 sm:mb-4 text-left"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div>
        {/* {children.split("").map((word: string, index: number) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
              delay: 0.3 + index * 0.1,
            }}
          >
            {word}
          </motion.span>
        ))} */}
        {children}
      </div>
    </motion.h1>
  );
};

export default HeadingMotion;
