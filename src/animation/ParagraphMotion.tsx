'use client';
import React from 'react'
import {motion} from 'framer-motion'

const ParagraphMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p
      className="text-zinc-600 capitalize text-lg text-left mb-4 font-medium sm:text-xl xl:text-2xl sm:mb-6"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      {children}
    </motion.p>
  );
}

export default ParagraphMotion
